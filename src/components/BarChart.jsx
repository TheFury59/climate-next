'use client'

export default function BarChart({ data, labelKey, valueKey, color = "#ef4444", unit = "" }) {
  const max = Math.max(...data.map(d => d[valueKey]))
  return (
    <div style={{ display:"flex",flexDirection:"column",gap:"10px" }}>
      {data.map((d, i) => (
        <div key={i} style={{ display:"flex",alignItems:"center",gap:"12px" }}>
          <span style={{ width:"90px",fontSize:"12px",color:"#495057",fontFamily:"'DM Mono',monospace",textAlign:"right",flexShrink:0 }}>
            {d[labelKey]}
          </span>
          <div style={{ flex:1,background:"#e9ecef",borderRadius:"6px",height:"28px",position:"relative",overflow:"hidden" }}>
            <div style={{
              width:`${(d[valueKey]/max)*100}%`,height:"100%",
              background:`linear-gradient(90deg, ${typeof color==="function"?color(d,i):color}aa, ${typeof color==="function"?color(d,i):color})`,
              borderRadius:"6px",transition:"width 1s ease-out",
              display:"flex",alignItems:"center",justifyContent:"flex-end",paddingRight:"8px"
            }}>
              <span style={{ fontSize:"11px",fontWeight:"700",color:"#fff",fontFamily:"'DM Mono',monospace",whiteSpace:"nowrap" }}>
                {d[valueKey]}{unit}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
