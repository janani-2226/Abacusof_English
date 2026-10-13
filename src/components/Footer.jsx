import { site, forms } from "../config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#07111f] text-white/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-serif text-xl font-semibold text-white">
            Abacus<span className="text-brand">.</span>{" "}
            <span className="text-sm font-normal text-white/60">of English</span>
          </p>
          <p className="mt-3 text-sm">{site.tagline}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li>
              <a href={forms.bookCoach} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Book the Coach
              </a>
            </li>
            <li>
              <a href={forms.bookCourse} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Buy a Course
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></li>
            <li><a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-white">{site.phone}</a></li>
            <li>{site.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs sm:px-6">
          © {year} {site.brand}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
