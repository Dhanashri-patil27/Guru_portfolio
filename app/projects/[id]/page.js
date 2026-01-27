import SectionBackground from "../../components/SectionBackground";
import projects from "../../data/projects.json";

export default async function ProjectDetail({ params }) {
  const { id } = await  params;

  const project = projects.find((p) => p.id === id);

  // ===== NOT FOUND =====
  if (!project) {
    return (
      <main className="relative min-h-screen text-white overflow-hidden">
        <SectionBackground />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
          <h1 className="text-xl text-red-400">Project not found</h1>
        </div>
      </main>
    );
  }

  // ===== PAGE =====
  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      {/* ===== BACKGROUND (ONCE) ===== */}
      <SectionBackground />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-bold mb-2">
          {project.title}
        </h1>

        <p className="text-slate-400 mb-10">
          {project.sector}
        </p>

        {/* ================= OVERVIEW ================= */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">
            Overview
          </h2>
          <p className="text-slate-300 leading-relaxed">
            {project.description}
          </p>
        </section>

        {/* ================= KEY MODULES ================= */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">
            Key Modules
          </h2>
          <ul className="list-disc list-inside text-slate-300 space-y-1">
            {(project.keyModules || []).map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>
        </section>

        {/* ================= ENGINEERING CHALLENGES ================= */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">
            Engineering Challenges
          </h2>
          <ul className="list-disc list-inside text-slate-300 space-y-1">
            {(project.engineeringChallenges || []).map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </section>

        {/* ================= OUTCOMES ================= */}
        <section>
          <h2 className="text-xl font-semibold mb-2">
            Outcomes
          </h2>
          <ul className="list-disc list-inside text-slate-300 space-y-1">
            {(project.outcomes || []).map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </ul>
        </section>

      </div>
    </main>
  );
}
