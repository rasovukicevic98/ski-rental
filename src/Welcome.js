import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import i18n from './i18n';

const Welcome = () => {
  const { t } = useTranslation();

  return (
    <div style={{
      position: 'relative',
      minHeight: '100vh',
      width: '100vw',
      margin: 0,
      padding: 0,
      overflow: 'hidden',
      backgroundImage: `url('https://images.pexels.com/photos/848612/pexels-photo-848612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'scroll',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: '"Helvetica Neue", Arial, sans-serif',
      color: 'white'
    }}>

      {/* DARK OVERLAY */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(0, 0, 0, 0.52)',
        zIndex: 1
      }}></div>

      {/* CONTENT */}
      <div style={{ position: 'relative', zIndex: 2, padding: '20px' }}>

        {/* LANGUAGE DROPDOWN */}
        <div style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          zIndex: 10
        }}>
          <select
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            defaultValue={i18n.language}
            style={{
              padding: '10px 14px',
              fontSize: '1rem',
              fontWeight: '600',
              background: 'rgba(255, 255, 255, 0.18)',
              color: 'white',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '14px',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              appearance: 'none',
              cursor: 'pointer',
              outline: 'none',
              minWidth: '70px',
              textAlign: 'center'
            }}
          >
            <option value="en" style={{ color: '#000' }}>EN</option>
            <option value="cnr" style={{ color: '#000' }}>MNE</option>
            <option value="sq" style={{ color: '#000' }}>AL</option>
            <option value="ru" style={{ color: '#000' }}>RU</option>
          </select>
        </div>

        {/* HERO */}
        <div style={{ textAlign: 'center', marginTop: '8vh' }}>
          <h1 style={{
            fontSize: '2.6rem',
            fontWeight: '900',
            margin: '0 0 12px 0',
            textShadow: '0 3px 8px rgba(0,0,0,0.7)',
            letterSpacing: '0.5px'
          }}>
            Ski Rental Bjelasica
          </h1>

          {/* <p style={{
            fontSize: '1.22rem',
            maxWidth: '92%',
            margin: '0 auto 20px',
            lineHeight: '1.6',
            opacity: 0.96,
            textShadow: '0 2px 5px rgba(0,0,0,0.6)',
            fontWeight: '500'
          }}>
            {t('Ski equipment delivered at your doorstep')}
          </p> */}

          {/* SERVICES CARD */}
          <div style={{
            width: '90vw',
            maxWidth: '390px',
            background: 'rgba(255, 255, 255, 0.20)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            borderRadius: '20px',
            padding: '24px',
            margin: '22px auto',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            boxShadow: '0 10px 35px rgba(0,0,0,0.22)',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: '1.45rem',
              margin: '0 0 16px 0',
              fontWeight: '700'
            }}>
              {t('Services')}
            </h2>

            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              fontSize: '1.05rem',
              lineHeight: '2'
            }}>
              <li>{t('service5')}</li>
              <li>{t('service6')}</li>
            </ul>
          </div>

          {/* BOOK NOW */}
          <Link to="/form" style={{
            textDecoration: 'none',
            display: 'block',
            margin: '0 auto 28px',
            width: '90vw',
            maxWidth: '390px'
          }}>
            <button style={{
              width: '100%',
              padding: '20px',
              fontSize: '1.45rem',
              fontWeight: 'bold',
              background: '#fbbf24',
              color: '#1e293b',
              border: 'none',
              borderRadius: '18px',
              cursor: 'pointer',
              boxShadow: '0 12px 30px rgba(251,191,36,0.55)',
              transition: 'all 0.2s',
              textTransform: 'uppercase',
              letterSpacing: '1.5px'
            }}>
              {t('bookNow')}
            </button>
          </Link>
        </div>

        {/* PHONE CARD */}
        <div style={{
          width: '90vw',
          maxWidth: '390px',
          background: 'rgba(34, 197, 94, 0.22)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderRadius: '18px',
          padding: '20px',
          margin: '20px auto',
          border: '1px solid rgba(34, 197, 94, 0.3)',
          boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
          textAlign: 'center'
        }}>
          <a
            href="tel:+38268023001"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '1.25rem',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px'
            }}
          >
            <span style={{ fontSize: '1.4rem' }}>Phone</span> +382 68 023 001
          </a>

          <p style={{
            margin: '10px 0 0',
            fontSize: '1rem',
            opacity: 0.9
          }}>
            {t('Working Hours: 07:30 - 23:00')}
          </p>
        </div>

        {/* MAP */}
        <div style={{
          width: '90vw',
          maxWidth: '390px',
          margin: '24px auto',
          borderRadius: '18px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
          cursor: 'pointer'
        }}>
          <iframe
            title="Ski Rental Bjelasica"
            width="100%"
            height="240"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=Ski%20Rental%20Bjelasica&t=&z=13&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>

        <p style={{
          textAlign: 'center',
          fontSize: '0.9rem',
          margin: '-12px auto 40px',
          width: '90vw',
          maxWidth: '390px',
          opacity: 0.88,
          fontStyle: 'italic'
        }}>
          {t('tapToOpen')}
        </p>

        {/* SOCIAL ICONS */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '26px',
          marginBottom: '22px'
        }}>
          {/* FACEBOOK */}
          <a
            href="https://www.facebook.com/p/Ski-rental-Bjelasica-100089581155385"
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: '32px' }}
          >
            <svg viewBox="0 0 24 24" fill="#1877f2" width="32" height="32">
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1 .9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.5l-.4 3h-2v7A10 10 0 0 0 22 12" />
            </svg>
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/skirentalbjelasica?igsh=Mmtnc3VidmltczB1"
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: '32px' }}
          >
            <svg viewBox="0 0 24 24" fill="#E1306C" width="32" height="32">
              <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 7.3A2.8 2.8 0 1 1 14.8 12 2.8 2.8 0 0 1 12 14.8zm5-8.9a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1z" />
            </svg>
          </a>
        </div>

        {/* FOOTER */}
        <footer style={{
          textAlign: 'center',
          fontSize: '0.92rem',
          opacity: 0.85,
          textShadow: '0 1px 3px rgba(0,0,0,0.5)'
        }}>
          © 2025 Ski Rental Bjelasica
        </footer>

      </div>
    </div>
  );
};

export default Welcome;
