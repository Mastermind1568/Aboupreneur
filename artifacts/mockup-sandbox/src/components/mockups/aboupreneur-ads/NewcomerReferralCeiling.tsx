/**
 * A deliberately spare, export-ready square ad.
 *
 * The layout uses `min(100vw, 100vh)` as its sizing anchor so the same
 * composition remains intentional in both a 1200 × 1200 and 1200 × 628
 * export frame.
 */
export function NewcomerReferralCeiling() {
  return (
    <div className="newcomer-referral-ceiling" role="img" aria-label="Aboupreneur ad">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&family=Space+Grotesk:wght@600;700&display=swap');

        .newcomer-referral-ceiling {
          --ad-black: #0A0A0A;
          --ad-white: #FFFFFF;
          --ad-orange: #F09C00;
          align-items: flex-start;
          background: var(--ad-black);
          box-sizing: border-box;
          color: var(--ad-white);
          display: flex;
          flex-direction: column;
          height: 100dvh;
          justify-content: space-between;
          min-height: 0;
          overflow: hidden;
          padding: clamp(28px, 7.2vmin, 86px);
          width: 100vw;
        }

        .newcomer-referral-ceiling *,
        .newcomer-referral-ceiling *::before,
        .newcomer-referral-ceiling *::after {
          box-sizing: border-box;
        }

        .newcomer-referral-ceiling__logo {
          display: block;
          height: clamp(52px, 10.8vmin, 130px);
          object-fit: contain;
          object-position: left center;
          width: clamp(52px, 10.8vmin, 130px);
        }

        .newcomer-referral-ceiling__message {
          align-items: flex-start;
          display: flex;
          flex-direction: column;
          gap: clamp(22px, 3.2vmin, 38px);
          max-width: min(760px, 90vw);
        }

        .newcomer-referral-ceiling__headline {
          color: var(--ad-white);
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(42px, 8.6vmin, 104px);
          font-weight: 700;
          letter-spacing: -0.065em;
          line-height: 0.97;
          margin: 0;
          max-width: 11ch;
        }

        .newcomer-referral-ceiling__benefit {
          color: var(--ad-white);
          font-family: "Inter", sans-serif;
          font-size: clamp(16px, 2.1vmin, 25px);
          font-weight: 500;
          letter-spacing: -0.025em;
          line-height: 1.25;
          margin: 0;
        }

        .newcomer-referral-ceiling__cta {
          align-items: center;
          background: var(--ad-orange);
          border: 0;
          border-radius: 0;
          color: var(--ad-black);
          display: inline-flex;
          font-family: "Inter", sans-serif;
          font-size: clamp(15px, 1.9vmin, 23px);
          font-weight: 700;
          justify-content: center;
          letter-spacing: -0.02em;
          min-height: clamp(52px, 6.5vmin, 78px);
          padding: 0 clamp(25px, 3.2vmin, 39px);
          text-decoration: none;
          transition: background-color 160ms ease, color 160ms ease;
        }

        .newcomer-referral-ceiling__cta:hover {
          background: var(--ad-white);
        }

        .newcomer-referral-ceiling__cta:focus-visible {
          outline: 3px solid var(--ad-white);
          outline-offset: 5px;
        }

        @media (max-aspect-ratio: 1/1) {
          .newcomer-referral-ceiling {
            padding-bottom: clamp(24px, 5.5vw, 58px);
            padding-top: clamp(24px, 5.5vw, 58px);
          }

          .newcomer-referral-ceiling__message {
            gap: clamp(16px, 2.8vw, 28px);
          }

          .newcomer-referral-ceiling__headline {
            font-size: clamp(38px, 8.3vw, 82px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .newcomer-referral-ceiling__cta {
            transition: none;
          }
        }
      `}</style>

      <img
        className="newcomer-referral-ceiling__logo"
        src="/__mockup/images/aboupreneur-brand-mark.png"
        alt="Aboupreneur"
      />

      <div className="newcomer-referral-ceiling__message">
        <h1 className="newcomer-referral-ceiling__headline">
          Referrals Got You Here. Now What?
        </h1>
        <p className="newcomer-referral-ceiling__benefit">
          Build trust before the first call.
        </p>
      </div>

      <a className="newcomer-referral-ceiling__cta" href="#look-established">
        Look Established
      </a>
    </div>
  );
}