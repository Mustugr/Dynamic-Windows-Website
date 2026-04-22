/**
 * Animated SVG building — glass panes fill in sequence, crane sways above,
 * blueprint grid drifts behind. Pure CSS/SVG, zero deps.
 */
export default function BuildingAnimation({ className = '' }) {
  const floors = 9
  const colsPerFloor = 4

  const panes = []
  for (let f = 0; f < floors; f++) {
    for (let c = 0; c < colsPerFloor; c++) {
      const x = 60 + c * 52
      const y = 380 - f * 34
      const delay = (f * colsPerFloor + c) * 0.07
      panes.push(
        <rect
          key={`p-${f}-${c}`}
          x={x}
          y={y}
          width={46}
          height={28}
          fill="url(#glassGrad)"
          stroke="#F07A10"
          strokeWidth="0.6"
          className="pane"
          style={{ animationDelay: `${delay}s`, transformBox: 'fill-box' }}
        />
      )
    }
  }

  return (
    <div className={`relative ${className}`}>
      {/* Drifting blueprint grid */}
      <div className="absolute inset-0 drift-grid opacity-60 mask-radial" />

      {/* Orange radial bloom */}
      <div className="absolute inset-0 bg-orange-radial opacity-40" />

      <svg viewBox="0 0 320 520" className="relative z-10 w-full h-full">
        <defs>
          <linearGradient id="glassGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2A4A5E" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#F07A10" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#0A0A0A" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="towerBody" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1A1A1A" />
            <stop offset="100%" stopColor="#0A0A0A" />
          </linearGradient>
          <linearGradient id="craneCable" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F07A10" />
            <stop offset="100%" stopColor="#F07A10" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Ground line */}
        <line
          x1="0" y1="470" x2="320" y2="470"
          stroke="#F07A10" strokeWidth="1.2"
          className="draw-stroke"
        />

        {/* Building silhouette */}
        <rect x="54" y="70" width="212" height="400" fill="url(#towerBody)" stroke="#242424" strokeWidth="1" />

        {/* Roof accent */}
        <rect x="54" y="70" width="212" height="4" fill="#F07A10" />

        {/* Antenna / spire */}
        <line x1="160" y1="70" x2="160" y2="40" stroke="#F07A10" strokeWidth="1.5" />
        <circle cx="160" cy="36" r="3" fill="#F07A10" className="animate-pulse-slow" />

        {/* Glass panes (animated fill) */}
        <g>{panes}</g>

        {/* Vertical mullions */}
        {Array.from({ length: 5 }).map((_, i) => (
          <line
            key={`m-${i}`}
            x1={58 + i * 52}
            y1={74}
            x2={58 + i * 52}
            y2={470}
            stroke="#242424"
            strokeWidth="0.6"
          />
        ))}

        {/* Horizontal floor lines */}
        {Array.from({ length: 10 }).map((_, i) => (
          <line
            key={`h-${i}`}
            x1={54}
            y1={378 - i * 34}
            x2={266}
            y2={378 - i * 34}
            stroke="#242424"
            strokeWidth="0.5"
          />
        ))}

        {/* Door at ground */}
        <rect x="140" y="440" width="40" height="30" fill="#0A0A0A" stroke="#F07A10" strokeWidth="1" />

        {/* Crane — swaying */}
        <g className="sway" style={{ transformOrigin: '260px 30px' }}>
          <line x1="260" y1="30" x2="260" y2="180" stroke="#F07A10" strokeWidth="3" />
          <line x1="120" y1="50" x2="290" y2="50" stroke="#F07A10" strokeWidth="2.5" />
          <line x1="260" y1="30" x2="120" y2="50" stroke="#F07A10" strokeWidth="1" opacity="0.6" />
          <line x1="260" y1="30" x2="290" y2="50" stroke="#F07A10" strokeWidth="1" opacity="0.6" />
          {/* Cable + hook */}
          <line x1="175" y1="50" x2="175" y2="150" stroke="url(#craneCable)" strokeWidth="1" />
          <rect x="170" y="148" width="10" height="8" fill="#F07A10" />
        </g>

        {/* Scan line moving across glass */}
        <rect
          x="54" y="70" width="212" height="2"
          fill="#F07A10" opacity="0.8"
        >
          <animate
            attributeName="y"
            values="70;470;70"
            dur="4s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;0.9;0"
            dur="4s"
            repeatCount="indefinite"
          />
        </rect>

        {/* Floor measurement tick marks */}
        <g stroke="#F07A10" strokeWidth="0.8" opacity="0.5">
          <line x1="30" y1="74" x2="45" y2="74" />
          <line x1="30" y1="274" x2="45" y2="274" />
          <line x1="30" y1="470" x2="45" y2="470" />
          <line x1="38" y1="74" x2="38" y2="470" />
        </g>

        {/* Spec labels */}
        <text x="8" y="78" fill="#F07A10" fontSize="8" fontFamily="JetBrains Mono, monospace">
          +130ft
        </text>
        <text x="8" y="278" fill="#F07A10" fontSize="8" fontFamily="JetBrains Mono, monospace">
          +65ft
        </text>
        <text x="8" y="474" fill="#F07A10" fontSize="8" fontFamily="JetBrains Mono, monospace">
          0ft
        </text>

        {/* Dimensional callout */}
        <g opacity="0.7">
          <line x1="54" y1="490" x2="266" y2="490" stroke="#F07A10" strokeWidth="0.8" />
          <line x1="54" y1="486" x2="54" y2="494" stroke="#F07A10" strokeWidth="0.8" />
          <line x1="266" y1="486" x2="266" y2="494" stroke="#F07A10" strokeWidth="0.8" />
          <text x="135" y="506" fill="#F07A10" fontSize="9" fontFamily="JetBrains Mono, monospace">
            42ft SPAN
          </text>
        </g>
      </svg>
    </div>
  )
}
