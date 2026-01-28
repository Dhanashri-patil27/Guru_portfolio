import "./globals.css";
import ScrollFade from "./components/ScrollFade";

export const metadata = {
  title: "GURURAJ MATHAPATI | Engineering Portfolio",
  description: "Mechanical design and advanced manufacturing projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="
          min-h-[100dvh]
          text-slate-100
          bg-gradient-to-br
          from-slate-900
          via-slate-950
          to-black
          overflow-x-hidden
        "
      >
        {/* Scroll animation handler */}
        <ScrollFade />

        {/* ================= HEADER ================= */}
        <header className="border-b border-slate-700/50 backdrop-blur">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <span className="font-semibold text-lg tracking-tight">
              GURURAJ MATHAPATI
            </span>

            <nav className="space-x-6 text-sm text-slate-300">
              <a href="/" className="hover:text-sky-400 transition-colors">
                Home
              </a>
              <a href="/projects" className="hover:text-sky-400 transition-colors">
                Projects
              </a>
              <a href="/about" className="hover:text-sky-400 transition-colors">
                About
              </a>
            </nav>
          </div>
        </header>

        {/* ================= PAGE CONTENT ================= */}
        <main>{children}</main>

        {/* ================= FOOTER ================= */}
        <footer className="border-t border-slate-700/50 mt-20">
          <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-slate-500">
            © {new Date().getFullYear()} Gururaj Mathapati
          </div>
        </footer>
      </body>
    </html>
  );
}
