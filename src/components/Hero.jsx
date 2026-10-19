import { useState } from "react";
import { coach, site } from "../config";

export default function Hero() {
  const [imgOk, setImgOk] = useState(true);
  const initials = coach.name.split(" ").map((w) => w[0]).slice(0, 2).join("");

  return (
    <section id="top" className="relative overflow-hidden bg-navy text-white">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 md:grid-cols-[1.2fr_1fr] md:py-28">
        <div>
          <h1 className="font-serif text-[2.1rem] font-semibold leading-tight sm:text-5xl lg:text-6xl">
            {site.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/75 sm:mt-6 sm:text-lg">{coach.intro}</p>

          <div className="mt-8 flex flex-wrap gap-4 sm:mt-10">
            <a
              href="#book"
              className="w-full rounded-full bg-brand px-7 py-3 text-center font-medium transition hover:bg-brand-dark sm:w-auto"
            >
              Get Started
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[17rem] sm:max-w-sm">
          <div className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 rounded-2xl border-2 border-brand" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-navy-light">
            {imgOk ? (
              <img
                src={coach.photo}
                alt={coach.name}
                onError={() => setImgOk(false)}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center font-serif text-7xl text-white/30">
                {initials}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
