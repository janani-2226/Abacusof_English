import { useState } from "react";
import { coach, site } from "../config";

export default function Hero() {
  const [imgOk, setImgOk] = useState(true);
  const initials = coach.name.split(" ").map((w) => w[0]).slice(0, 2).join("");

  return (
    <section id="top" className="relative overflow-hidden bg-navy text-white">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-[1.2fr_1fr] md:py-28">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-brand">
            {site.brand}
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            {site.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/75">{coach.intro}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#book"
              className="rounded-full bg-brand px-7 py-3 font-medium transition hover:bg-brand-dark"
            >
              Get Started
            </a>
            <a
              href="#about"
              className="rounded-full border border-white/30 px-7 py-3 font-medium transition hover:border-white"
            >
              Meet the Coach
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border-2 border-brand" />
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
