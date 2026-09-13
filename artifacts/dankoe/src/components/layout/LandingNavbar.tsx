import { Link } from "wouter";

export function LandingNavbar({ hideLink = false }: { hideLink?: boolean }) {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="h-24 max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {hideLink ? (
          <span
            className="font-display text-white font-bold text-xl cursor-default"
            style={{ letterSpacing: "0.04em" }}
          >
            ABOUPRENEUR
          </span>
        ) : (
          <Link
            href="/"
            className="font-display text-white font-bold text-xl hover:text-[#F2A900] transition-colors duration-200"
            style={{ letterSpacing: "0.04em" }}
          >
            ABOUPRENEUR
          </Link>
        )}
      </div>
    </header>
  );
}
