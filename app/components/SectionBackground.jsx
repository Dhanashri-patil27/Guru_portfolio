export default function SectionBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">

      {/* soft glow (desktop strong, mobile softer) */}
      <div
        className="
          absolute -top-24 -left-24
          w-96 h-96
          bg-sky-500/10
          md:bg-sky-500/10
          bg-sky-500/5
          rounded-full blur-3xl
        "
      />

      <div
        className="
          absolute bottom-0 right-0
          w-96 h-96
          bg-purple-500/10
          md:bg-purple-500/10
          bg-purple-500/5
          rounded-full blur-3xl
        "
      />

      {/* subtle grid (unchanged, just slightly stronger on desktop) */}
      <div
        className="absolute inset-0 opacity-[0.05] md:opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}
