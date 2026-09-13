/**
 * A production-ready, platform-neutral square ad creative for HVAC operators.
 * The canvas intentionally owns its viewport so it exports cleanly without a
 * surrounding mockup frame.
 */
export function HvacEmptyCalendar() {
  return (
    <main className="hvac-ad" aria-label="Aboupreneur HVAC lead generation ad">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600&family=Space+Grotesk:wght@600;700&display=swap');

        .hvac-ad {
          --ink: #0A0A0A;
          --paper: #F7F4ED;
          --orange: #F09C00;
          box-sizing: border-box;
          width: 100vw;
          height: 100dvh;
          min-height: 320px;
          overflow: hidden;
          position: relative;
          isolation: isolate;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          padding: clamp(28px, 7vw, 92px);
          color: var(--paper);
          background: var(--ink);
          font-family: 'Inter', sans-serif;
        }

        .hvac-ad *,
        .hvac-ad *::before,
        .hvac-ad *::after {
          box-sizing: border-box;
        }

        .hvac-ad__logo {
          display: block;
          width: clamp(58px, 11.5vw, 138px);
          height: clamp(58px, 11.5vw, 138px);
          object-fit: cover;
          flex: 0 0 auto;
        }

        .hvac-ad__copy {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: min(100%, 850px);
        }

        .hvac-ad__headline {
          max-width: 9.5em;
          margin: 0;
          color: var(--paper);
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(3.25rem, 10.2vw, 9.1rem);
          font-weight: 700;
          line-height: .91;
          letter-spacing: -.075em;
        }

        .hvac-ad__benefit {
          margin: clamp(22px, 3.2vw, 42px) 0 0;
          color: var(--paper);
          font-size: clamp(1rem, 2.15vw, 1.75rem);
          font-weight: 500;
          line-height: 1.2;
          letter-spacing: -.025em;
        }

        .hvac-ad__cta {
          appearance: none;
          border: 0;
          border-radius: 0;
          margin-top: clamp(26px, 4.4vw, 56px);
          padding: clamp(16px, 2vw, 26px) clamp(23px, 3.2vw, 42px);
          color: var(--ink);
          background: var(--orange);
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.05rem, 2.2vw, 1.8rem);
          font-weight: 700;
          line-height: 1;
          letter-spacing: -.035em;
          cursor: pointer;
          transition: background-color 160ms ease, transform 160ms ease;
        }

        .hvac-ad__cta:hover {
          background: #FFB52B;
          transform: translateY(-2px);
        }

        .hvac-ad__cta:focus-visible {
          outline: 3px solid var(--paper);
          outline-offset: 5px;
        }

        @media (min-aspect-ratio: 1.4/1) {
          .hvac-ad {
            padding: clamp(32px, 5.8vw, 70px) clamp(38px, 7vw, 110px);
          }

          .hvac-ad__copy {
            width: min(72vw, 900px);
          }

          .hvac-ad__headline {
            max-width: 12em;
            font-size: clamp(3.5rem, 8.4vw, 8.25rem);
          }

          .hvac-ad__benefit {
            margin-top: clamp(15px, 2vw, 30px);
          }

          .hvac-ad__cta {
            margin-top: clamp(18px, 2.4vw, 34px);
          }
        }

        @media (max-height: 520px) {
          .hvac-ad {
            padding-top: 24px;
            padding-bottom: 24px;
          }

          .hvac-ad__logo {
            width: 56px;
            height: 56px;
          }

          .hvac-ad__headline {
            font-size: clamp(2.65rem, 8vw, 5.3rem);
          }

          .hvac-ad__benefit {
            margin-top: 12px;
            font-size: clamp(.9rem, 2vw, 1.25rem);
          }

          .hvac-ad__cta {
            margin-top: 16px;
            padding: 13px 22px;
            font-size: 1rem;
          }
        }
      `}</style>

      <img
        className="hvac-ad__logo"
        src="/__mockup/images/aboupreneur-brand-mark.png"
        alt="Aboupreneur"
      />

      <section className="hvac-ad__copy">
        <h1 className="hvac-ad__headline">Slow Week. Same Overhead.</h1>
        <p className="hvac-ad__benefit">Turn local searches into booked calls.</p>
        <button className="hvac-ad__cta" type="button">Book More Jobs</button>
      </section>
    </main>
  );
}