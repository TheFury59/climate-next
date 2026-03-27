'use client'

export default function SVGChart({
                                     data, width = 700, height = 300,
                                     xKey, yKey, color = "#ef4444",
                                     gradientId, showArea = true, baselineY = null
                                 }) {
    const padding = { top: 20, right: 20, bottom: 40, left: 55 }
    const w = width - padding.left - padding.right
    const h = height - padding.top - padding.bottom
    const xMin = Math.min(...data.map(d => d[xKey]))
    const xMax = Math.max(...data.map(d => d[xKey]))
    const yMin = Math.min(...data.map(d => d[yKey]), baselineY ?? Infinity)
    const yMax = Math.max(...data.map(d => d[yKey]))
    const yRange = yMax - yMin || 1
    const scaleX = (v) => padding.left + ((v - xMin) / (xMax - xMin)) * w
    const scaleY = (v) => padding.top + h - ((v - yMin) / yRange) * h
    const points = data.map(d => `${scaleX(d[xKey])},${scaleY(d[yKey])}`).join(" ")

    // Axe X toujours ancré en bas du chart (à yMin)
    const xAxisY = padding.top + h

    // L'aire commence et finit TOUJOURS sur l'axe X (bas du chart)
    // — plus de "jambe flottante" quand baselineY != null
    const areaPoints = `${scaleX(xMin)},${xAxisY} ${points} ${scaleX(xMax)},${xAxisY}`

    return (
        <svg viewBox={`0 0 ${width} ${height}`} style={{ width:"100%",height:"auto" }}>
            <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={color} stopOpacity="0.25" />
                    <stop offset="100%" stopColor={color} stopOpacity="0.02" />
                </linearGradient>
            </defs>

            {/* Grille horizontale + labels Y */}
            {Array.from({ length: 6 }, (_, i) => {
                const val = yMin + (yRange * i) / 5
                const y = scaleY(val)
                return (
                    <g key={`y-${i}`}>
                        <line x1={padding.left} y1={y} x2={width - padding.right} y2={y} stroke="#dee2e6" />
                        <text x={padding.left - 8} y={y + 4} textAnchor="end" fill="#495057" fontSize="10" fontFamily="'DM Mono',monospace">
                            {val.toFixed(yKey === "ppm" ? 0 : 2)}
                        </text>
                    </g>
                )
            })}

            {/* Labels X — ancrés sur l'axe X (bas du chart) */}
            {Array.from({ length: 7 }, (_, i) => {
                const val = Math.round(xMin + ((xMax - xMin) * i) / 6)
                return (
                    <text key={`x-${i}`} x={scaleX(val)} y={xAxisY + 16}
                          textAnchor="middle" fill="#495057" fontSize="10" fontFamily="'DM Mono',monospace">
                        {val}
                    </text>
                )
            })}

            {/* Axe Y — ligne verticale, coin bas-gauche vers le haut */}
            <line x1={padding.left} y1={padding.top} x2={padding.left} y2={xAxisY} stroke="#adb5bd" strokeWidth="1.5" />
            {/* Axe X — ligne horizontale, même coin vers la droite */}
            <line x1={padding.left} y1={xAxisY} x2={width - padding.right} y2={xAxisY} stroke="#adb5bd" strokeWidth="1.5" />

            {/* Ligne de référence (ex: zéro) — pointillée, distincte de l'axe */}
            {baselineY !== null && (
                <line x1={padding.left} y1={scaleY(baselineY)} x2={width - padding.right} y2={scaleY(baselineY)}
                      stroke={color} strokeDasharray="5,4" strokeWidth="1" opacity="0.45" />
            )}

            {showArea && <polygon points={areaPoints} fill={`url(#${gradientId})`} />}

            <polyline points={points} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

            {/* Point animé sur la dernière valeur */}
            <circle cx={scaleX(data[data.length - 1][xKey])} cy={scaleY(data[data.length - 1][yKey])} r="5" fill={color} />
            <circle cx={scaleX(data[data.length - 1][xKey])} cy={scaleY(data[data.length - 1][yKey])} r="10" fill={color} opacity="0.2">
                <animate attributeName="r" from="5" to="15" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.3" to="0" dur="2s" repeatCount="indefinite" />
            </circle>
        </svg>
    )
}
