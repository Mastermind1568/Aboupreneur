/**
 * A single-frame, export-ready square ad.
 * The layout intentionally has no chrome or supporting decoration so the
 * message survives both a 1:1 placement and a wide 1200 × 628 crop.
 */
export function PlumbingMissedCalls() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600&family=Space+Grotesk:wght@600;700&display=swap');

        .aboupreneur-plumbing-ad {
          --ad-ink: #0A0A0A;
          --ad-paper: #FFFFFF;
          --ad-orange: #F09C00;
          position: relative;
          box-sizing: border-box;
          width: 100vw;
          min-height: 100dvh;
          overflow: hidden;
          background: var(--ad-paper);
          color: var(--ad-ink);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          padding: clamp(24px, 5.5vw, 76px);
          font-family: "Inter", sans-serif;
        }

        .aboupreneur-plumbing-ad__logo {
          display: block;
          width: clamp(86px, 13vw, 156px);
          height: auto;
          flex: 0 0 auto;
        }

        .aboupreneur-plumbing-ad__message {
          width: min(100%, 760px);
          margin-top: clamp(44px, 10vh, 132px);
          margin-bottom: auto;
        }

        .aboupreneur-plumbing-ad__headline {
          max-width: 10.5ch;
          margin: 0;
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(3.25rem, 10.1vw, 9.6rem);
          font-weight: 700;
          letter-spacing: -0.075em;
          line-height: 0.91;
        }

        .aboupreneur-plumbing-ad__benefit {
          margin: clamp(26px, 4vw, 50px) 0 0;
          font-size: clamp(1rem, 1.85vw, 1.75rem);
          font-weight: 500;
          letter-spacing: -0.025em;
          line-height: 1.2;
        }

        .aboupreneur-plumbing-ad__cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: clamp(52px, 6.5vw, 78px);
          margin-top: clamp(42px, 8vw, 92px);
          padding: 0 clamp(28px, 4.25vw, 64px);
          background: var(--ad-orange);
          color: var(--ad-ink);
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(1.05rem, 2vw, 1.7rem);
          font-weight: 700;
          letter-spacing: -0.035em;
          line-height: 1;
          text-decoration: none;
          transition: background-color 160ms ease, transform 160ms ease;
        }

        .aboupreneur-plumbing-ad__cta:hover {
          background: #FFB326;
          transform: translateY(-2px);
        }

        .aboupreneur-plumbing-ad__cta:focus-visible {
          outline: 3px solid var(--ad-ink);
          outline-offset: 5px;
        }

        @media (min-aspect-ratio: 1.45/1) {
          .aboupreneur-plumbing-ad {
            padding-block: clamp(18px, 3vh, 36px);
          }

          .aboupreneur-plumbing-ad__logo {
            width: clamp(64px, 10vh, 96px);
          }

          .aboupreneur-plumbing-ad__message {
            margin-top: clamp(10px, 2vh, 20px);
          }

          .aboupreneur-plumbing-ad__headline {
            max-width: 13ch;
            font-size: clamp(2.8rem, 7.5vh, 4.5rem);
            line-height: 0.9;
          }

          .aboupreneur-plumbing-ad__benefit {
            margin-top: clamp(14px, 2.4vh, 24px);
            font-size: clamp(0.95rem, 2.8vh, 1.25rem);
          }

          .aboupreneur-plumbing-ad__cta {
            min-height: clamp(48px, 8vh, 60px);
            margin-top: clamp(18px, 3vh, 28px);
            padding-inline: clamp(24px, 3vw, 42px);
            font-size: clamp(1rem, 3vh, 1.3rem);
          }
        }

        @media (max-width: 520px) {
          .aboupreneur-plumbing-ad {
            padding: 28px;
          }

          .aboupreneur-plumbing-ad__headline {
            font-size: clamp(3.1rem, 15vw, 5.4rem);
          }
        }
      `}</style>

      <main className="aboupreneur-plumbing-ad" aria-label="Aboupreneur plumbing lead generation advertisement">
        <img
          className="aboupreneur-plumbing-ad__logo"
          src="/__mockup/images/aboupreneur-brand-mark.png"
          alt="Aboupreneur"
        />

        <div className="aboupreneur-plumbing-ad__message">
          <h1 className="aboupreneur-plumbing-ad__headline">Missed Calls Become Missed Jobs</h1>
          <p className="aboupreneur-plumbing-ad__benefit">Make every urgent search count.</p>
          <a className="aboupreneur-plumbing-ad__cta" href="/contact">
            Get More Calls
          </a>
        </div>
      </main>
    </>
  );
}