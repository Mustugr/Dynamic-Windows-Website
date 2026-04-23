import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

/**
 * Cinematic construction intro — plays once per full page load of home.
 * Rendered through a portal into document.body to escape the PageTransition
 * ancestor's transform (which would otherwise break `position: fixed`).
 *
 * Professional pass:
 *   - Taller, more elegant tower proportion
 *   - Typographic hierarchy: project lockup, column letters, floor numbers,
 *     elevation ticks, live floor counter, % progress bar
 *   - Tight, deliberate timing (4.6s)
 *   - Clean curtain-split reveal instead of a flat fade
 */

// The intro should ONLY play when the browser actually loaded the home page
// (fresh visit or refresh of "/"). If the module first loads on any other
// route (e.g. user refreshed /about, or typed /contact), we mark the intro
// as already-played so clicking the home link later does not trigger it.
let hasPlayed =
  typeof window !== 'undefined' && window.location.pathname !== '/'

// Tighter pacing — on slower devices (phones) the longer the intro runs
// the more chance the user has to notice the overlay sitting in place.
const TOTAL_MS = 3900
const EXIT_AT = 3200

export default function LandingAnimation() {
  const [visible, setVisible] = useState(!hasPlayed)
  const [exiting, setExiting] = useState(false)
  const [elev, setElev] = useState(0)
  const [pct, setPct] = useState(0)

  useEffect(() => {
    if (hasPlayed) {
      setVisible(false)
      return
    }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // Elevation readout — ticks 0 → 156 ft, aligned with glass-pane stagger.
    // 13 floors × 12 ft = 156 ft; interpolated smoothly via setInterval.
    const elevStartTime = Date.now() + 1700
    const elevDur = 1100
    const elevInterval = setInterval(() => {
      const elapsed = Date.now() - elevStartTime
      if (elapsed < 0) return
      const e = Math.min(156, Math.round((elapsed / elevDur) * 156))
      setElev(e)
      if (e >= 156) clearInterval(elevInterval)
    }, 40)

    // Progress % — ticks 0 → 100 over 2s starting at 0.9s.
    const pctStartTime = Date.now() + 900
    const pctDur = 2000
    const pctInterval = setInterval(() => {
      const elapsed = Date.now() - pctStartTime
      if (elapsed < 0) return
      const p = Math.min(100, Math.round((elapsed / pctDur) * 100))
      setPct(p)
      if (p >= 100) clearInterval(pctInterval)
    }, 40)

    const t1 = setTimeout(() => setExiting(true), EXIT_AT)
    const t2 = setTimeout(() => {
      hasPlayed = true
      setVisible(false)
      document.body.style.overflow = prev
    }, TOTAL_MS)

    return () => {
      clearInterval(elevInterval)
      clearInterval(pctInterval)
      clearTimeout(t1)
      clearTimeout(t2)
      document.body.style.overflow = prev
    }
  }, [])

  if (!visible) return null
  const root = typeof document !== 'undefined' ? document.body : null
  if (!root) return null

  // ---- Geometry (viewBox 0 0 600 620) ----
  const floors = 13
  const cols = 4
  const fh = 28            // floor height
  const cw = 46            // column width
  const bW = cols * cw     // 184
  const bH = floors * fh   // 364
  const gY = 560           // ground y
  const bY = gY - bH       // 196
  const bX = (600 - bW) / 2 // 208
  const cx = bX + bW / 2   // 300

  const easing = { calcMode: 'spline', keyTimes: '0;1', keySplines: '0.22 1 0.36 1' }

  return createPortal(
    <div
      className={`la-root fixed inset-0 z-[100] ${exiting ? 'la-exit' : ''}`}
      aria-hidden="true"
    >
      {/* Curtain halves that split apart on exit */}
      <div className="la-curtain la-curtain-top" />
      <div className="la-curtain la-curtain-bottom" />

      {/* Inside the stage */}
      <div className="la-stage">
        <div className="la-bg" />
        <div className="la-grid" />

        {/* Top-left project lockup */}
        <div className="la-meta la-meta-tl">
          <div className="la-meta-row"><span className="la-dot" /> DYNAMIC WINDOWS SYSTEM</div>
          <div className="la-meta-sub">NEW YORK · NEW JERSEY</div>
        </div>

        {/* Top-right readout */}
        <div className="la-meta la-meta-tr">
          <div className="la-meta-row">CURTAIN WALL SYSTEM</div>
          <div className="la-meta-sub">HIGH-PERFORMANCE GLAZING</div>
        </div>

        {/* Bottom-left elevation counter */}
        <div className="la-counter">
          <div className="la-counter-label">ELEVATION</div>
          <div className="la-counter-value">
            {elev}
            <span className="la-counter-sep"> FT</span>
          </div>
        </div>

        {/* Bottom status */}
        <div className="la-status">
          <span className="la-step la-step-1">DRAFTING</span>
          <span className="la-step la-step-2">FRAMING</span>
          <span className="la-step la-step-3">GLAZING</span>
          <span className="la-step la-step-4">COMPLETE</span>
        </div>

        {/* Bottom progress bar */}
        <div className="la-progress">
          <div className="la-progress-track">
            <div className="la-progress-fill" />
          </div>
          <div className="la-progress-label">
            <span className="la-progress-pct">{pct}%</span>
            <span>BUILD PROGRESS</span>
          </div>
        </div>

        <svg
          className="la-svg"
          viewBox="0 0 600 620"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="laGlass" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3A5668" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#F07A10" stopOpacity="0.42" />
              <stop offset="100%" stopColor="#0A0A0A" stopOpacity="0.96" />
            </linearGradient>
            <radialGradient id="laGlow" cx="50%" cy="55%" r="55%">
              <stop offset="0%" stopColor="#F07A10" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#F07A10" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* ===== Elevation ticks (left — TOP / MID / GROUND) ===== */}
          {[
            { f: 0,                   label: 'GROUND' },
            { f: Math.floor(floors/2), label: 'MID'    },
            { f: floors,              label: 'CROWN'  },
          ].map((t, i) => {
            const ty = gY - t.f * fh
            return (
              <g key={`tk-${i}`} opacity="0">
                <animate attributeName="opacity" from="0" to="1"
                  begin={`${0.3 + i * 0.08}s`} dur="0.3s" fill="freeze" />
                <line x1={bX - 28} y1={ty} x2={bX - 14} y2={ty}
                      stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />
                <text x={bX - 34} y={ty + 3}
                      textAnchor="end"
                      fill="rgba(255,255,255,0.45)"
                      fontFamily="JetBrains Mono, monospace"
                      fontSize="9" letterSpacing="2">
                  {t.label}
                </text>
              </g>
            )
          })}

          {/* ===== GROUND LINE ===== */}
          <line
            x1="60" y1={gY} x2="60" y2={gY}
            stroke="#F07A10" strokeWidth="1.5"
          >
            <animate attributeName="x2" from="60" to="540"
              begin="0s" dur="0.4s" fill="freeze" {...easing} />
          </line>

          {/* Ground extension marks */}
          <g opacity="0">
            <animate attributeName="opacity" from="0" to="0.55" begin="0.35s" dur="0.3s" fill="freeze" />
            {Array.from({ length: 5 }).map((_, i) => (
              <line key={`gm-${i}`}
                x1={80 + i * 110} y1={gY}
                x2={80 + i * 110} y2={gY + 6}
                stroke="#F07A10" strokeWidth="0.8" />
            ))}
          </g>

          {/* ===== BLUEPRINT (fades in, dissolves) ===== */}
          <g opacity="0">
            <animate attributeName="opacity" values="0;0.9;0.9;0"
              keyTimes="0;0.2;0.7;1" dur="1.3s" begin="0.4s" fill="freeze" />

            {/* Outline */}
            <rect x={bX} y={bY} width={bW} height={bH}
              fill="none" stroke="#F07A10" strokeWidth="1"
              strokeDasharray="5 3" />

            {/* Floor divisions */}
            {Array.from({ length: floors - 1 }).map((_, i) => (
              <line key={`bpf-${i}`}
                x1={bX} y1={bY + (i + 1) * fh}
                x2={bX + bW} y2={bY + (i + 1) * fh}
                stroke="#F07A10" strokeWidth="0.4" strokeDasharray="3 2" opacity="0.8" />
            ))}

            {/* Column divisions */}
            {Array.from({ length: cols - 1 }).map((_, i) => (
              <line key={`bpc-${i}`}
                x1={bX + (i + 1) * cw} y1={bY}
                x2={bX + (i + 1) * cw} y2={gY}
                stroke="#F07A10" strokeWidth="0.4" strokeDasharray="3 2" opacity="0.8" />
            ))}
          </g>

          {/* ===== FOUNDATION BAR ===== */}
          <rect x={cx} y={gY - 5} width="0" height="10" fill="#F07A10">
            <animate attributeName="x" from={cx} to={bX - 18}
              begin="1.0s" dur="0.35s" fill="freeze" {...easing} />
            <animate attributeName="width" from="0" to={bW + 36}
              begin="1.0s" dur="0.35s" fill="freeze" {...easing} />
          </rect>

          {/* ===== STEEL COLUMNS ===== */}
          {Array.from({ length: cols + 1 }).map((_, i) => {
            const x = bX + i * cw
            return (
              <line key={`col-${i}`} x1={x} y1={gY} x2={x} y2={gY}
                stroke="#333" strokeWidth="2">
                <animate attributeName="y2" from={gY} to={bY}
                  begin={`${1.15 + i * 0.045}s`} dur="0.55s" fill="freeze" {...easing} />
              </line>
            )
          })}

          {/* ===== FLOOR BEAMS ===== */}
          {Array.from({ length: floors + 1 }).map((_, i) => {
            const y = gY - i * fh
            return (
              <line key={`beam-${i}`} x1={bX} y1={y} x2={bX} y2={y}
                stroke="#333" strokeWidth="1.4">
                <animate attributeName="x2" from={bX} to={bX + bW}
                  begin={`${1.45 + i * 0.045}s`} dur="0.22s" fill="freeze" {...easing} />
              </line>
            )
          })}

          {/* ===== TOWER INTERIOR FILL ===== */}
          <rect x={bX} y={bY} width={bW} height={bH} fill="#0A0A0A" opacity="0">
            <animate attributeName="opacity" from="0" to="0.5"
              begin="1.5s" dur="0.6s" fill="freeze" />
          </rect>

          {/* ===== GLASS PANES (bottom → top) ===== */}
          {Array.from({ length: floors }).map((_, f) =>
            Array.from({ length: cols }).map((_, c) => {
              const x = bX + c * cw + 3
              const y = gY - (f + 1) * fh + 3
              const w = cw - 6
              const h = fh - 6
              const start = 1.7 + f * 0.075 + c * 0.02
              return (
                <rect
                  key={`p-${f}-${c}`}
                  x={x} y={y + h} width={w} height="0"
                  fill="url(#laGlass)" stroke="#F07A10" strokeWidth="0.35"
                  opacity="0"
                >
                  <animate attributeName="height" from="0" to={h}
                    begin={`${start}s`} dur="0.28s" fill="freeze" {...easing} />
                  <animate attributeName="y" from={y + h} to={y}
                    begin={`${start}s`} dur="0.28s" fill="freeze" {...easing} />
                  <animate attributeName="opacity" from="0" to="1"
                    begin={`${start}s`} dur="0.2s" fill="freeze" />
                </rect>
              )
            })
          )}

          {/* ===== SCAN LINE ===== */}
          <rect x={bX - 2} y={gY - 2} width={bW + 4} height="2" fill="#F07A10" opacity="0">
            <animate attributeName="opacity" values="0;1;1;0"
              keyTimes="0;0.1;0.9;1" begin="1.9s" dur="1.1s" fill="freeze" />
            <animate attributeName="y" from={gY - 2} to={bY}
              begin="1.9s" dur="1.1s" fill="freeze" />
          </rect>

          {/* ===== SPIRE ===== */}
          <line x1={cx} y1={bY} x2={cx} y2={bY} stroke="#F07A10" strokeWidth="2">
            <animate attributeName="y2" from={bY} to={bY - 32}
              begin="2.65s" dur="0.35s" fill="freeze" {...easing} />
          </line>
          <circle cx={cx} cy={bY - 36} r="3.5" fill="#F07A10" opacity="0">
            <animate attributeName="opacity" from="0" to="1"
              begin="2.9s" dur="0.2s" fill="freeze" />
            <animate attributeName="r" values="3.5;5.5;3.5"
              begin="3.1s" dur="1.2s" repeatCount="indefinite" />
          </circle>

          {/* ===== GLOW ===== */}
          <circle cx={cx} cy={bY + bH * 0.55} r="220" fill="url(#laGlow)" opacity="0">
            <animate attributeName="opacity" from="0" to="1"
              begin="2.65s" dur="0.65s" fill="freeze" />
          </circle>

          {/* ===== Completion checkmark (bottom-right corner of building) ===== */}
          <g opacity="0" transform={`translate(${bX + bW + 14} ${gY - 10})`}>
            <animate attributeName="opacity" from="0" to="1"
              begin="3.0s" dur="0.25s" fill="freeze" />
            <circle cx="0" cy="0" r="7" fill="none" stroke="#F07A10" strokeWidth="1.2" />
            <path d="M-3,0 L-1,2 L3,-2" fill="none" stroke="#F07A10" strokeWidth="1.4"
              strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>,
    root
  )
}
