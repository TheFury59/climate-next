'use client'

import { useState, useEffect } from 'react'
import * as D from '@/data/climateData'
import SVGChart from '@/components/SVGChart'
import BarChart from '@/components/BarChart'
import { StatCard, SectionTitle, Source, Card } from '@/components/UI'

// ════════════════════════════════════════
// NAV TABS
// ════════════════════════════════════════
const tabs = [
  { id: "home", label: "Accueil", icon: "🏠" },
  { id: "s1", label: "Sujet 1 — Climat", icon: "🌡️" },
  { id: "s2", label: "Sujet 2 — Inégalités", icon: "🌍" },
  { id: "s3", label: "Sujet 3 — Dataviz", icon: "📊" },
]

// ════════════════════════════════════════
// INTRO SCREEN
// ════════════════════════════════════════
function Intro({ onDone }) {
  useEffect(() => { const t = setTimeout(onDone, 2800); return () => clearTimeout(t) }, [])
  return (
    <div style={{ minHeight:"100vh",background:"#fff",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column" }}>
      <style>{`@keyframes gp{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}} @keyframes sl{0%{transform:translateX(0)}100%{transform:translateX(140px)}}`}</style>
      <img src="/epsi-logo.png" alt="EPSI" style={{ height:"70px",marginBottom:"32px",animation:"gp 2s ease-in-out infinite" }} />
      <h1 style={{ color:"#1a1a2e",fontSize:"28px",fontWeight:"900",letterSpacing:"-0.03em",margin:0,textAlign:"center" }}>
          Atelier datavisualisation Arras 2026
      </h1>
      <p style={{ color:"#868e96",fontSize:"14px",marginTop:"12px",letterSpacing:"0.1em",textTransform:"uppercase" }}>
        EPSI Arras — Mastère 2025
      </p>
      <p style={{ color:"#ced4da",fontSize:"13px",marginTop:"8px" }}>
        Hodari Bigwi · Téo Debay
      </p>
      <div style={{ width:"200px",height:"2px",background:"linear-gradient(90deg,transparent,#ef4444,transparent)",marginTop:"24px",overflow:"hidden" }}>
        <div style={{ width:"60px",height:"2px",background:"#ef4444",animation:"sl 1.5s ease-in-out infinite" }} />
      </div>
    </div>
  )
}

// ════════════════════════════════════════
// HOME PAGE
// ════════════════════════════════════════
function HomePage({ setTab }) {
  return (
    <div>
      {/* Hero */}
      <div style={{ textAlign:"center",padding:"80px 0 48px" }}>
        <img src="/epsi-logo.png" alt="EPSI" style={{ height:"70px",marginBottom:"32px" }} />
        <h1 style={{ fontSize:"36px",fontWeight:"900",color:"#1a1a2e",letterSpacing:"-0.03em",margin:"0 0 8px" }}>
            Atelier datavisualisation Arras 2026
        </h1>
        <h2 style={{ fontSize:"18px",fontWeight:"600",color:"#6c757d",margin:"0 0 24px" }}>
          Par Didier NAKACHE
        </h2>
        <div style={{ width:"60px",height:"3px",background:"#ef4444",margin:"0 auto 32px",borderRadius:"2px" }} />
        <p style={{ color:"#adb5bd",fontSize:"14px",margin:0 }}>
          EPSI Arras · Mastère EISI · Année 2025
        </p>
      </div>

      {/* Auteurs */}
      <Card style={{ maxWidth:"500px",margin:"0 auto 48px",textAlign:"center" }}>
        <h3 style={{ fontSize:"13px",fontWeight:"700",color:"#868e96",letterSpacing:"0.1em",textTransform:"uppercase",margin:"0 0 16px" }}>
          Réalisé par
        </h3>
        <div style={{ display:"flex",justifyContent:"center",gap:"40px" }}>
          {[{name:"Hodari Bigwi",photo:"/photoHodari.jpg"},{name:"Téo Debay",photo:"/photoTeo.jpg"}].map((p,i) => (
            <div key={i} style={{ textAlign:"center" }}>
              <img src={p.photo} alt={p.name} style={{ width:"80px",height:"80px",borderRadius:"50%",objectFit:"cover",border:"3px solid #e9ecef",margin:"0 auto 10px",display:"block" }} />
              <div style={{ fontSize:"15px",fontWeight:"700",color:"#1a1a2e" }}>{p.name}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Sujets */}
      <h3 style={{ fontSize:"13px",fontWeight:"700",color:"#868e96",letterSpacing:"0.1em",textTransform:"uppercase",textAlign:"center",margin:"0 0 24px" }}>
        Sommaire
      </h3>
      <div style={{ display:"flex",flexDirection:"column",gap:"16px",maxWidth:"700px",margin:"0 auto" }}>
        {[
          { id:"s1",num:"01",title:"Le réchauffement climatique",desc:"Anomalies de température, CO₂, événements extrêmes, projections GIEC",icon:"🌡️",color:"#ef4444" },
          { id:"s2",num:"02",title:"Inégalités mondiales & développement humain",desc:"IDH, PIB/habitant, Gini, espérance de vie, clustering",icon:"🌍",color:"#3b82f6" },
          { id:"s3",num:"03",title:"Dataviz originaux",desc:"Visualisations de données innovantes et leur analyse",icon:"📊",color:"#8b5cf6" }
        ].map((s) => (
          <button key={s.id} onClick={() => setTab(s.id)} style={{
            background:"#f8f9fa",border:"1px solid #dee2e6",
            borderRadius:"16px",padding:"24px",textAlign:"left",cursor:"pointer",
            display:"flex",alignItems:"center",gap:"20px",transition:"all 0.2s",
            fontFamily:"inherit",color:"#1a1a2e"
          }}
          onMouseEnter={e => e.currentTarget.style.borderColor = s.color + "55"}
          onMouseLeave={e => e.currentTarget.style.borderColor = "#dee2e6"}
          >
            <div style={{ fontSize:"36px",flexShrink:0 }}>{s.icon}</div>
            <div style={{ flex:1 }}>
              <div style={{ display:"flex",alignItems:"baseline",gap:"10px",marginBottom:"4px" }}>
                <span style={{ fontSize:"12px",fontWeight:"700",color:s.color,fontFamily:"'DM Mono',monospace" }}>{s.num}</span>
                <span style={{ fontSize:"18px",fontWeight:"700" }}>{s.title}</span>
              </div>
              <p style={{ fontSize:"13px",color:"#868e96",margin:0 }}>{s.desc}</p>
            </div>
            <span style={{ fontSize:"20px",color:"#dee2e6" }}>→</span>
          </button>
        ))}
      </div>
    </div>
  )
}

// ════════════════════════════════════════
// SUJET 1 — CLIMAT
// ════════════════════════════════════════
function Sujet1() {
  const barColors = ["#22d3ee","#34d399","#fbbf24","#f97316","#ef4444"]
  return (
    <div>
      <SectionTitle number="01" title="Le réchauffement climatique" subtitle="Climat & réchauffement global (1850–2025) · NASA, NOAA, Copernicus, GIEC" />

      {/* Stats */}
      <div style={{ display:"flex",flexWrap:"wrap",gap:"16px",marginBottom:"32px" }}>
        <StatCard value="+1.28°C" label="Record 2024" sub="Année la plus chaude (NASA)" color="#ef4444" icon="🔥" />
        <StatCard value="430 ppm" label="Pic CO₂ 2025" sub="Record absolu (Scripps)" color="#f97316" icon="💨" />
        <StatCard value="605" label="Événements 2024" sub="Recensés par l'OMM" color="#06b6d4" icon="⚡" />
        <StatCard value="$320 Mrd" label="Pertes 2024" sub="Munich Re" color="#10b981" icon="💰" />
      </div>

      {/* Temp chart */}
      <Card>
        <h3 style={{ fontSize:"15px",fontWeight:"700",margin:"0 0 16px",color:"#343a40" }}>
          Anomalie de température moyenne globale (°C) — 1850–2025
        </h3>
        <SVGChart data={D.tempAnomalyData} xKey="year" yKey="anomaly" color="#ef4444" gradientId="tg" baselineY={0} />
        <Source text="NASA GISTEMP v4 — anomalies vs. moyenne 1951-1980" />
      </Card>

      {/* CO2 chart */}
      <Card>
        <h3 style={{ fontSize:"15px",fontWeight:"700",margin:"0 0 16px",color:"#343a40" }}>
          CO₂ atmosphérique (ppm) — Courbe de Keeling — 1958–2025
        </h3>
        <SVGChart data={D.co2Data} xKey="year" yKey="ppm" color="#f97316" gradientId="cg" />
        <Source text="NOAA GML / Scripps — Mauna Loa Observatory" />
      </Card>

      {/* Regression */}
      <Card>
        <h3 style={{ fontSize:"15px",fontWeight:"700",margin:"0 0 16px",color:"#343a40" }}>🔍 Régression linéaire & non-linéaire</h3>
        <div style={{ display:"flex",gap:"16px",flexWrap:"wrap" }}>
          {[
            {l:"LINÉAIRE (1880-2025)",v:"+0.08°C/déc.",s:"R² ≈ 0.87",c:"#ef4444"},{l:"ACCÉLÉRÉE (1975-2025)",v:"+0.18°C/déc.",s:"×2.3 vs longue",c:"#f97316"},
            {l:"NON-LINÉAIRE",v:"Poly. deg. 2",s:"R² ≈ 0.92",c:"#a855f7"},{l:"CORRÉLATION CO₂↔T°",v:"r = 0.95",s:"Quasi-parfaite",c:"#22d3ee"}
          ].map((x,i) => (
            <div key={i} style={{ flex:"1 1 200px",background:`${x.c}10`,borderRadius:"12px",padding:"16px" }}>
              <div style={{ fontSize:"10px",color:"#6c757d",fontFamily:"'DM Mono',monospace",marginBottom:"4px" }}>{x.l}</div>
              <div style={{ fontSize:"20px",fontWeight:"700",color:x.c }}>{x.v}</div>
              <div style={{ fontSize:"10px",color:"#adb5bd",marginTop:"4px" }}>{x.s}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Disasters */}
      <Card>
        <h3 style={{ fontSize:"15px",fontWeight:"700",margin:"0 0 16px",color:"#343a40" }}>Catastrophes $1Mrd+ par an (US) & coût moyen</h3>
        <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px" }}>
          <div><h4 style={{ fontSize:"12px",color:"#868e96",margin:"0 0 12px" }}>Fréquence moyenne/an</h4>
            <BarChart data={D.billionDollarDisasters} labelKey="decade" valueKey="avg" color={(d,i)=>barColors[i]} /></div>
          <div><h4 style={{ fontSize:"12px",color:"#868e96",margin:"0 0 12px" }}>Coût moyen/an (Mrd$)</h4>
            <BarChart data={D.billionDollarDisasters} labelKey="decade" valueKey="cost" unit=" Mrd$" color={(d,i)=>barColors[i]} /></div>
        </div>
        <Source text="NOAA NCEI / Climate Central" />
      </Card>

      {/* Continents */}
      <Card>
        <h3 style={{ fontSize:"15px",fontWeight:"700",margin:"0 0 16px",color:"#343a40" }}>Réchauffement par région (°C vs. préindustriel)</h3>
        {D.continentWarming.map((c,i) => (
          <div key={i} style={{ display:"flex",alignItems:"center",gap:"12px",marginBottom:"10px" }}>
            <span style={{ width:"90px",fontSize:"12px",color:"#495057",textAlign:"right",flexShrink:0 }}>{c.name}</span>
            <div style={{ flex:1,background:"#e9ecef",borderRadius:"6px",height:"26px",position:"relative" }}>
              <div style={{ width:`${(c.warming/4)*100}%`,height:"100%",background:`linear-gradient(90deg,${c.color}66,${c.color})`,borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"flex-end",paddingRight:"8px" }}>
                <span style={{ fontSize:"11px",fontWeight:"700",color:"#fff",fontFamily:"'DM Mono',monospace" }}>+{c.warming}°C</span>
              </div>
            </div>
          </div>
        ))}
      </Card>

      {/* GIEC scenarios */}
      <Card>
        <h3 style={{ fontSize:"15px",fontWeight:"700",margin:"0 0 16px",color:"#343a40" }}>Projections GIEC AR6 — Scénarios SSP à 2100</h3>
        {D.scenariosIPCC.map((s,i) => (
          <div key={i} style={{ display:"flex",alignItems:"center",gap:"12px",marginBottom:"10px" }}>
            <div style={{ width:"80px",textAlign:"right",flexShrink:0 }}>
              <div style={{ fontSize:"11px",fontWeight:"700",color:s.color,fontFamily:"'DM Mono',monospace" }}>{s.name}</div>
              <div style={{ fontSize:"9px",color:"#adb5bd" }}>{s.label}</div>
            </div>
            <div style={{ flex:1,background:"#e9ecef",borderRadius:"6px",height:"30px",position:"relative" }}>
              <div style={{ width:`${(s.temp2100/5)*100}%`,height:"100%",background:`linear-gradient(90deg,${s.color}44,${s.color})`,borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"flex-end",paddingRight:"10px" }}>
                <span style={{ fontSize:"12px",fontWeight:"800",color:"#1a1a2e",fontFamily:"'DM Mono',monospace" }}>+{s.temp2100}°C</span>
              </div>
              <div style={{ position:"absolute",left:`${(1.5/5)*100}%`,top:0,bottom:0,borderLeft:"2px dashed rgba(34,211,238,0.4)" }}>
                {i===0 && <span style={{ position:"absolute",top:"-14px",left:"-12px",fontSize:"8px",color:"#22d3ee",fontFamily:"'DM Mono',monospace",whiteSpace:"nowrap" }}>Paris 1.5°C</span>}
              </div>
            </div>
          </div>
        ))}
        <Source text="GIEC AR6 Synthesis Report (2023)" />
      </Card>

      {/* Tipping points */}
      <Card>
        <h3 style={{ fontSize:"15px",fontWeight:"700",margin:"0 0 16px",color:"#343a40" }}>⚠️ Points de basculement</h3>
        <div style={{ display:"flex",gap:"8px",overflowX:"auto",paddingBottom:"8px" }}>
          {D.tippingPoints.map((tp,i) => (
            <div key={i} style={{ flex:"0 0 120px",background:tp.threshold<=1.5?"rgba(239,68,68,0.1)":tp.threshold<=2?"rgba(249,115,22,0.1)":"rgba(251,191,36,0.08)",border:`1px solid ${tp.threshold<=1.5?"rgba(239,68,68,0.2)":tp.threshold<=2?"rgba(249,115,22,0.2)":"rgba(251,191,36,0.15)"}`,borderRadius:"14px",padding:"14px",textAlign:"center" }}>
              <div style={{ fontSize:"28px",marginBottom:"6px" }}>{tp.icon}</div>
              <div style={{ fontSize:"10px",color:"#495057",whiteSpace:"pre-line",lineHeight:1.3,marginBottom:"6px" }}>{tp.name}</div>
              <div style={{ fontSize:"13px",fontWeight:"800",fontFamily:"'DM Mono',monospace",color:tp.threshold<=1.5?"#ef4444":tp.threshold<=2?"#f97316":"#fbbf24" }}>~{tp.threshold}°C</div>
            </div>
          ))}
        </div>
      </Card>

      {/* WMO */}
      <Card>
        <h3 style={{ fontSize:"15px",fontWeight:"700",margin:"0 0 16px",color:"#343a40" }}>🌍 Bilan mondial 2024 (OMM)</h3>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:"10px" }}>
          {D.wmoStats2024.map((x,i) => (
            <div key={i} style={{ background:"#f1f3f5",borderRadius:"12px",padding:"14px",textAlign:"center" }}>
              <div style={{ fontSize:"22px",marginBottom:"4px" }}>{x.e}</div>
              <div style={{ fontSize:"18px",fontWeight:"800",color:"#1a1a2e",fontFamily:"'DM Mono',monospace" }}>{x.n}</div>
              <div style={{ fontSize:"10px",color:"#adb5bd",marginTop:"4px" }}>{x.l}</div>
            </div>
          ))}
        </div>
        <Source text="WMO, EM-DAT, Munich Re, Swiss Re" />
      </Card>
    </div>
  )
}

// ════════════════════════════════════════
// SUJET 2 — INÉGALITÉS
// ════════════════════════════════════════
function Sujet2() {
  return (
    <div>
      <SectionTitle number="02" title="Inégalités mondiales & développement humain" subtitle="PIB/habitant, IDH, Espérance de vie, Éducation, Gini · PNUD, Banque Mondiale, OCDE" />

      {/* Démarche */}
      <Card>
        <h3 style={{ fontSize:"15px",fontWeight:"700",margin:"0 0 12px",color:"#343a40" }}>📋 Démarche méthodologique</h3>
        <p style={{ color:"#6c757d",fontSize:"13px",lineHeight:1.7,margin:"0 0 16px" }}>
          La construction des graphiques a suivi une démarche structurée en cinq étapes : la recherche de données fiables auprès de sources institutionnelles, le nettoyage et la normalisation des données, le choix des graphiques adaptés à chaque analyse, leur réalisation, puis leur interprétation.
        </p>
        <h4 style={{ fontSize:"13px",fontWeight:"700",margin:"0 0 10px",color:"#495057" }}>Sources et dates des données</h4>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"10px" }}>
          {[
            {d:"PIB / Habitant",s:"FMI / Banque Mondiale",a:"2023"},
            {d:"IDH",s:"PNUD (dernier rapport)",a:"2022-2023"},
            {d:"Espérance de vie",s:"OMS / Banque Mondiale",a:"2022-2023"},
            {d:"Éducation (Indice)",s:"PNUD",a:"2022"},
            {d:"Inégalités (Gini)",s:"Banque Mondiale",a:"2019-2023*"},
          ].map((x,i) => (
            <div key={i} style={{ background:"#f1f3f5",borderRadius:"8px",padding:"10px" }}>
              <div style={{ fontSize:"12px",fontWeight:"700",color:"#343a40" }}>{x.d}</div>
              <div style={{ fontSize:"11px",color:"#6c757d",marginTop:"2px" }}>{x.s} — {x.a}</div>
            </div>
          ))}
        </div>
        <p style={{ color:"#adb5bd",fontSize:"11px",marginTop:"8px",fontStyle:"italic" }}>
          * Le coefficient de Gini n{"'"}est pas mis à jour chaque année pour tous les pays. La Banque mondiale publie la dernière valeur disponible.
        </p>
      </Card>

      {/* Stats clés */}
      <div style={{ display:"flex",flexWrap:"wrap",gap:"16px",marginBottom:"32px" }}>
        <StatCard value="0.756" label="IDH mondial 2023" sub="En hausse vs 0.601 en 1990" color="#3b82f6" icon="📈" />
        <StatCard value="×136" label="Écart PIB/hab" sub="Norvège $82k vs Niger $560" color="#ef4444" icon="💰" />
        <StatCard value="0.586" label="Écart IDH max" sub="Islande 0.966 vs Somalie 0.380" color="#f97316" icon="📊" />
        <StatCard value="63.0" label="Gini max" sub="Afrique du Sud, pays le plus inégalitaire" color="#a855f7" icon="⚖️" />
      </div>

      {/* Carte PIB / analyse Nord-Sud */}
      <Card>
        <h3 style={{ fontSize:"15px",fontWeight:"700",margin:"0 0 12px",color:"#343a40" }}>🗺️ Inégalités de PIB par habitant dans le monde</h3>
        <p style={{ color:"#6c757d",fontSize:"13px",lineHeight:1.7,margin:"0 0 16px" }}>
          Carte réalisée avec Tableau Public. L{"'"}intensité du bleu représente le PIB/habitant.
        </p>
        <div style={{ background:"#f1f3f5",borderRadius:"12px",padding:"20px" }}>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px" }}>
            <div>
              <h4 style={{ fontSize:"12px",fontWeight:"700",color:"#1e40af",margin:"0 0 8px" }}>🔵 Pays riches (bleu foncé)</h4>
              <p style={{ fontSize:"12px",color:"#495057",margin:0,lineHeight:1.5 }}>USA, Canada, Norvège, Suisse, Australie, Qatar, Europe occidentale</p>
            </div>
            <div>
              <h4 style={{ fontSize:"12px",fontWeight:"700",color:"#6b7280",margin:"0 0 8px" }}>⚪ Pays pauvres (bleu très clair)</h4>
              <p style={{ fontSize:"12px",color:"#495057",margin:0,lineHeight:1.5 }}>Afrique subsaharienne, Asie du Sud (Bangladesh, Afghanistan), Haïti</p>
            </div>
          </div>
          <div style={{ marginTop:"12px",padding:"12px",background:"#fff",borderRadius:"8px",border:"1px solid #e9ecef" }}>
            <p style={{ fontSize:"12px",color:"#495057",margin:0,lineHeight:1.6 }}>
              <strong>Analyse :</strong> L{"'"}inégalité Nord/Sud est immédiatement visible. L{"'"}Europe occidentale forme un bloc homogène riche. L{"'"}Afrique est quasi-entièrement dans les tons très clairs. Les revenus intermédiaires (bleu moyen) concernent l{"'"}Europe de l{"'"}Est, la Chine, le Brésil, le Mexique et la Russie.
            </p>
          </div>
        </div>
        <Source text="FMI / Banque Mondiale 2023 — Carte : Tableau Public" />
      </Card>

      {/* IDH evolution */}
      <Card>
        <h3 style={{ fontSize:"15px",fontWeight:"700",margin:"0 0 16px",color:"#343a40" }}>Évolution de l{"'"}IDH mondial (1990–2023) — Convergence puis divergence</h3>
        <SVGChart data={D.idhEvolution} xKey="year" yKey="world" color="#3b82f6" gradientId="ig" />
        <div style={{ display:"flex",gap:"16px",marginTop:"16px",flexWrap:"wrap" }}>
          {[{l:"IDH élevé 2023",v:"0.912",c:"#0ea5e9"},{l:"IDH mondial",v:"0.756",c:"#3b82f6"},{l:"IDH faible",v:"0.494",c:"#ef4444"},{l:"Écart haut-bas",v:"0.418",c:"#f97316"}].map((x,i)=>(
            <div key={i} style={{ flex:"1 1 120px",background:`${x.c}10`,borderRadius:"10px",padding:"12px",textAlign:"center" }}>
              <div style={{ fontSize:"10px",color:"#6c757d",fontFamily:"'DM Mono',monospace" }}>{x.l}</div>
              <div style={{ fontSize:"22px",fontWeight:"800",color:x.c,marginTop:"4px" }}>{x.v}</div>
            </div>
          ))}
        </div>
        <p style={{ color:"#6c757d",fontSize:"13px",marginTop:"12px",lineHeight:1.7 }}>
          Après des décennies de convergence (l{"'"}écart entre pays riches et pauvres se réduisait), la tendance s{"'"}est inversée depuis 2020. Le PNUD parle d{"'"}un « ralentissement dramatique » de la progression du développement humain. Les pays à IDH faible ont été les plus touchés par les crises récentes (COVID-19, conflits, inflation alimentaire), et l{"'"}écart se re-creuse.
        </p>
        <Source text="PNUD — Rapport sur le développement humain 2025" />
      </Card>

      {/* Top / Bottom IDH */}
      <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",marginBottom:"24px" }}>
        <Card style={{ marginBottom:0 }}>
          <h3 style={{ fontSize:"14px",fontWeight:"700",margin:"0 0 12px",color:"#0ea5e9" }}>🏆 Top 5 IDH (2023)</h3>
          {D.topIDH.map((x,i) => (
            <div key={i} style={{ display:"flex",alignItems:"center",gap:"10px",marginBottom:"8px" }}>
              <span style={{ fontSize:"20px" }}>{x.flag}</span>
              <span style={{ flex:1,fontSize:"13px",color:"#343a40" }}>{x.country}</span>
              <span style={{ fontSize:"14px",fontWeight:"700",color:"#0ea5e9",fontFamily:"'DM Mono',monospace" }}>{x.idh}</span>
            </div>
          ))}
        </Card>
        <Card style={{ marginBottom:0 }}>
          <h3 style={{ fontSize:"14px",fontWeight:"700",margin:"0 0 12px",color:"#ef4444" }}>⚠️ Bottom 5 IDH (2023)</h3>
          {D.bottomIDH.map((x,i) => (
            <div key={i} style={{ display:"flex",alignItems:"center",gap:"10px",marginBottom:"8px" }}>
              <span style={{ fontSize:"20px" }}>{x.flag}</span>
              <span style={{ flex:1,fontSize:"13px",color:"#343a40" }}>{x.country}</span>
              <span style={{ fontSize:"14px",fontWeight:"700",color:"#ef4444",fontFamily:"'DM Mono',monospace" }}>{x.idh}</span>
            </div>
          ))}
        </Card>
      </div>

      {/* Corrélation richesse/santé */}
      <Card>
        <h3 style={{ fontSize:"15px",fontWeight:"700",margin:"0 0 12px",color:"#343a40" }}>💊 Corrélation richesse — santé (Espérance de vie vs PIB/hab)</h3>
        <p style={{ color:"#6c757d",fontSize:"13px",lineHeight:1.7,margin:"0 0 16px" }}>
          Graphique de type scatter plot montrant la relation entre la richesse d{"'"}un pays et l{"'"}espérance de vie de sa population.
        </p>
        <svg viewBox="0 0 700 340" style={{ width:"100%",height:"auto" }}>
          <line x1="80" y1="20" x2="80" y2="290" stroke="#ced4da" strokeWidth="1" />
          <line x1="80" y1="290" x2="670" y2="290" stroke="#ced4da" strokeWidth="1" />
          {[50,60,70,80,90].map((v,i) => {
            const y = 290 - ((v-45)/50)*270
            return <g key={i}><line x1="80" y1={y} x2="670" y2={y} stroke="#f1f3f5" /><text x="72" y={y+4} textAnchor="end" fill="#6c757d" fontSize="10" fontFamily="'DM Mono',monospace">{v} ans</text></g>
          })}
          {[1000,5000,20000,50000,100000].map((v,i) => {
            const x = 80 + (Math.log(v)/Math.log(120000)) * 590
            return <g key={i}><line x1={x} y1="20" x2={x} y2="290" stroke="#f1f3f5" /><text x={x} y="308" textAnchor="middle" fill="#6c757d" fontSize="9" fontFamily="'DM Mono',monospace">{v>=1000?`${v/1000}k$`:v+"$"}</text></g>
          })}
          <text x="375" y="335" textAnchor="middle" fill="#495057" fontSize="11" fontWeight="600">PIB / habitant ($, échelle log)</text>
          <text x="18" y="155" textAnchor="middle" fill="#495057" fontSize="11" fontWeight="600" transform="rotate(-90,18,155)">Espérance de vie (années)</text>
          {/* Seuil $20k */}
          {(() => { const sx = 80 + (Math.log(20000)/Math.log(120000)) * 590; return <line x1={sx} y1="20" x2={sx} y2="290" stroke="#ef4444" strokeDasharray="6,4" strokeWidth="1.5" /> })()}
          {(() => { const sx = 80 + (Math.log(20000)/Math.log(120000)) * 590; return <text x={sx+4} y="30" fill="#ef4444" fontSize="8" fontFamily="'DM Mono',monospace">seuil ~20k$</text> })()}
          {/* Data points */}
          {[
            {gdp:560,life:62,n:"Niger"},{gdp:1100,life:54,n:"Somalie"},{gdp:1500,life:58,n:"Mali"},
            {gdp:2200,life:55,n:"Nigeria"},{gdp:2500,life:70,n:"Inde"},{gdp:3500,life:72,n:"Bangladesh"},
            {gdp:5500,life:72,n:"Vietnam"},{gdp:6800,life:76,n:"Indonésie"},
            {gdp:10000,life:74,n:"Brésil"},{gdp:12500,life:78,n:"Chine"},{gdp:13000,life:75,n:"Mexique"},
            {gdp:23000,life:82,n:"Portugal"},{gdp:35000,life:81,n:"Corée S."},
            {gdp:45000,life:83,n:"France"},{gdp:54000,life:81,n:"Allemagne"},
            {gdp:76000,life:79,n:"USA"},{gdp:82000,life:84,n:"Norvège"},
            {gdp:88000,life:80,n:"Qatar"},{gdp:9500,life:76,n:"Cuba"},
          ].map((p,i) => {
            const x = 80 + (Math.log(p.gdp)/Math.log(120000)) * 590
            const y = 290 - ((p.life-45)/50)*270
            return <g key={i}>
              <circle cx={x} cy={y} r="5" fill="#3b82f6" opacity="0.7" stroke="#fff" strokeWidth="1.5" />
              <text x={x} y={y-9} textAnchor="middle" fill="#343a40" fontSize="8" fontWeight="600" fontFamily="'DM Mono',monospace">{p.n}</text>
            </g>
          })}
        </svg>
        <div style={{ background:"#fef2f2",border:"1px solid #fecaca",borderRadius:"10px",padding:"14px",marginTop:"12px" }}>
          <p style={{ fontSize:"13px",color:"#495057",margin:0,lineHeight:1.7 }}>
            <strong style={{ color:"#ef4444" }}>Constat clé :</strong> La courbe monte très rapidement entre 0 et environ 20 000 $/hab, puis s{"'"}aplatit presque complètement. Passer de 500 à 5 000 $/hab fait gagner environ <strong>15 ans</strong> d{"'"}espérance de vie, alors que passer de 80 000 à 180 000 $/hab n{"'"}apporte presque rien de plus. <strong>La richesse sauve des vies, mais seulement jusqu{"'"}à un certain seuil.</strong>
          </p>
        </div>
        <Source text="OMS, Banque Mondiale 2022-2023" />
      </Card>

      {/* Gini */}
      <Card>
        <h3 style={{ fontSize:"15px",fontWeight:"700",margin:"0 0 16px",color:"#343a40" }}>⚖️ Coefficient de Gini par pays (0 = égalité parfaite, 100 = inégalité totale)</h3>
        <BarChart data={D.giniByCountry} labelKey="country" valueKey="gini" color={(d) => d.gini > 50 ? "#ef4444" : d.gini > 35 ? "#f97316" : d.gini > 28 ? "#fbbf24" : "#34d399"} />
        <div style={{ display:"flex",justifyContent:"center",gap:"16px",flexWrap:"wrap",marginTop:"12px" }}>
          {[{c:"#ef4444",l:"Très inégalitaire (>50)"},{c:"#f97316",l:"Inégalitaire (35-50)"},{c:"#fbbf24",l:"Moyen (28-35)"},{c:"#34d399",l:"Égalitaire (<28)"}].map((lg,i) => (
            <div key={i} style={{ display:"flex",alignItems:"center",gap:"5px" }}>
              <div style={{ width:"10px",height:"10px",borderRadius:"3px",background:lg.c,flexShrink:0 }} />
              <span style={{ fontSize:"11px",color:"#6c757d",fontFamily:"'DM Mono',monospace" }}>{lg.l}</span>
            </div>
          ))}
        </div>
        <Source text="Banque Mondiale — Poverty and Inequality Platform (2019-2023)" />
      </Card>

      {/* Life expectancy */}
      <Card>
        <h3 style={{ fontSize:"15px",fontWeight:"700",margin:"0 0 16px",color:"#343a40" }}>🏥 Espérance de vie par région : évolution 1970 → 2023</h3>
        {D.lifeExpectancy.map((x,i) => (
          <div key={i} style={{ marginBottom:"12px" }}>
            <div style={{ display:"flex",justifyContent:"space-between",marginBottom:"4px" }}>
              <span style={{ fontSize:"12px",color:"#495057",fontWeight:"600" }}>{x.region}</span>
              <span style={{ fontSize:"11px",color:"#6c757d",fontFamily:"'DM Mono',monospace" }}>{x.y1970} → {x.y2023} ans (+{x.y2023 - x.y1970})</span>
            </div>
            <div style={{ position:"relative",height:"20px",background:"#e9ecef",borderRadius:"4px" }}>
              <div style={{ position:"absolute",left:0,top:0,height:"100%",width:`${(x.y1970/85)*100}%`,background:"rgba(239,68,68,0.25)",borderRadius:"4px" }} />
              <div style={{ position:"absolute",left:0,top:0,height:"100%",width:`${(x.y2023/85)*100}%`,background:"linear-gradient(90deg,#34d39955,#34d399)",borderRadius:"4px" }} />
            </div>
          </div>
        ))}
        <div style={{ display:"flex",justifyContent:"center",gap:"24px",marginTop:"10px" }}>
          <div style={{ display:"flex",alignItems:"center",gap:"5px" }}><div style={{ width:"14px",height:"10px",borderRadius:"2px",background:"rgba(239,68,68,0.25)" }} /><span style={{ fontSize:"11px",color:"#6c757d" }}>1970</span></div>
          <div style={{ display:"flex",alignItems:"center",gap:"5px" }}><div style={{ width:"14px",height:"10px",borderRadius:"2px",background:"#34d399" }} /><span style={{ fontSize:"11px",color:"#6c757d" }}>2023</span></div>
        </div>
        <p style={{ color:"#6c757d",fontSize:"13px",marginTop:"12px",lineHeight:1.7 }}>
          L{"'"}Afrique subsaharienne a réalisé le plus grand bond (+18 ans), mais reste la région avec l{"'"}espérance de vie la plus basse (62 ans). L{"'"}Asie du Sud a gagné 22 ans. L{"'"}écart entre la région la plus haute (Am. Nord, 79 ans) et la plus basse (Afrique, 62 ans) reste de 17 ans.
        </p>
        <Source text="Banque Mondiale, OMS, DAES/ONU — 2022-2023" />
      </Card>

      {/* PIB vs IDH */}
      <Card>
        <h3 style={{ fontSize:"15px",fontWeight:"700",margin:"0 0 16px",color:"#343a40" }}>📊 Corrélation PIB/habitant ↔ IDH</h3>
        <svg viewBox="0 0 700 350" style={{ width:"100%",height:"auto" }}>
          <line x1="80" y1="20" x2="80" y2="300" stroke="#ced4da" strokeWidth="1" />
          <line x1="80" y1="300" x2="670" y2="300" stroke="#ced4da" strokeWidth="1" />
          {[0.4,0.5,0.6,0.7,0.8,0.9,1.0].map((v,i) => {
            const y = 300 - ((v-0.35)/0.7)*280
            return <g key={i}><line x1="80" y1={y} x2="670" y2={y} stroke="#f1f3f5" /><text x="72" y={y+4} textAnchor="end" fill="#6c757d" fontSize="10" fontFamily="'DM Mono',monospace">{v.toFixed(1)}</text></g>
          })}
          {[500,2000,10000,40000,100000].map((v,i) => {
            const x = 80 + (Math.log(v)/Math.log(120000)) * 590
            return <g key={i}><line x1={x} y1="20" x2={x} y2="300" stroke="#f1f3f5" /><text x={x} y="318" textAnchor="middle" fill="#6c757d" fontSize="9" fontFamily="'DM Mono',monospace">{v>=1000?`${v/1000}k$`:v+"$"}</text></g>
          })}
          <text x="375" y="342" textAnchor="middle" fill="#495057" fontSize="11" fontWeight="600">PIB / habitant ($, échelle logarithmique)</text>
          <text x="18" y="160" textAnchor="middle" fill="#495057" fontSize="11" fontWeight="600" transform="rotate(-90,18,160)">Indice de Développement Humain (IDH)</text>
          {D.gdpVsIdh.map((p,i) => {
            const x = 80 + (Math.log(p.gdp)/Math.log(120000)) * 590
            const y = 300 - ((p.idh-0.35)/0.7)*280
            const col = p.idh>0.9?"#0ea5e9":p.idh>0.7?"#22c55e":p.idh>0.5?"#f59e0b":"#ef4444"
            return <g key={i}>
              <circle cx={x} cy={y} r="6" fill={col} opacity="0.85" stroke="#fff" strokeWidth="1.5" />
              <text x={x} y={y-10} textAnchor="middle" fill="#343a40" fontSize="8" fontWeight="600" fontFamily="'DM Mono',monospace">{p.country}</text>
            </g>
          })}
        </svg>
        <div style={{ display:"flex",justifyContent:"center",gap:"16px",flexWrap:"wrap",marginTop:"10px" }}>
          {[{c:"#0ea5e9",l:"Très élevé (> 0.9)"},{c:"#22c55e",l:"Élevé (0.7 – 0.9)"},{c:"#f59e0b",l:"Moyen (0.5 – 0.7)"},{c:"#ef4444",l:"Faible (< 0.5)"}].map((lg,i) => (
            <div key={i} style={{ display:"flex",alignItems:"center",gap:"5px" }}>
              <div style={{ width:"10px",height:"10px",borderRadius:"50%",background:lg.c,flexShrink:0 }} />
              <span style={{ fontSize:"11px",color:"#6c757d",fontFamily:"'DM Mono',monospace" }}>{lg.l}</span>
            </div>
          ))}
        </div>
        <p style={{ color:"#6c757d",fontSize:"13px",marginTop:"12px",lineHeight:1.7 }}>
          La corrélation est forte mais logarithmique : au-delà de ~$30k/hab, le PIB supplémentaire apporte peu d{"'"}IDH. Cas intéressants : Cuba (IDH 0.764 pour $9.5k — système de santé/éducation performant), Guinée équatoriale (IDH 0.535 pour $18k — revenus pétroliers mal redistribués).
        </p>
        <Source text="PNUD, Banque Mondiale, FMI — données 2023" />
      </Card>

      {/* Clustering */}
      <Card>
        <h3 style={{ fontSize:"15px",fontWeight:"700",margin:"0 0 12px",color:"#343a40" }}>🧮 Clustering de pays similaires (K-Means, 5 clusters)</h3>
        <p style={{ color:"#6c757d",fontSize:"13px",lineHeight:1.7,margin:"0 0 16px" }}>
          Regroupement des pays en 5 clusters basé sur les variables : IDH, coefficient de Gini, PIB/habitant et espérance de vie. Méthode K-Means avec normalisation des données.
        </p>
        {D.clustersPays.map((c,i) => (
          <div key={i} style={{ background:`${c.color}08`,border:`1px solid ${c.color}20`,borderRadius:"12px",padding:"14px",marginBottom:"10px" }}>
            <div style={{ fontSize:"13px",fontWeight:"700",color:c.color,marginBottom:"4px" }}>{c.name}</div>
            <div style={{ fontSize:"12px",color:"#495057" }}>{c.pays}</div>
            <div style={{ fontSize:"11px",color:"#868e96",marginTop:"4px",fontFamily:"'DM Mono',monospace" }}>{c.traits}</div>
          </div>
        ))}
        <Source text="Analyse clustering multi-variables (IDH, Gini, PIB/hab, Esp. vie)" />
      </Card>
    </div>
  )
}

// ════════════════════════════════════════
// SUJET 3 — DATAVIZ ORIGINAUX
// ════════════════════════════════════════
function Sujet3() {
  return (
    <div>
      <SectionTitle number="03" title="Dataviz originaux" subtitle="Visualisations de données innovantes et leur explicitation" />

      {/* Dataviz 1 : Warming stripes */}
      <Card>
        <h3 style={{ fontSize:"15px",fontWeight:"700",margin:"0 0 8px",color:"#343a40" }}>🎨 Dataviz 1 — Warming Stripes (Ed Hawkins, 2018)</h3>
        <p style={{ fontSize:"13px",color:"#868e96",marginBottom:"16px" }}>Chaque bande représente la température moyenne d{"'"}une année. Du bleu (plus froid) au rouge (plus chaud).</p>
        <div style={{ display:"flex",height:"80px",borderRadius:"8px",overflow:"hidden" }}>
          {D.tempAnomalyData.map((d,i) => {
            const t = (d.anomaly + 0.4) / 1.7
            const r = Math.round(30 + t * 225)
            const b = Math.round(200 - t * 180)
            return <div key={i} style={{ flex:1,background:`rgb(${r},${Math.round(40+t*30)},${b})` }} />
          })}
        </div>
        <div style={{ display:"flex",justifyContent:"space-between",marginTop:"6px" }}>
          <span style={{ fontSize:"10px",color:"#adb5bd",fontFamily:"'DM Mono',monospace" }}>1850</span>
          <span style={{ fontSize:"10px",color:"#adb5bd",fontFamily:"'DM Mono',monospace" }}>2025</span>
        </div>
        <div style={{ background:"#f1f3f5",borderRadius:"10px",padding:"16px",marginTop:"16px" }}>
          <h4 style={{ fontSize:"13px",fontWeight:"700",color:"#495057",margin:"0 0 8px" }}>Pourquoi c{"'"}est original ?</h4>
          <p style={{ fontSize:"13px",color:"#868e96",margin:0,lineHeight:1.6 }}>
            Créées par le climatologue Ed Hawkins (Université de Reading), les <strong style={{ color:"#ef4444" }}>Warming Stripes</strong> éliminent tout axe, 
            chiffre et légende pour ne garder que l{"'"}essentiel : la couleur. Cette radicalité minimaliste rend le message 
            immédiatement compréhensible par tous, sans connaissance scientifique préalable. Elles sont devenues un 
            symbole mondial du changement climatique, portées sur des vêtements, bâtiments et affiches de manifestations.
          </p>
        </div>
        <Source text="showyourstripes.info — Ed Hawkins, University of Reading" />
      </Card>

      {/* Dataviz 2 : Spirale du CO2 */}
      <Card>
        <h3 style={{ fontSize:"15px",fontWeight:"700",margin:"0 0 8px",color:"#343a40" }}>🌀 Dataviz 2 — La spirale climatique (NASA/GISS)</h3>
        <p style={{ fontSize:"13px",color:"#868e96",marginBottom:"16px" }}>Animation en spirale montrant l{"'"}évolution des températures mois par mois depuis 1880.</p>
        <div style={{ position:"relative",width:"260px",height:"260px",margin:"0 auto" }}>
          <svg viewBox="0 0 260 260" style={{ width:"100%",height:"100%" }}>
            {[0.5, 1.0, 1.5].map((r,i) => (
              <circle key={i} cx="130" cy="130" r={40+i*35} fill="none" stroke="#dee2e6" />
            ))}
            <circle cx="130" cy="130" r={40+1.5/2*70} fill="none" stroke="rgba(239,68,68,0.3)" strokeDasharray="4,4" />
            <text x="130" y={130-(40+1.5/2*70)-4} textAnchor="middle" fill="#ef4444" fontSize="9" fontFamily="'DM Mono',monospace">1.5°C</text>
            {D.tempAnomalyData.slice(-15).map((d,i,arr) => {
              const angle = (i/arr.length) * Math.PI * 2 - Math.PI/2
              const radius = 40 + ((d.anomaly+0.4)/1.8) * 80
              const x = 130 + Math.cos(angle) * radius
              const y = 130 + Math.sin(angle) * radius
              const t = i/arr.length
              return <circle key={i} cx={x} cy={y} r="3" fill={`rgb(${Math.round(100+t*155)},${Math.round(80-t*50)},${Math.round(200-t*180)})`} opacity={0.4+t*0.6} />
            })}
            <text x="130" y="134" textAnchor="middle" fill="#6c757d" fontSize="11" fontFamily="'DM Mono',monospace">SPIRALE</text>
          </svg>
        </div>
        <div style={{ background:"#f1f3f5",borderRadius:"10px",padding:"16px",marginTop:"16px" }}>
          <h4 style={{ fontSize:"13px",fontWeight:"700",color:"#495057",margin:"0 0 8px" }}>Pourquoi c{"'"}est original ?</h4>
          <p style={{ fontSize:"13px",color:"#868e96",margin:0,lineHeight:1.6 }}>
            La <strong style={{ color:"#a855f7" }}>spirale climatique</strong> de la NASA utilise la forme circulaire pour montrer 
            l{"'"}accélération du réchauffement de manière viscérale. Contrairement à un graphique linéaire classique, 
            la spirale permet de voir l{"'"}expansion progressive — les boucles récentes s{"'"}éloignent de plus en plus 
            du centre, rendant l{"'"}accélération physiquement perceptible. L{"'"}animation viralisée a été vue 
            des millions de fois et a profondément marqué la communication scientifique.
          </p>
        </div>
        <Source text="NASA Scientific Visualization Studio / Ed Hawkins" />
      </Card>

      <Card>
        <h3 style={{ fontSize:"15px",fontWeight:"700",margin:"0 0 8px",color:"#343a40" }}>🫧 Dataviz 3 — Gapminder Bubble Chart (Hans Rosling)</h3>
        <p style={{ fontSize:"13px",color:"#868e96",marginBottom:"16px" }}>Revenu vs espérance de vie, taille = population, couleur = continent.</p>
        <svg viewBox="0 0 700 365" style={{ width:"100%",height:"auto" }}>
          {/* Axes frame */}
          <line x1="80" y1="20" x2="80" y2="310" stroke="#ced4da" strokeWidth="1" />
          <line x1="80" y1="310" x2="670" y2="310" stroke="#ced4da" strokeWidth="1" />
          {/* Y grid */}
          {[40,50,60,70,80].map((v,i) => {
            const y = 310 - ((v-35)/55)*290
            return <g key={`y${i}`}><line x1="80" y1={y} x2="670" y2={y} stroke="#f1f3f5" /><text x="72" y={y+4} textAnchor="end" fill="#6c757d" fontSize="10" fontFamily="'DM Mono',monospace">{v} ans</text></g>
          })}
          {/* X grid */}
          {[500,2000,10000,40000,100000].map((v,i) => {
            const x = 80 + (Math.log(v)/Math.log(120000)) * 590
            return <g key={`x${i}`}><line x1={x} y1="20" x2={x} y2="310" stroke="#f1f3f5" /><text x={x} y="328" textAnchor="middle" fill="#6c757d" fontSize="9" fontFamily="'DM Mono',monospace">{v>=1000?`${v/1000}k$`:v+"$"}</text></g>
          })}
          {/* Axis labels */}
          <text x="375" y="352" textAnchor="middle" fill="#495057" fontSize="11" fontWeight="600">PIB / habitant ($, échelle logarithmique)</text>
          <text x="18" y="170" textAnchor="middle" fill="#495057" fontSize="11" fontWeight="600" transform="rotate(-90,18,170)">Espérance de vie (années)</text>
          {/* Bubbles */}
          {[
            {gdp:560,life:62,pop:26,c:"#fb923c",n:"Niger"},
            {gdp:2200,life:55,pop:220,c:"#fb923c",n:"Nigeria"},
            {gdp:2500,life:70,pop:1400,c:"#fb923c",n:"Inde"},
            {gdp:10000,life:74,pop:215,c:"#fbbf24",n:"Brésil"},
            {gdp:12500,life:78,pop:1400,c:"#ef4444",n:"Chine"},
            {gdp:13000,life:75,pop:130,c:"#34d399",n:"Mexique"},
            {gdp:45000,life:83,pop:68,c:"#60a5fa",n:"France"},
            {gdp:76000,life:79,pop:335,c:"#60a5fa",n:"USA"},
            {gdp:82000,life:84,pop:5,c:"#60a5fa",n:"Norvège"},
          ].map((b,i) => {
            const x = 80 + (Math.log(b.gdp)/Math.log(120000)) * 590
            const y = 310 - ((b.life-35)/55)*290
            const r = Math.max(4, Math.min(14, 3 + Math.log(b.pop) * 1.5))
            return <g key={i}>
              <circle cx={x} cy={y} r={r} fill={b.c} opacity="0.4" stroke={b.c} strokeWidth="1.5" />
              <text x={x} y={y-r-5} textAnchor="middle" fill="#343a40" fontSize="9" fontWeight="600" fontFamily="'DM Mono',monospace">{b.n}</text>
            </g>
          })}
        </svg>
        {/* Légende en HTML */}
        <div style={{ display:"flex",justifyContent:"center",gap:"16px",flexWrap:"wrap",marginTop:"12px" }}>
          {[{c:"#60a5fa",l:"Europe / Am. Nord"},{c:"#fb923c",l:"Afrique / Asie"},{c:"#fbbf24",l:"Am. Latine"},{c:"#34d399",l:"Am. Latine"},{c:"#ef4444",l:"Chine"}].map((lg,i) => (
            <div key={i} style={{ display:"flex",alignItems:"center",gap:"5px" }}>
              <div style={{ width:"12px",height:"12px",borderRadius:"50%",background:lg.c,opacity:0.7,flexShrink:0 }} />
              <span style={{ fontSize:"11px",color:"#6c757d",fontFamily:"'DM Mono',monospace" }}>{lg.l}</span>
            </div>
          ))}
          <div style={{ display:"flex",alignItems:"center",gap:"5px" }}>
            <span style={{ fontSize:"11px",color:"#adb5bd" }}>◯</span>
            <span style={{ fontSize:"11px",color:"#adb5bd",fontFamily:"'DM Mono',monospace" }}>taille = population</span>
          </div>
        </div>
        <div style={{ background:"#f1f3f5",borderRadius:"10px",padding:"16px",marginTop:"16px" }}>
          <h4 style={{ fontSize:"13px",fontWeight:"700",color:"#495057",margin:"0 0 8px" }}>Pourquoi c{"'"}est original ?</h4>
          <p style={{ fontSize:"13px",color:"#868e96",margin:0,lineHeight:1.6 }}>
            Le <strong style={{ color:"#34d399" }}>bubble chart animé</strong> de Hans Rosling (Gapminder) a révolutionné la visualisation 
            des données de développement. En encodant 4 dimensions (revenu, espérance de vie, population, continent) dans 
            un seul graphique et en l{"'"}animant sur 200 ans, Rosling a rendu les statistiques mondiales captivantes. 
            Sa célèbre présentation TED de 2006 a prouvé que les dataviz bien conçues peuvent changer la perception 
            du monde et combattre les préjugés sur les pays en développement.
          </p>
        </div>
        <Source text="gapminder.org — Hans Rosling, Ola Rosling, Anna Rosling Rönnlund" />
      </Card>
    </div>
  )
}

// ════════════════════════════════════════
// MAIN APP
// ════════════════════════════════════════
export default function Home() {
  const [tab, setTab] = useState("home")
  const [intro, setIntro] = useState(true)

  if (intro) return <Intro onDone={() => setIntro(false)} />

  return (
    <div style={{ minHeight:"100vh",background:"#ffffff",color:"#1a1a2e",fontFamily:"'Inter',system-ui,sans-serif" }}>
      {/* HEADER */}
      <header style={{ padding:"20px 24px",borderBottom:"1px solid #e9ecef",background:"linear-gradient(180deg,rgba(239,68,68,0.03) 0%,transparent 100%)",display:"flex",alignItems:"center",gap:"16px" }}>
        <img src="/epsi-logo.png" alt="EPSI" style={{ height:"36px",flexShrink:0 }} />
        <div>
          <h1 style={{ fontSize:"18px",fontWeight:"800",margin:0,letterSpacing:"-0.02em" }}>Atelier datavisualisation Arras 2026</h1>
          <p style={{ fontSize:"11px",color:"#adb5bd",margin:0,fontFamily:"'DM Mono',monospace" }}>Hodari Bigwi · Téo Debay — EPSI Arras 2025</p>
        </div>
      </header>

      {/* NAV */}
      <nav style={{ position:"sticky",top:0,zIndex:100,background:"rgba(255,255,255,0.95)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",borderBottom:"1px solid #e9ecef",padding:"0 24px" }}>
        <div style={{ maxWidth:"1100px",margin:"0 auto",display:"flex",gap:"4px",overflowX:"auto",padding:"8px 0" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => { setTab(t.id); window.scrollTo({top:0,behavior:'smooth'}) }}
              style={{
                background:tab===t.id?"rgba(239,68,68,0.1)":"transparent",
                border:tab===t.id?"1px solid rgba(239,68,68,0.3)":"1px solid transparent",
                color:tab===t.id?"#1a1a2e":"#868e96",
                padding:"8px 14px",borderRadius:"10px",fontSize:"13px",fontWeight:"600",
                cursor:"pointer",whiteSpace:"nowrap",transition:"all 0.2s",fontFamily:"inherit",
                display:"flex",alignItems:"center",gap:"6px"
              }}>
              <span style={{ fontSize:"14px" }}>{t.icon}</span>{t.label}
            </button>
          ))}
        </div>
      </nav>

      {/* CONTENT */}
      <main style={{ maxWidth:"1100px",margin:"0 auto",padding:"0 24px 80px" }}>
        {tab === "home" && <HomePage setTab={setTab} />}
        {tab === "s1" && <Sujet1 />}
        {tab === "s2" && <Sujet2 />}
        {tab === "s3" && <Sujet3 />}
      </main>

      {/* FOOTER */}
      <footer style={{ borderTop:"1px solid #e9ecef",padding:"24px",textAlign:"center",background:"#f8f9fa" }}>
        <p style={{ color:"#ced4da",fontSize:"11px",margin:0,fontFamily:"'DM Mono',monospace" }}>
            Atelier datavisualisation Arras 2026 · Hodari Bigwi · Téo Debay · EPSI Arras · Mastère 2025
        </p>
        <p style={{ color:"#e9ecef",fontSize:"10px",margin:"6px 0 0",fontFamily:"'DM Mono',monospace" }}>
          Sources : NASA GISTEMP · NOAA GML · GIEC AR6 · PNUD · Banque Mondiale · OCDE · Climate Central
        </p>
      </footer>
    </div>
  )
}
