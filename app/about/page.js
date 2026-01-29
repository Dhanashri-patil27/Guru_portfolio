import SectionBackground from "../components/SectionBackground";
import about from "../data/about.json";

async function getAbout() {
  return { about };
}

export default async function AboutPage() {
  const { about } = await getAbout();

  return (
    <main className="text-white">

      {/* ================= INTRO ================= */}
      <section className="relative overflow-hidden py-28">
        <SectionBackground />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">About</h1>
          <p className="text-slate-300 max-w-3xl leading-relaxed">
            {about.intro}
          </p>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="relative overflow-hidden py-28">
        <SectionBackground />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {about.skills?.map((skill, i) => (
              <div
                key={i}
                className="group relative
                           border border-slate-800 rounded-xl p-6
                           bg-slate-900/60 backdrop-blur
                           transition-all duration-300
                           hover:border-sky-400
                           hover:-translate-y-1
                           hover:shadow-xl hover:shadow-sky-500/10"
              > <div
                  className="absolute inset-0 rounded-xl opacity-0
                             group-hover:opacity-100 transition
                             bg-gradient-to-br from-sky-500/10 to-transparent
                             pointer-events-none"
                />
                <h3 className="text-xl font-semibold mb-4">
                  {skill.category}
                </h3>

                <ul className="space-y-2 text-slate-300 text-sm">
                  {skill.items?.map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-sky-400">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="relative overflow-hidden py-28">
        <SectionBackground />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-20">
            Experience
          </h2>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-700"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {about.experience?.map((exp, index) => {
                const isTop = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`flex flex-col items-center text-center
                      ${isTop ? "md:-translate-y-12" : "md:translate-y-12"}`}
                  >
                    <div className="group relative
                           border border-slate-800 rounded-xl p-6
                           bg-slate-900/60 backdrop-blur
                           transition-all duration-300
                           hover:border-sky-400
                           hover:-translate-y-1
                           hover:shadow-xl hover:shadow-sky-500/10">
                            <div
                  className="absolute inset-0 rounded-xl opacity-0
                             group-hover:opacity-100 transition
                             bg-gradient-to-br from-sky-500/10 to-transparent
                             pointer-events-none"
                />
                      <h3 className="text-lg font-semibold">
                        {exp.company}
                      </h3>

                      <p className="text-sky-400 text-sm mt-1">
                        {exp.role}
                      </p>

                      <p className="text-slate-400 text-xs mt-1 mb-4">
                        {exp.duration}
                      </p>

                      <p className="text-slate-300 text-sm leading-relaxed">
                        {exp.summary}
                      </p>
                    </div>

                    <div className="mt-6 w-10 h-10 flex items-center justify-center
                                    rounded-full bg-slate-800 border border-slate-600
                                    text-sm font-semibold">
                      {index + 1}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= EDUCATION ================= */}
      <section className="relative overflow-hidden py-28">
        <SectionBackground />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">
            Education
          </h2>

          <div className="space-y-6">
            {about.education?.map((edu, i) => (
              <div key={i}>
                <p className="font-medium">
                  {edu.degree}
                  <span className="text-slate-400 text-sm">
                    {" "}({edu.year})
                  </span>
                </p>
                <p className="text-slate-400 text-sm">
                  {edu.institute}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ACHIEVEMENTS ================= */}
      <section className="relative overflow-hidden py-28">
        <SectionBackground />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">
            Achievements & Awards
          </h2>

          <ul className="list-disc list-inside text-slate-300 space-y-3">
            {about.achievements?.map((a, i) => (
              <li key={i}>
                {a}
                {a.toLowerCase().includes("published research") &&
                  about.publications?.[0]?.link && (
                    <a
                      href={about.publications[0].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-sky-400 hover:text-sky-300
                                 underline underline-offset-2"
                    >
                      View paper →
                    </a>
                  )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      {about.contact?.length > 0 && (() => {
        const contact = about.contact[0];

        return (
          <section className="relative overflow-hidden py-28 border-t border-slate-700/50">
            <SectionBackground />

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
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
        );
      })()}

    </main>
  );
}
