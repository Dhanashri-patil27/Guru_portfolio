"use client";

import { useEffect, useState } from "react";
import SectionBackground from "../components/SectionBackground";
import projectsData from "../data/projects.json";

/* -------------------- UI HELPERS -------------------- */

function statusColor(status) {
  switch (status?.toLowerCase()) {
    case "production":
      return "bg-green-600/20 text-green-400";
    case "prototype":
      return "bg-yellow-600/20 text-yellow-400";
    case "r&d":
      return "bg-purple-600/20 text-purple-400";
    default:
      return "bg-slate-700 text-slate-300";
  }
}

/* -------------------- PAGE -------------------- */

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [sectors, setSectors] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [sector, setSector] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // Extract unique sectors & statuses
    const uniqueSectors = [
      ...new Set(projectsData.map((p) => p.sector)),
    ];
    const uniqueStatuses = [
      ...new Set(projectsData.map((p) => p.status)),
    ];

    setSectors(uniqueSectors);
    setStatuses(uniqueStatuses);

    // Filter projects
    let filtered = projectsData;

    if (sector) {
      filtered = filtered.filter((p) => p.sector === sector);
    }

    if (status) {
      filtered = filtered.filter((p) => p.status === status);
    }

    setProjects(filtered);
    setLoading(false);
  }, [sector, status]);

  return (
    <main className="text-white">

      <section className="relative mb-40">
        <div className="absolute inset-0 overflow-hidden">
          <SectionBackground />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-28">
          <h1 className="text-4xl font-bold mb-10">Projects</h1>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-12">
            <select
              className="bg-slate-900 border border-slate-700 px-4 py-2 rounded"
              value={sector}
              onChange={(e) => setSector(e.target.value)}
            >
              <option value="">All Sectors</option>
              {sectors.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>

            <select
              className="bg-slate-900 border border-slate-700 px-4 py-2 rounded"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">All Status</option>
              {statuses.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Loading */}
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-32">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="h-56 rounded-xl bg-slate-800/60 animate-pulse"
                />
              ))}
            </div>
          )}

          {/* Empty */}
          {!loading && projects.length === 0 && (
            <p className="text-slate-400">No projects found.</p>
          )}

          {/* Cards */}
          {!loading && projects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-32">
              {projects.map((project) => (
                <a
                  key={project.id}
                  href={`/projects/${project.id}`}
                  className="group relative border border-slate-800 rounded-xl p-6
                             bg-slate-900/60 backdrop-blur transition-all
                             hover:border-sky-400 hover:-translate-y-1
                             hover:shadow-xl hover:shadow-sky-500/10"
                >
                  <div className="absolute inset-0 rounded-xl opacity-0
                                  group-hover:opacity-100 transition
                                  bg-gradient-to-br from-sky-500/10
                                  to-transparent pointer-events-none" />

                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-300">
                      {project.sector}
                    </span>

                    <span className={`text-xs px-3 py-1 rounded-full ${statusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>

                  <h2 className="text-xl font-semibold mb-3 group-hover:text-sky-400 transition">
                    {project.title}
                  </h2>

                  <p className="text-sm text-slate-300 mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="text-xs text-slate-400">
                    {project.year}
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
