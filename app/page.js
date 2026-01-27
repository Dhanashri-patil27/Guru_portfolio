import SectionBackground from "./components/SectionBackground";
import about from "./data/about.json";
import projects from "./data/projects.json";

/* ================= DATA ================= */


async function getHomeData() {
  return {
    about,
    featuredProjects: projects.slice(0, 3),
  };
}


/* ================= PAGE ================= */

export default async function HomePage() {
  const { about, featuredProjects } = await getHomeData();
  const contact = about?.contact?.[0];

  return (
    <main className="text-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <SectionBackground />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-28">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-3">
            Gururaj Mathapati
          </h1>

          <h2 className="text-2xl text-sky-400 mb-6">
            Senior Mechanical Design Engineer
          </h2>

          <p className="text-slate-300 max-w-3xl leading-relaxed mb-10">
            {about?.intro}
          </p>

          <a
            href="/projects"
            className="inline-block bg-sky-500 hover:bg-sky-400
                       text-slate-900 font-semibold
                       px-7 py-3 rounded-lg transition
                       hover:scale-[1.03]"
          >
            View Projects →
          </a>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="relative overflow-hidden border-t border-slate-700/50">
        <SectionBackground />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">About</h2>
            <p className="text-slate-300 leading-relaxed">
              {about?.intro}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Engineering Focus
            </h3>

            <ul className="text-slate-400 space-y-2 text-sm">
              {about?.expertisePreview?.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>

            <a
              href="/about"
              className="inline-block mt-6 text-sky-400 hover:text-sky-300 text-sm"
            >
              Read full profile →
            </a>
          </div>
        </div>
      </section>

      {/* ================= ACHIEVEMENTS / PUBLICATION ================= */}
      {about?.publications?.length > 0 && (
        <section className="relative overflow-hidden border-t border-slate-700/50">
          <SectionBackground />

          <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold mb-4">
              Achievements & Awards
            </h2>

            <p className="text-slate-300 max-w-3xl text-sm leading-relaxed">
              Published research in{" "}
              <span className="text-white font-medium">
                {about.publications[0].journal}
              </span>{" "}
              based on Master’s thesis work in additive manufacturing
              design optimization.
            </p>

            {about.publications[0].link && (
              <a
                href={about.publications[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sky-400 hover:text-sky-300
                           underline underline-offset-2 text-sm"
              >
                View paper →
              </a>
            )}
          </div>
        </section>
      )}

      {/* ================= FEATURED PROJECTS ================= */}
      <section className="relative overflow-hidden border-t border-slate-700/50">
        <SectionBackground />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <a
              href="/projects"
              className="text-sky-400 hover:text-sky-300 text-sm"
            >
              View all →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <a
                key={project.id}
                href={`/projects/${project.id}`}
                className="group relative
                           border border-slate-800 rounded-xl p-6
                           bg-slate-900/60 backdrop-blur
                           transition-all duration-300
                           hover:border-sky-400
                           hover:-translate-y-1
                           hover:shadow-xl hover:shadow-sky-500/10"
              >
                <div
                  className="absolute inset-0 rounded-xl opacity-0
                             group-hover:opacity-100 transition
                             bg-gradient-to-br from-sky-500/10 to-transparent
                             pointer-events-none"
                />

                <span className="text-xs bg-slate-800 px-3 py-1 rounded-full
                                 text-slate-300 inline-block mb-4">
                  {project.sector}
                </span>

                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm line-clamp-3 mb-6">
                  {project.description}
                </p>

                <div className="text-xs text-slate-500">
                  {project.year} • {project.status}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      {contact && (
        <section className="relative overflow-hidden border-t border-slate-700/50">
          <SectionBackground />

          <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Let’s Work Together
            </h2>

            <p className="text-slate-400 max-w-2xl mx-auto mb-10">
              Interested in advanced manufacturing, robotics, automation,
              or product development collaborations? Feel free to reach out.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              {contact.email && (
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sky-500 hover:bg-sky-400
                             text-slate-900 font-semibold
                             px-6 py-3 rounded-lg transition"
                >
                  Email Me
                </a>
              )}

              {contact.linkedin && (
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-slate-700 hover:border-sky-400
                             px-6 py-3 rounded-lg transition"
                >
                  LinkedIn
                </a>
              )}
            </div>

            {contact.location && (
              <p className="text-slate-500 text-sm mt-10">
                Based in {contact.location}
              </p>
            )}
          </div>
        </section>
      )}

    </main>
  );
}
