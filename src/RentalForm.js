import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useParams, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './RentalForm.css';
import apartments from "./data/apartments";

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
    formState: { errors, isSubmitting }
  } = useForm();

  const [showSuccess, setShowSuccess] = useState(false);

  // Watch values
  const equipmentType = watch('equipmentType');
  const helmet = watch('helmet');
  const jacket = watch('jacket');
  const pants = watch('pants');

  const clothesOnly = equipmentType === 'clothesOnly';

  const wantsSkis =
    !clothesOnly &&
    (equipmentType === 'fullSet' ||
     equipmentType === 'onlySkis' ||
     equipmentType === 'snowboard');

  const wantsBoots =
    !clothesOnly &&
    (equipmentType === 'fullSet' ||
     equipmentType === 'onlyBoots' ||
     equipmentType === 'snowboard');

  const showHelmetSize = helmet === 'yes';
  const showJacketSize = jacket === 'yes';
  const showPantsSize = pants === 'yes';

  // Prefill location
  useEffect(() => {
    if (apartmentData) {
      setValue('location', `${apartmentData.name}, ${apartmentData.unit}`);
    }
  }, [apartmentData, setValue]);

  // Clear fields based on selections
  useEffect(() => {
    if (!wantsSkis || clothesOnly) {
      setValue('height', '—');
      setValue('weight', '—');
    }
    if (!wantsBoots || clothesOnly) {
      setValue('shoeSize', '—');
    }
    if (helmet !== 'yes') setValue('helmetSize', '');
    if (jacket !== 'yes') setValue('jacketSize', '');
    if (pants !== 'yes') setValue('pantsSize', '');
  }, [wantsSkis, wantsBoots, helmet, jacket, pants, clothesOnly, setValue]);

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        'service_gnu085e',
        'template_wf23o5y',
        data,
        'wQsv3Cbh-qNO2lWuo'
      );
      setShowSuccess(true);
    } catch (error) {
      alert(t('emailError'));
    }
  };

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const today = new Date().toISOString().split('T')[0];

  return (
    <>
      <div className="form-page">
        <div className="form-container">
          <h2 className="form-title">{t('bookNow')}</h2>

          <form onSubmit={handleSubmit(onSubmit)}>

            {/* Equipment Type */}
            <div className="form-field">
              <label>{t('equipmentType')} *</label>
              <select {...register('equipmentType', { required: t('required') })} className="select">
                <option value="fullSet">{t('fullSet')}</option>
                <option value="onlySkis">{t('onlySkis')}</option>
                <option value="onlyBoots">{t('onlyBoots')}</option>
                <option value="snowboard">{t('snowboardPackage')}</option>

                {/* NEW OPTION */}
                <option value="clothesOnly">{t('clothesOnly') || 'Helmet / Jacket Only'}</option>
              </select>
              {errors.equipmentType && <span className="error">{errors.equipmentType.message}</span>}
            </div>

            {/* Name */}
            <div className="form-field">
              <label>{t('name')} *</label>
              <input {...register('name', { required: t('required') })} className="input" />
            </div>

            {/* Phone */}
            <div className="form-field">
              <label>{t('phone')} *</label>
              <input type="tel" {...register('phone', { required: t('required') })} className="input" />
            </div>

            {/* Dates */}
            <div className="form-field">
              <label>{t('fromDate')} *</label>
              <input type="date" {...register('fromDate', { required: t('required') })} className="input" min={today} />
            </div>

            <div className="form-field">
              <label>{t('toDate')} *</label>
              <input type="date" {...register('toDate', { required: t('required') })} className="input" min={watch('fromDate') || today} />
            </div>

            {/* Location */}
            <div className="form-field">
              <label>{t('location')} *</label>
              <input {...register('location', { required: t('required') })} className="input" />
            </div>

            {/* Height & Weight */}
            {wantsSkis && (
              <>
                <div className="form-field">
                  <label>{t('height')} *</label>
                  <input type="number" {...register('height')} className="input" />
                </div>

                <div className="form-field">
                  <label>{t('weight')} *</label>
                  <input type="number" {...register('weight')} className="input" />
                </div>
              </>
            )}

            {/* Age */}
            <div className="form-field">
              <label>{t('age')} *</label>
              <input type="number" {...register('age', { required: t('required') })} className="input" />
            </div>

            {/* Sex */}
            <div className="form-field">
              <label>{t('sex')} *</label>
              <select {...register('sex', { required: t('required') })} className="select">
                <option value="male">{t('male')}</option>
                <option value="female">{t('female')}</option>
                <option value="other">{t('other')}</option>
              </select>
            </div>

            {/* Shoe Size */}
            {wantsBoots && (
              <div className="form-field">
                <label>{t('shoeSize')} *</label>
                <select {...register('shoeSize')} className="select">
                  {[...Array(13)].map((_, i) => (
                    <option key={35+i} value={35+i}>{35+i}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Helmet */}
            <div className="form-field">
              <label>{t('helmet')}</label>
              <select {...register('helmet')} className="select">
                <option value="no">{t('no')}</option>
                <option value="yes">{t('yes')}</option>
              </select>
            </div>

            {showHelmetSize && (
              <div className="form-field">
                <label>{t('helmetSize')} *</label>
                <select {...register('helmetSize')} className="select">
                  {sizes.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            )}

            {/* Jacket */}
            <div className="form-field">
              <label>{t('jacket')}</label>
              <select {...register('jacket')} className="select">
                <option value="no">{t('no')}</option>
                <option value="yes">{t('yes')}</option>
              </select>
            </div>

            {showJacketSize && (
              <div className="form-field">
                <label>{t('jacketSize')} *</label>
                <select {...register('jacketSize')} className="select">
                  {sizes.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            )}

            {/* Pants */}
            <div className="form-field">
              <label>{t('pants')}</label>
              <select {...register('pants')} className="select">
                <option value="no">{t('no')}</option>
                <option value="yes">{t('yes')}</option>
              </select>
            </div>

            {showPantsSize && (
              <div className="form-field">
                <label>{t('pantsSize')} *</label>
                <select {...register('pantsSize')} className="select">
                  {sizes.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            )}

            {/* Notes */}
            <div className="form-field">
              <label>{t('specialNotes')}</label>
              <textarea {...register('specialNotes')} className="textarea" />
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? t('sending') : t('submit')}
            </button>
          </form>
        </div>
      </div>

      {showSuccess && (
        <div className="success-overlay">
          <div className="success-box">
            <h3>{t('success')}</h3>
            <p>{t('anotherReservation')}</p>

            <div className="dialog-actions">
              <button
                className="dialog-btn primary"
                onClick={() => {
                  reset();
                  if (apartmentData)
                    setValue('location', `${apartmentData.name}, ${apartmentData.unit}`);
                  setShowSuccess(false);
                }}
              >
                {t('yes')}
              </button>

              <button className="dialog-btn secondary" onClick={() => navigate('/')}>
                {t('no')}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RentalForm;
