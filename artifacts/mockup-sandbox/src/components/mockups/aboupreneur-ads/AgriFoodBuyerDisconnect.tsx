/**
 * A square-ready direct-response ad. The fluid type and spacing preserve the
 * composition when the export viewport changes from 1:1 to a wide placement.
 */
export function AgriFoodBuyerDisconnect() {
  const handleReachMoreBuyers = () => {
    window.open("https://aboupreneur.com", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="agri-food-ad" role="img" aria-label="Aboupreneur ad: Great Product. Buyers Still Scroll Past.">
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@500;600&family=Space+Grotesk:wght@600;700&display=swap");

        .agri-food-ad {
          --ink: #0A0A0A;
          --paper: #F7F5EF;
          --orange: #F09C00;
          box-sizing: border-box;
          width: 100vw;
          height: 100dvh;
          min-height: 320px;
          overflow: hidden;
          background: var(--ink);
          color: var(--paper);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          padding: clamp(22px, 4.2vw, 54px);
          font-family: "Inter", sans-serif;
        }

        .agri-food-ad *,
        .agri-food-ad *::before,
        .agri-food-ad *::after {
          box-sizing: border-box;
        }

        .agri-food-ad__logo {
          display: block;
          width: clamp(56px, 7vw, 96px);
          height: auto;
          flex: 0 0 auto;
        }

        .agri-food-ad__message {
          width: min(100%, 880px);
          margin-top: auto;
          margin-bottom: auto;
          padding-block: clamp(20px, 3.4vh, 48px);
        }

        .agri-food-ad__headline {
          margin: 0;
          color: var(--paper);
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(2.55rem, min(9.7vw, 7.4vh), 8.9rem);
          font-weight: 700;
          letter-spacing: -0.075em;
          line-height: 0.91;
          max-width: min(100%, clamp(20rem, 64vw, 54rem));
        }

        .agri-food-ad__benefit {
          margin: clamp(20px, 3.5vw, 42px) 0 0;
          color: var(--paper);
          font-family: "Inter", sans-serif;
          font-size: clamp(1rem, 2.15vw, 1.75rem);
          font-weight: 500;
          letter-spacing: -0.025em;
          line-height: 1.2;
        }

        .agri-food-ad__cta {
          appearance: none;
          border: 0;
          border-radius: 0;
          background: var(--orange);
          color: var(--ink);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: clamp(50px, 5.8vw, 72px);
          padding: 0 clamp(22px, 3.25vw, 42px);
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(1rem, 1.65vw, 1.35rem);
          font-weight: 700;
          letter-spacing: -0.035em;
          transition: background-color 160ms ease, transform 160ms ease;
        }

        .agri-food-ad__cta:hover {
          background: #FFB52A;
          transform: translateY(-2px);
        }

        .agri-food-ad__cta:focus-visible {
          outline: 3px solid var(--paper);
          outline-offset: 4px;
        }

        .agri-food-ad__cta:active {
          transform: translateY(0);
        }

        @media (max-aspect-ratio: 4 / 3) and (min-width: 700px) {
          .agri-food-ad {
            padding-block: clamp(22px, 4.2vw, 52px);
          }

          .agri-food-ad__message {
            padding-block: clamp(18px, 2.8vh, 34px);
          }
        }

        @media (max-width: 560px) {
          .agri-food-ad {
            padding: 28px;
          }

          .agri-food-ad__headline {
            max-width: min(100%, 18rem);
          }
        }
      `}</style>

      <img
        className="agri-food-ad__logo"
        src="/__mockup/images/aboupreneur-brand-mark.png"
        alt="Aboupreneur"
      />

      <div className="agri-food-ad__message">
        <h1 className="agri-food-ad__headline">Great Product. Buyers Still Scroll Past.</h1>
        <p className="agri-food-ad__benefit">Turn operational strength into market demand.</p>
      </div>

      <button className="agri-food-ad__cta" type="button" onClick={handleReachMoreBuyers}>
        Reach More Buyers
      </button>
    </div>
  );
}