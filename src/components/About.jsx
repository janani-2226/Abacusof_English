import { coach } from "../config";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <div className="grid gap-14 md:grid-cols-[1.3fr_1fr]">
        {/* Bio */}
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand">About</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">{coach.name}</h2>
          <p className="mt-1 text-navy/60">{coach.title}</p>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-navy/80">
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
        <aside className="h-fit rounded-2xl bg-white p-8 shadow-sm ring-1 ring-navy/5">
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
      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {coach.stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-navy/10 p-6 text-center">
            <p className="font-serif text-4xl font-semibold text-brand">{s.value}</p>
            <p className="mt-1 text-sm text-navy/60">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
