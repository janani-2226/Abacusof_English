import { coach } from "../config";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-[1.3fr_1fr] md:gap-14">
        {/* Bio */}
        <div>
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">{coach.name}</h2>
          <p className="mt-1 text-navy/60">{coach.title}</p>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-navy/80 sm:mt-8 sm:text-lg">
            {coach.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <ul className="mt-8 space-y-3">
            {coach.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bio-data card */}
        <aside className="h-fit rounded-2xl bg-white p-6 shadow-sm sm:p-8 ring-1 ring-navy/5">
          <h3 className="font-serif text-xl font-semibold">Profile</h3>
          <dl className="mt-6 divide-y divide-navy/10">
            {coach.details.map((d) => (
              <div key={d.label} className="flex justify-between gap-4 py-3 text-sm">
                <dt className="text-navy/60">{d.label}</dt>
                <dd className="text-right font-medium">{d.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      {/* Stats */}
      <div className="mt-12 grid grid-cols-3 gap-3 sm:mt-16 sm:gap-6">
        {coach.stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-navy/10 px-2 py-5 text-center sm:p-6">
            <p className="font-serif text-2xl font-semibold text-brand sm:text-4xl">{s.value}</p>
            <p className="mt-1 text-xs text-navy/60 sm:text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
