import { offers, forms } from "../config";

export default function Booking() {
  return (
    <section id="book" className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand">Book</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
            Start your English journey today
          </h2>
          <p className="mt-4 text-white/70">
            Choose personal coaching or a structured course. Fill in a short form and we'll get
            back to you within 24 hours.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2">
          {offers.map((o) => (
            <div
              key={o.key}
              className="group flex flex-col rounded-2xl border border-white/10 bg-navy-light p-6 transition sm:p-8 hover:border-brand"
            >
              <span className="font-serif text-4xl font-semibold text-white/15 sm:text-5xl transition group-hover:text-brand">
                {o.eyebrow}
              </span>
              <h3 className="mt-4 font-serif text-2xl font-semibold">{o.title}</h3>
              <p className="mt-3 flex-1 text-white/70">{o.text}</p>
              <a
                href={forms[o.key]}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 sm:mt-8 sm:w-fit sm:justify-start rounded-full bg-brand px-6 py-3 font-medium transition hover:bg-brand-dark"
              >
                {o.cta}
                <span aria-hidden>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
