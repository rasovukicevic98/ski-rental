// src/RentalForm.js
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./RentalForm.css";
import apartments from "./data/apartments";
import i18n from "./i18n";
import { pricingTable } from "./data/pricing";

const PICKUP_LOCATION = "Ski Rental Bjelasica – Pickup Point";

const equipmentLabels = {
  fullSet: "fullSet",
  skis: "skis",
  boots: "boots",
  snowboard: "snowboard",
  clothes: "clothes",
};

const RentalForm = () => {
  const { building, unit } = useParams();
  const apartmentData = apartments?.[building]?.[unit] || null;

  const { t } = useTranslation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      deliveryMethod: "delivery",
      equipmentType: "fullSet",
      helmet: "no",
      goggles: "no",
      jacket: "no",
      pants: "no",
      sex: "male",
    },
  });

  const [addedItems, setAddedItems] = useState([]);
  const [finalPopup, setFinalPopup] = useState(false);
  const [showPricing, setShowPricing] = useState(false);

  const deliveryMethod = watch("deliveryMethod");
  const equipmentType = watch("equipmentType");
  const helmet = watch("helmet");
  const jacket = watch("jacket");
  const pants = watch("pants");
  const fromDate = watch("fromDate");
  const locationField = watch("location");

  const showHelmetSize = helmet === "yes";
  const showJacketSize = jacket === "yes";
  const showPantsSize = pants === "yes";

  const isMethodLocked = addedItems.length > 0;

  /* LOCATION AUTO-FILL */
  useEffect(() => {
    if (deliveryMethod === "pickup") {
      setValue("location", PICKUP_LOCATION);
    } else if (apartmentData) {
      setValue("location", `${apartmentData.name}, ${apartmentData.unit}`);
    }
  }, [deliveryMethod, apartmentData, setValue]);

  /* CONDITIONAL FIELD CLEANUP */
 useEffect(() => {
  const needsHeightWeight = ["fullSet", "skis", "snowboard"].includes(
    equipmentType
  );
  const needsBoots = ["fullSet", "boots", "snowboard"].includes(
    equipmentType
  );

  if (!needsHeightWeight) {
    setValue("height", "", { shouldValidate: false, shouldDirty: false });
    setValue("weight", "", { shouldValidate: false, shouldDirty: false });
  }

  if (!needsBoots) {
    setValue("shoeSize", "", { shouldValidate: false, shouldDirty: false });
  }

  if (helmet !== "yes")
    setValue("helmetSize", "", { shouldValidate: false, shouldDirty: false });

  if (jacket !== "yes")
    setValue("jacketSize", "", { shouldValidate: false, shouldDirty: false });

  if (pants !== "yes")
    setValue("pantsSize", "", { shouldValidate: false, shouldDirty: false });
}, [equipmentType, helmet, jacket, pants, setValue]);


  const addToBasket = (data) => {
    const days = Math.max(
      1,
      Math.ceil((new Date(data.toDate) - new Date(data.fromDate)) / 86400000)
    );

    setAddedItems((prev) => [
      ...prev,
      {
        equipmentType: data.equipmentType,
        days,
        location: data.location,
        deliveryMethod: data.deliveryMethod,
        details: data,
      },
    ]);
  };

  const onSubmit = (data) => {
    addToBasket(data);

    reset({
    deliveryMethod: watch("deliveryMethod"),
    location: watch("location"),
    email: watch("email"),
    phone: watch("phone"),
    fromDate: watch("fromDate"),
    toDate: watch("toDate"),

    // 🎿 per-person data (RESET)
    equipmentType: "fullSet",
    name: "",
    height: "",
    weight: "",
    shoeSize: "",
    age: "",
    sex: "male",

    helmet: "no",
    goggles: "no",
    jacket: "no",
    pants: "no",
    specialNotes: "",
  });
  };

  const buildEmailContent = () => {
    if (!addedItems.length) return "";

    const first = addedItems[0];
    const d = first.details;

    let content = `
Delivery method: ${
      d.deliveryMethod === "pickup"
        ? "Pickup at rental"
        : "Delivery to apartment"
    }
Location: ${d.location}

From: ${d.fromDate}
To: ${d.toDate}
Days: ${first.days}

`;

    addedItems.forEach((item, index) => {
      const det = item.details;
      content += `
Customer ${index + 1}
Name: ${det.name}
Phone: ${det.phone}
Email: ${det.email || "-"}

Equipment: ${t(equipmentLabels[item.equipmentType])}
Height: ${det.height}
Weight: ${det.weight}
Shoe size: ${det.shoeSize}
Helmet: ${det.helmet} ${det.helmetSize || ""}
Goggles: ${det.goggles}
Jacket: ${det.jacket} ${det.jacketSize || ""}
Pants: ${det.pants} ${det.pantsSize || ""}
Notes: ${det.specialNotes || "-"}
-----------------------------
`;
    });

    return content;
  };

  const sendEmail = async () => {
    try {
      const primaryLocation =
        addedItems[0]?.location ||
        locationField ||
        (apartmentData ? `${apartmentData.name}, ${apartmentData.unit}` : "-");

      // 📩 ADMIN EMAIL (reservation note)
      await emailjs.send(
        "service_gnu085e",
        "template_wf23o5y",
        {
          location: primaryLocation,
          emailContent: buildEmailContent(),
        },
        "wQsv3Cbh-qNO2lWuo"
      );

      // 📩 CUSTOMER CONFIRMATION
      await sendCustomerConfirmation(addedItems[0], addedItems);

      setFinalPopup(true);
      setAddedItems([]);
    } catch (err) {
      console.error(err);
      alert("Error sending email");
    }
  };

  const sendCustomerConfirmation = async (firstItem, allItems) => {
    if (!firstItem?.details?.email) return;

    const det = firstItem.details;

    await emailjs.send(
      "service_gnu085e",
      "template_o4wyfoa",
      {
        email: det.email,

        // 🚚 Delivery / Pickup
        deliveryMethod:
          det.deliveryMethod === "pickup"
            ? "Pickup at Ski Rental Bjelasica"
            : "Delivery to apartment",

        // 📍 Main location shown to user
        location:
          det.deliveryMethod === "pickup"
            ? "Pickup at Ski Rental Bjelasica"
            : det.location,

        // 🧭 Always shown (meaningful only for pickup)
        pickupLocation:
          "Ski Rental Bjelasica – main rental facility, located on the way to the ski center",

        // 🗓️ Dates
        fromDate: det.fromDate,
        toDate: det.toDate,
        days: firstItem.days,

        // 🧍 Reservation details
        message: allItems
          .map(
            (x, i) => `
${i + 1}. ${t(equipmentLabels[x.equipmentType])} — ${x.days} ${t("days")}
${t("helmet")}: ${x.details.helmet} ${x.details.helmetSize || ""}
${t("goggles")}: ${x.details.goggles}
${t("jacket")}: ${x.details.jacket} ${x.details.jacketSize || ""}
${t("pants")}: ${x.details.pants} ${x.details.pantsSize || ""}
${t("notes")}: ${x.details.specialNotes || "-"}`
          )
          .join("\n"),
      },
      "wQsv3Cbh-qNO2lWuo"
    );
  };

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <div className="form-page">
        {/* LANGUAGE SELECTOR */}
        <div
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            zIndex: 9999,
          }}
        >
          <select
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            defaultValue={i18n.language}
            style={{
              padding: "10px 14px",
              background: "rgba(0,0,0,0.15)",
              color: "white",
              borderRadius: "14px",
              cursor: "pointer",
            }}
          >
            <option value="en" style={{ color: "black" }}>
              EN
            </option>
            <option value="cnr" style={{ color: "black" }}>
              MNE
            </option>
            <option value="sq" style={{ color: "black" }}>
              AL
            </option>
            <option value="ru" style={{ color: "black" }}>
              RU
            </option>
          </select>
        </div>

        <div className="top-logo" onClick={() => navigate("/")}>
          <img src="/logo.png" alt="Ski Rental Logo" />
        </div>

        <div className="form-container">
          <h2 className="form-title">{t("bookEquipment")}</h2>

          {/* DELIVERY / PICKUP */}
          <div className="form-field">
            <label>{t("deliveryMethod")}</label>
            {isMethodLocked && (
              <p className="black-notification" >
                {t("deliveryLocked")}
              </p>
            )}
            <select
              {...register("deliveryMethod")}
              className="select"
              disabled={isMethodLocked}
            >
              <option value="delivery">{t("deliveryToApartment")}</option>
              <option value="pickup">{t("pickupAtRental")}</option>
            </select>

            
          </div>
          {deliveryMethod === "delivery" && (
            <p style={{ fontSize: "14px", textAlign: "center", opacity: 0.8 }}>
              {t("deliveryHoursInfo")}
            </p>
          )}

          {deliveryMethod === "pickup" && (
            <>
              <p
                style={{ fontSize: "14px", textAlign: "center", opacity: 0.8 }}
              >
                {t("pickupInfo")}
              </p>

              <div
                style={{
                  width: "100%",
                  borderRadius: "14px",
                  overflow: "hidden",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
                  marginBottom: "20px",
                }}
              >
                <iframe
                  title="Ski Rental Bjelasica"
                  width="100%"
                  height="160"
                  style={{ border: 0 }}
                  loading="lazy"
                  src="https://maps.google.com/maps?q=Ski%20Rental%20Bjelasica&z=13&output=embed"
                />
              </div>
            </>
          )}

          {/* MAIN FORM */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-field">
              <label>{t("whatDoYouNeed")}</label>
              <select {...register("equipmentType")} className="select">
                <option value="fullSet">{t("fullSet")}</option>
                <option value="skis">{t("skis")}</option>
                <option value="boots">{t("boots")}</option>
                <option value="snowboard">{t("snowboard")}</option>
                <option value="clothes">{t("clothes")}</option>
              </select>
            </div>

            <div className="form-field">
              <label>{t("name")} *</label>
              {errors.name && (
                <div className="error-text">{t("nameRequired")}</div>
              )}
              <input
                {...register("name", { required: true })}
                className="input"
              />
            </div>

            <div className="form-field">
              <label>{t("email")} *</label>

              {errors.email && (
                <div className="error-text">{errors.email.message}</div>
              )}
              <input
                {...register("email", {
                  required: t("emailRequired"),
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: t("invalidEmail"),
                  },
                })}
                className="input"
                disabled={isMethodLocked}
                placeholder="example@gmail.com"
              />

            </div>

            <div className="form-field">
              <label>{t("phone")} *</label>
              {errors.phone && (
                <div className="error-text">{t("phoneRequired")}</div>
              )}
              <input
                type="tel"
                {...register("phone", { required: true })}
                className="input"
                disabled={isMethodLocked}
              />
            </div>

            <div className="form-field">
              <label>{t("from")} *</label>
              {errors.fromDate && (
                <div className="error-text">{t("fromDateRequired")}</div>
              )}
              <input
                type="date"
                {...register("fromDate", { required: true })}
                className="input"
                min={today}
              />
            </div>

            <div className="form-field">
              <label>{t("to")} *</label>
              {errors.toDate && (
                <div className="error-text">{t("toDateRequired")}</div>
              )}
              <input
                type="date"
                {...register("toDate", { required: true })}
                className="input"
                min={fromDate || today}
              />
            </div>

            <div className="form-field">
              <label>{t("location")} *</label>
              {errors.location && (
                <div className="error-text">{t("locationRequired")}</div>
              )}
              {isMethodLocked && (
                <p className="black-notification">
                  {t("locationLockedSameAddress")}
                </p>
              )}
              <input
                {...register("location", { required: true })}
                className="input"
                disabled={deliveryMethod === "pickup"|| isMethodLocked}
                style={{ opacity: deliveryMethod === "pickup" ? 0.6 : 1 }}
              />
            </div>

            {["fullSet", "skis", "snowboard"].includes(equipmentType) && (
              <>
                <div className="form-field">
                  <label>{t("height")} (cm)</label>
                  {errors.height && (
                    <div className="error-text">{t("heightRequired")}</div>
                  )}
                  <input
                    type="number"
                    {...register("height", { required: true })}
                    className="input"
                  />
                </div>

                <div className="form-field">
                  <label>{t("weight")} (kg)</label>
                  {errors.weight && (
                    <div className="error-text">{t("weightRequired")}</div>
                  )}
                  <input
                    type="number"
                    {...register("weight", { required: true })}
                    className="input"
                  />
                </div>
              </>
            )}

            {["fullSet", "boots", "snowboard"].includes(equipmentType) && (
              <div className="form-field">
                <label>{t("shoeSize")}</label>
                {errors.shoeSize && (
                  <div className="error-text">{t("shoeSizeRequired")}</div>
                )}
                <select
                  {...register("shoeSize", {
                    required: ["fullSet", "boots", "snowboard"].includes(
                      equipmentType
                    ),
                  })}
                  className="select"
                >
                  <option value="">{t("select")}</option>
                  {[...Array(13)].map((_, i) => (
                    <option key={i} value={35 + i}>
                      {35 + i}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="form-field">
              <label>{t("age")}</label>
              <input type="number" {...register("age")} className="input" />
            </div>

            <div className="form-field">
              <label>{t("sex")}</label>
              <select {...register("sex")} className="select">
                <option value="male">{t("male")}</option>
                <option value="female">{t("female")}</option>
                <option value="other">{t("other")}</option>
              </select>
            </div>

            <div className="form-field">
              <label>{t("helmet")}</label>
              <select {...register("helmet")} className="select">
                <option value="no">{t("no")}</option>
                <option value="yes">{t("yes")}</option>
              </select>
            </div>

            {showHelmetSize && (
              <div className="form-field">
                <label>{t("helmetSize")}</label>
                <select {...register("helmetSize")} className="select">
                  {sizes.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
            )}

            <div className="form-field">
              <label>{t("goggles")}</label>
              <select {...register("goggles")} className="select">
                <option value="no">{t("no")}</option>
                <option value="yes">{t("yes")}</option>
              </select>
            </div>

            <div className="form-field">
              <label>{t("jacket")}</label>
              <select {...register("jacket")} className="select">
                <option value="no">{t("no")}</option>
                <option value="yes">{t("yes")}</option>
              </select>
            </div>

            {showJacketSize && (
              <div className="form-field">
                <label>{t("jacketSize")}</label>
                <select {...register("jacketSize")} className="select">
                  {sizes.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
            )}

            <div className="form-field">
              <label>{t("pants")}</label>
              <select {...register("pants")} className="select">
                <option value="no">{t("no")}</option>
                <option value="yes">{t("yes")}</option>
              </select>
            </div>

            {showPantsSize && (
              <div className="form-field">
                <label>{t("pantsSize")}</label>
                <select {...register("pantsSize")} className="select">
                  {sizes.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
            )}

            <div className="form-field">
              <label>{t("notes")}</label>
              <textarea {...register("specialNotes")} className="textarea" />
            </div>

            <button className="submit-btn">{t("addToList")}</button>
          </form>

          {addedItems.length > 0 && (
            <div className="basket-list">
              <h3>{t("yourReservations")}</h3>

              {addedItems.map((item, i) => {
                const det = item.details;
                return (
                  <div key={i} className="basket-item">
                    <div className="basket-header">
                      <strong>{t(equipmentLabels[item.equipmentType])}</strong>{" "}
                      — {item.days} {t("days")}
                    </div>

                    <div className="basket-details">
                      <div>
                        <strong>{t("name")}:</strong> {det.name}
                      </div>
                      <div>
                        <strong>{t("helmet")}:</strong> {det.helmet}{" "}
                        {det.helmetSize}
                      </div>
                      <div>
                        <strong>{t("goggles")}:</strong> {det.goggles}
                      </div>
                      <div>
                        <strong>{t("jacket")}:</strong> {det.jacket}{" "}
                        {det.jacketSize}
                      </div>
                      <div>
                        <strong>{t("pants")}:</strong> {det.pants}{" "}
                        {det.pantsSize}
                      </div>

                      {det.specialNotes && (
                        <div>
                          <strong>{t("notes")}:</strong> {det.specialNotes}
                        </div>
                      )}
                    </div>

                    <button
                      className="remove-btn"
                      onClick={() =>
                        setAddedItems((prev) =>
                          prev.filter((_, idx) => idx !== i)
                        )
                      }
                    >
                      {t("remove")}
                    </button>
                  </div>
                );
              })}

              <button className="submit-btn" onClick={sendEmail}>
                {t("sendAllReservations")}
              </button>
            </div>
          )}

          {/* PRICING */}
          <div style={{ marginTop: "30px" }}>
            <button
              type="button"
              className="submit-btn"
              style={{ width: "100%", background: "#444" }}
              onClick={() => setShowPricing((v) => !v)}
            >
              {showPricing ? t("hidePricing") : t("checkPricing")}
            </button>

            {showPricing && (
              <div className="pricing-table-wrapper">
                <table className="pricing-table">
                  <thead>
                    <tr>
                      <th>{t("equipment")}</th>
                      <th>1</th>
                      <th>2</th>
                      <th>3</th>
                      <th>4</th>
                      <th>5</th>
                      <th>6</th>
                      <th>{t("nextDay")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingTable.map((row) => (
                      <tr key={row.key}>
                        <td>{t(row.key)}</td>
                        {row.prices.map((p, i) => (
                          <td key={i}>{p}€</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      {finalPopup && (
        <div className="success-overlay">
          <div className="success-box">
            <h3>{t("reservationSent")}</h3>
            <p>{t("thankYouOrderReceived")}</p>
            <button
              className="dialog-btn primary"
              onClick={() => {
                setFinalPopup(false);
                navigate("/");
              }}
            >
              {t("done")}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default RentalForm;
