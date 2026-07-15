const badges = [
  { label: "Bl", tip: "Blender", angle: 0, color: "bg-amber text-ink" },
  { label: "Ps", tip: "Photoshop", angle: 90, color: "bg-violet text-paper" },
  { label: "Ai", tip: "Illustrator", angle: 180, color: "bg-magenta text-paper" },
  { label: "Sp", tip: "Substance", angle: 270, color: "bg-ink text-paper" },
];

export default function ToolOrbit() {
  return (
    <div
      className="relative mx-auto h-[300px] w-[300px] shrink-0 sm:h-[360px] sm:w-[360px]"
      style={{ perspective: "900px" }}
      aria-hidden="true"
    >
      {/* Rotating wireframe cube = the "3D" thesis of the page */}
      <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d] animate-spinSlow">
        {[
          "translateZ(3rem)",
          "translateZ(-3rem) rotateY(180deg)",
          "rotateY(90deg) translateZ(3rem)",
          "rotateY(-90deg) translateZ(3rem)",
          "rotateX(90deg) translateZ(3rem)",
          "rotateX(-90deg) translateZ(3rem)",
        ].map((t, i) => (
          <div
            key={i}
            className="absolute inset-0 flex items-center justify-center rounded-md border-2 border-violet/70 bg-violet/10 backdrop-blur-sm"
            style={{ transform: t }}
          >
            {i === 0 && (
              <span className="font-display text-xs font-bold tracking-wide text-violet-dark">
                3D
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Orbit ring */}
      <div className="absolute inset-0 rounded-full border border-dashed border-violet/25 animate-orbit">
        {badges.map((b) => (
          <div
            key={b.label}
            className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2"
            style={{
              transform: `rotate(${b.angle}deg) translate(150px) rotate(-${b.angle}deg)`,
            }}
          >
            <div className="animate-counterOrbit">
              <div
                className={`dock-item flex h-14 w-14 items-center justify-center rounded-2xl shadow-card ${b.color}`}
                title={b.tip}
              >
                <span className="font-display text-sm font-bold">
                  {b.label}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
