'use client'

export function StatCard({ value, label, sub, color = "#ef4444", icon }) {
  return (
    <div style={{
      background:"#f8f9fa",border:"1px solid #e9ecef",borderRadius:"16px",padding:"24px",
      flex:"1 1 200px",minWidth:"180px",position:"relative",overflow:"hidden"
    }}>
      <div style={{ position:"absolute",top:"-10px",right:"-10px",fontSize:"64px",opacity:0.08 }}>{icon}</div>
      <div style={{ fontSize:"14px",color:"#6c757d",marginBottom:"8px",letterSpacing:"0.05em",textTransform:"uppercase" }}>{label}</div>
      <div style={{ fontSize:"36px",fontWeight:"800",color,fontFamily:"'DM Mono',monospace",lineHeight:1 }}>{value}</div>
      {sub && <div style={{ fontSize:"12px",color:"#868e96",marginTop:"8px" }}>{sub}</div>}
    </div>
  )
}

export function SectionTitle({ number, title, subtitle }) {
  return (
    <div style={{ marginBottom:"32px",marginTop:"64px" }}>
      <div style={{ display:"flex",alignItems:"baseline",gap:"12px",marginBottom:"8px" }}>
        <span style={{ fontSize:"13px",fontWeight:"700",color:"#ef4444",background:"rgba(239,68,68,0.08)",padding:"4px 10px",borderRadius:"6px",fontFamily:"'DM Mono',monospace" }}>{number}</span>
        <h2 style={{ fontSize:"28px",fontWeight:"800",color:"#1a1a2e",margin:0,letterSpacing:"-0.02em" }}>{title}</h2>
      </div>
      {subtitle && <p style={{ color:"#868e96",fontSize:"15px",margin:0,paddingLeft:"52px" }}>{subtitle}</p>}
    </div>
  )
}

export function Source({ text }) {
  return <div style={{ fontSize:"11px",color:"#adb5bd",marginTop:"12px",fontFamily:"'DM Mono',monospace" }}>Source : {text}</div>
}

export function Card({ children, style = {} }) {
  return (
    <div style={{ background:"#f8f9fa",border:"1px solid #e9ecef",borderRadius:"16px",padding:"24px",marginBottom:"24px",...style }}>
      {children}
    </div>
  )
}
