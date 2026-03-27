'use client'

import { useState, useEffect } from 'react'
import * as D from '@/data/climateData'
import SVGChart from '@/components/SVGChart'
import BarChart from '@/components/BarChart'
import { StatCard, SectionTitle, Source, Card } from '@/components/UI'

// Préfixe automatique pour GitHub Pages (lit NEXT_PUBLIC_BASE_PATH)
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || ''
const img = (path) => `${BASE}${path}`

// ════════════════════════════════════════
// PALETTES — une par sujet
// S1 Climat  → rouges chauds  #ef4444 principal
// S2 Inégal. → bleus profonds #3b82f6 principal
// S3 Dataviz → créatif/mixte
// ════════════════════════════════════════

const tabs = [
  { id: "home", label: "Accueil", icon: "🏠" },
  { id: "s1", label: "Sujet 1 — Climat", icon: "🌡️" },
  { id: "s2", label: "Sujet 2 — Inégalités", icon: "🌍" },
  { id: "s3", label: "Sujet 3 — Dataviz", icon: "📊" },
]

function Intro({ onDone }) {
  useEffect(() => { const t = setTimeout(onDone, 2800); return () => clearTimeout(t) }, [])
  return (
    <div style={{ minHeight:"100vh",background:"#fff",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column" }}>
      <style>{`@keyframes gp{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}} @keyframes sl{0%{transform:translateX(0)}100%{transform:translateX(140px)}}`}</style>
      <img src={img("/epsi-logo.png")} alt="EPSI" style={{ height:"70px",marginBottom:"32px",animation:"gp 2s ease-in-out infinite" }} />
      <h1 style={{ color:"#1a1a2e",fontSize:"28px",fontWeight:"900",letterSpacing:"-0.03em",margin:0,textAlign:"center" }}>Atelier datavisualisation Arras 2026</h1>
      <p style={{ color:"#868e96",fontSize:"14px",marginTop:"12px",letterSpacing:"0.1em",textTransform:"uppercase" }}>EPSI Arras — Mastère 2025</p>
      <p style={{ color:"#ced4da",fontSize:"13px",marginTop:"8px" }}>Hodari Bigwi · Téo Debay</p>
      <div style={{ width:"200px",height:"2px",background:"linear-gradient(90deg,transparent,#ef4444,transparent)",marginTop:"24px",overflow:"hidden" }}>
        <div style={{ width:"60px",height:"2px",background:"#ef4444",animation:"sl 1.5s ease-in-out infinite" }} />
      </div>
    </div>
  )
}

function HomePage({ setTab }) {
  return (
    <div>
      <div style={{ textAlign:"center",padding:"80px 0 48px" }}>
        <img src={img("/epsi-logo.png")} alt="EPSI" style={{ height:"70px",marginBottom:"32px" }} />
        <h1 style={{ fontSize:"36px",fontWeight:"900",color:"#1a1a2e",letterSpacing:"-0.03em",margin:"0 0 8px" }}>Atelier datavisualisation Arras 2026</h1>
        <h2 style={{ fontSize:"18px",fontWeight:"600",color:"#6c757d",margin:"0 0 24px" }}>Par Didier NAKACHE</h2>
        <div style={{ width:"60px",height:"3px",background:"#ef4444",margin:"0 auto 32px",borderRadius:"2px" }} />
        <p style={{ color:"#adb5bd",fontSize:"14px",margin:0 }}>EPSI Arras · Mastère EISI · Année 2025</p>
      </div>
      <Card style={{ maxWidth:"500px",margin:"0 auto 48px",textAlign:"center" }}>
        <h3 style={{ fontSize:"13px",fontWeight:"700",color:"#868e96",letterSpacing:"0.1em",textTransform:"uppercase",margin:"0 0 16px" }}>Réalisé par</h3>
        <div style={{ display:"flex",justifyContent:"center",gap:"40px" }}>
          {[{name:"Hodari Bigwi",photo:img("/photoHodari.jpg")},{name:"Téo Debay",photo:img("/photoTeo.jpg")}].map((p,i) => (
            <div key={i} style={{ textAlign:"center" }}>
              <img src={p.photo} alt={p.name} style={{ width:"80px",height:"80px",borderRadius:"50%",objectFit:"cover",border:"3px solid #e9ecef",margin:"0 auto 10px",display:"block" }} />
              <div style={{ fontSize:"15px",fontWeight:"700",color:"#1a1a2e" }}>{p.name}</div>
            </div>
          ))}
        </div>
      </Card>
      <h3 style={{ fontSize:"13px",fontWeight:"700",color:"#868e96",letterSpacing:"0.1em",textTransform:"uppercase",textAlign:"center",margin:"0 0 24px" }}>Sommaire</h3>
      <div style={{ display:"flex",flexDirection:"column",gap:"16px",maxWidth:"700px",margin:"0 auto" }}>
        {[
          { id:"s1",num:"01",title:"Le réchauffement climatique",desc:"Anomalies de température, CO₂, événements extrêmes, projections GIEC",icon:"🌡️",color:"#ef4444" },
          { id:"s2",num:"02",title:"Inégalités mondiales & développement humain",desc:"IDH, PIB/habitant, Gini, espérance de vie, clustering",icon:"🌍",color:"#3b82f6" },
          { id:"s3",num:"03",title:"Dataviz originaux",desc:"Visualisations de données innovantes et leur analyse",icon:"📊",color:"#8b5cf6" }
        ].map((s) => (
          <button key={s.id} onClick={() => setTab(s.id)} style={{
            background:"#f8f9fa",border:"1px solid #dee2e6",borderRadius:"16px",padding:"24px",
            textAlign:"left",cursor:"pointer",display:"flex",alignItems:"center",gap:"20px",
            transition:"all 0.2s",fontFamily:"inherit",color:"#1a1a2e"
          }}
          onMouseEnter={e => e.currentTarget.style.borderColor = s.color + "55"}
          onMouseLeave={e => e.currentTarget.style.borderColor = "#dee2e6"}>
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
// SUJET 1 — CLIMAT · palette rouge #ef4444
// ════════════════════════════════════════
function Sujet1() {
  const disasterColors = ["#fecaca","#fca5a5","#f87171","#ef4444","#991b1b"]
  const contColor = (w, opacity = 1) => {
    const t = (w - 1.0) / (3.8 - 1.0)
    return `rgba(${Math.round(220 + t * 35)},${Math.round(100 - t * 80)},${Math.round(80 - t * 60)},${opacity})`
  }
  return (
    <div>
      <SectionTitle number="01" title="Le réchauffement climatique" subtitle="Climat & réchauffement global (1850–2025) · NASA, NOAA, Copernicus, GIEC" />

      <Card style={{ background:"#fff5f5",border:"1px solid #fecaca" }}>
        <p style={{ color:"#495057",fontSize:"14px",lineHeight:1.8,margin:0 }}>
          Le <strong style={{color:"#ef4444"}}>réchauffement climatique</strong> désigne l{"'"}augmentation progressive de la température
          moyenne à la surface terrestre, causée principalement par les émissions humaines de gaz à effet de
          serre depuis la révolution industrielle. Depuis 1850, la planète a gagné <strong>+1,28°C</strong> en moyenne —
          un chiffre qui peut paraître faible mais qui traduit une redistribution massive d{"'"}énergie dans le
          système climatique : fonte des glaces, acidification des océans, intensification des événements
          extrêmes. L{"'"}ensemble des données provient d{"'"}organismes scientifiques indépendants dont les
          mesures sont confirmées par des méthodes indépendantes.
        </p>
      </Card>

      <div style={{ display:"flex",flexWrap:"wrap",gap:"16px",marginBottom:"32px" }}>
        <StatCard value="+1.28°C" label="Record 2024" sub="Année la plus chaude (NASA)" color="#ef4444" icon="🔥" />
        <StatCard value="427 ppm" label="Pic CO₂ 2025" sub="Record absolu (Scripps)" color="#dc2626" icon="💨" />
        <StatCard value="605" label="Événements 2024" sub="Recensés par l'OMM" color="#b91c1c" icon="⚡" />
        <StatCard value="$320 Mrd" label="Pertes 2024" sub="Munich Re" color="#7f1d1d" icon="💰" />
      </div>

      <Card>
        <h3 style={{ fontSize:"15px",fontWeight:"700",margin:"0 0 8px",color:"#343a40" }}>Anomalie de température moyenne globale (°C) — 1850–2025</h3>
        <p style={{ fontSize:"13px",color:"#6c757d",lineHeight:1.7,margin:"0 0 16px" }}>
          Une <em>anomalie de température</em> est l{"'"}écart entre la température d{"'"}une année donnée et la moyenne de
          la période de référence 1951–1980. Une valeur positive signifie que l{"'"}année était plus chaude
          que cette référence. La ligne pointillée à zéro représente le « climat normal » des décennies
          centrales du XXe siècle. Ce que ce graphique montre sans ambiguïté : depuis les années 1980,
          chaque décennie est plus chaude que la précédente, et la courbe s{"'"}accélère nettement après 2000.
        </p>
        <SVGChart data={D.tempAnomalyData} xKey="year" yKey="anomaly" color="#ef4444" gradientId="tg" baselineY={0} />
        <div style={{ background:"#fef2f2",border:"1px solid #fecaca",borderRadius:"10px",padding:"14px",marginTop:"12px" }}>
          <p style={{ fontSize:"13px",color:"#495057",margin:0,lineHeight:1.7 }}>
            <strong style={{color:"#ef4444"}}>Lecture :</strong> Les 10 années les plus chaudes jamais enregistrées ont <em>toutes</em> eu lieu après 2010.
            La tendance long terme (1880–2025) est de <strong>+0,08°C/décennie</strong>, mais depuis 1975 ce rythme
            s{"'"}est accéléré à <strong>+0,18°C/décennie</strong> — soit 2,3× plus vite. 2024 est la première année
            à franchir durablement le seuil de +1,5°C fixé par l{"'"}Accord de Paris.
          </p>
        </div>
        <Source text="NASA GISTEMP v4 — anomalies vs. moyenne 1951-1980" />
      </Card>

      <Card>
        <h3 style={{ fontSize:"15px",fontWeight:"700",margin:"0 0 8px",color:"#343a40" }}>CO₂ atmosphérique (ppm) — Courbe de Keeling — 1958–2025</h3>
        <p style={{ fontSize:"13px",color:"#6c757d",lineHeight:1.7,margin:"0 0 16px" }}>
          Le dioxyde de carbone est le principal gaz à effet de serre d{"'"}origine humaine. Sa concentration
          est mesurée en continu depuis 1958 à l{"'"}observatoire de Mauna Loa (Hawaï) par le programme
          Scripps/NOAA — c{"'"}est la célèbre <strong>Courbe de Keeling</strong>, du nom du scientifique
          Charles David Keeling qui l{"'"}a initiée. La valeur est exprimée en <em>parties par million</em> (ppm) :
          427 ppm signifie 427 molécules de CO₂ pour un million de molécules d{"'"}air.
          L{"'"}ère préindustrielle était à ~280 ppm, stable depuis 10 000 ans.
        </p>
        <SVGChart data={D.co2Data} xKey="year" yKey="ppm" color="#dc2626" gradientId="cg" />
        <div style={{ background:"#fef2f2",border:"1px solid #fecaca",borderRadius:"10px",padding:"14px",marginTop:"12px" }}>
          <p style={{ fontSize:"13px",color:"#495057",margin:0,lineHeight:1.7 }}>
            <strong style={{color:"#dc2626"}}>Lecture :</strong> Nous avons franchi le seuil symbolique des <strong>400 ppm en 2013</strong>.
            En 2025, la concentration atteint <strong>427 ppm</strong>, soit <strong>+52 %</strong> par rapport à l{"'"}ère
            préindustrielle. La corrélation entre CO₂ et température est quasi-parfaite (<em>r = 0,95</em>),
            confirmant le rôle causal du CO₂ dans le réchauffement observé.
          </p>
        </div>
        <Source text="NOAA GML / Scripps — Mauna Loa Observatory" />
      </Card>

      <Card>
        <h3 style={{ fontSize:"15px",fontWeight:"700",margin:"0 0 12px",color:"#343a40" }}>🔍 Régression linéaire & non-linéaire</h3>
        <p style={{ fontSize:"13px",color:"#6c757d",lineHeight:1.7,margin:"0 0 16px" }}>
          L{"'"}analyse statistique confirme l{"'"}accélération du réchauffement. Une régression polynomiale de degré 2
          dépasse la régression linéaire simple, indiquant que le réchauffement ne progresse pas à taux
          constant mais s{"'"}accélère — un signal cohérent avec les rétroactions climatiques (méthane
          libéré par le permafrost, réduction de l{"'"}albédo par la fonte des glaces).
        </p>
        <div style={{ display:"flex",gap:"16px",flexWrap:"wrap" }}>
          {[
            {l:"LINÉAIRE (1880-2025)",v:"+0.08°C/déc.",s:"R² ≈ 0.87",c:"#ef4444"},
            {l:"ACCÉLÉRÉE (1975-2025)",v:"+0.18°C/déc.",s:"×2.3 vs longue",c:"#dc2626"},
            {l:"NON-LINÉAIRE",v:"Poly. deg. 2",s:"R² ≈ 0.92",c:"#b91c1c"},
            {l:"CORRÉLATION CO₂↔T°",v:"r = 0.95",s:"Quasi-parfaite",c:"#7f1d1d"}
          ].map((x,i) => (
            <div key={i} style={{ flex:"1 1 200px",background:`${x.c}10`,borderRadius:"12px",padding:"16px" }}>
              <div style={{ fontSize:"10px",color:"#6c757d",fontFamily:"'DM Mono',monospace",marginBottom:"4px" }}>{x.l}</div>
              <div style={{ fontSize:"20px",fontWeight:"700",color:x.c }}>{x.v}</div>
              <div style={{ fontSize:"10px",color:"#adb5bd",marginTop:"4px" }}>{x.s}</div>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h3 style={{ fontSize:"15px",fontWeight:"700",margin:"0 0 8px",color:"#343a40" }}>Catastrophes $1Mrd+ par an (US) & coût moyen</h3>
        <p style={{ fontSize:"13px",color:"#6c757d",lineHeight:1.7,margin:"0 0 16px" }}>
          À mesure que la planète se réchauffe, les événements météorologiques extrêmes deviennent plus
          fréquents et plus coûteux. Ce graphique montre l{"'"}évolution aux États-Unis du nombre annuel
          et du coût des catastrophes climatiques dépassant le milliard de dollars — indicateur suivi par
          la NOAA depuis les années 1980. En quatre décennies, la fréquence a été <strong>multipliée par 5,8</strong> et
          le coût annuel moyen par <strong>6,8</strong>.
        </p>
        <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px" }}>
          <div><h4 style={{ fontSize:"12px",color:"#868e96",margin:"0 0 12px" }}>Fréquence moyenne/an</h4>
            <BarChart data={D.billionDollarDisasters} labelKey="decade" valueKey="avg" color={(d,i)=>disasterColors[i]} /></div>
          <div><h4 style={{ fontSize:"12px",color:"#868e96",margin:"0 0 12px" }}>Coût moyen/an (Mrd$)</h4>
            <BarChart data={D.billionDollarDisasters} labelKey="decade" valueKey="cost" unit=" Mrd$" color={(d,i)=>disasterColors[i]} /></div>
        </div>
        <Source text="NOAA NCEI / Climate Central" />
      </Card>

      <Card>
        <h3 style={{ fontSize:"15px",fontWeight:"700",margin:"0 0 8px",color:"#343a40" }}>Réchauffement par région (°C vs. préindustriel)</h3>
        <p style={{ fontSize:"13px",color:"#6c757d",lineHeight:1.7,margin:"0 0 16px" }}>
          Le réchauffement n{"'"}est pas uniforme. Les régions polaires se réchauffent deux à quatre fois plus vite
          que la moyenne mondiale — un phénomène appelé <em>amplification polaire</em> — en raison de la
          réduction de la couverture neigeuse qui amplifie l{"'"}absorption solaire. L{"'"}Europe est la
          région continentale qui se réchauffe le plus vite (+2,3°C), notamment par les modifications
          de la circulation atmosphérique de l{"'"}Atlantique Nord.
        </p>
        {D.continentWarming.map((c,i) => (
          <div key={i} style={{ display:"flex",alignItems:"center",gap:"12px",marginBottom:"10px" }}>
            <span style={{ width:"90px",fontSize:"12px",color:"#495057",textAlign:"right",flexShrink:0 }}>{c.name}</span>
            <div style={{ flex:1,background:"#f1f3f5",borderRadius:"6px",height:"26px",position:"relative" }}>
              <div style={{ width:`${(c.warming/4)*100}%`,height:"100%",background:`linear-gradient(90deg,${contColor(c.warming,0.4)},${contColor(c.warming,1)})`,borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"flex-end",paddingRight:"8px" }}>
                <span style={{ fontSize:"11px",fontWeight:"700",color:"#fff",fontFamily:"'DM Mono',monospace" }}>+{c.warming}°C</span>
              </div>
            </div>
          </div>
        ))}
      </Card>

      <Card>
        <h3 style={{ fontSize:"15px",fontWeight:"700",margin:"0 0 8px",color:"#343a40" }}>Projections GIEC AR6 — Scénarios SSP à 2100</h3>
        <p style={{ fontSize:"13px",color:"#6c757d",lineHeight:1.7,margin:"0 0 16px" }}>
          Le GIEC (Groupe d{"'"}experts Intergouvernemental sur l{"'"}Évolution du Climat) définit cinq scénarios SSP
          (<em>Shared Socioeconomic Pathways</em>) selon l{"'"}ampleur des politiques climatiques. Le scénario
          SSP5-8.5 représente le « pire cas » sans action, tandis que SSP1-1.9 est le seul compatible
          avec l{"'"}objectif +1,5°C de l{"'"}Accord de Paris. Le monde suit actuellement une trajectoire
          intermédiaire entre SSP2-4.5 et SSP3-7.0.
        </p>
        {D.scenariosIPCC.map((s,i) => (
          <div key={i} style={{ display:"flex",alignItems:"center",gap:"12px",marginBottom:"10px" }}>
            <div style={{ width:"80px",textAlign:"right",flexShrink:0 }}>
              <div style={{ fontSize:"11px",fontWeight:"700",color:s.color,fontFamily:"'DM Mono',monospace" }}>{s.name}</div>
              <div style={{ fontSize:"9px",color:"#adb5bd" }}>{s.label}</div>
            </div>
            <div style={{ flex:1,background:"#f1f3f5",borderRadius:"6px",height:"30px",position:"relative" }}>
              <div style={{ width:`${(s.temp2100/5)*100}%`,height:"100%",background:`linear-gradient(90deg,${s.color}44,${s.color})`,borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"flex-end",paddingRight:"10px" }}>
                <span style={{ fontSize:"12px",fontWeight:"800",color:"#1a1a2e",fontFamily:"'DM Mono',monospace" }}>+{s.temp2100}°C</span>
              </div>
              <div style={{ position:"absolute",left:`${(1.5/5)*100}%`,top:0,bottom:0,borderLeft:"2px dashed rgba(34,197,94,0.5)" }}>
                {i===0 && <span style={{ position:"absolute",top:"-14px",left:"-12px",fontSize:"8px",color:"#22c55e",fontFamily:"'DM Mono',monospace",whiteSpace:"nowrap" }}>Paris 1.5°C</span>}
              </div>
            </div>
          </div>
        ))}
        <Source text="GIEC AR6 Synthesis Report (2023)" />
      </Card>

      <Card>
        <h3 style={{ fontSize:"15px",fontWeight:"700",margin:"0 0 8px",color:"#343a40" }}>⚠️ Points de basculement climatiques</h3>
        <p style={{ fontSize:"13px",color:"#6c757d",lineHeight:1.7,margin:"0 0 16px" }}>
          Les <strong>points de basculement</strong> (<em>tipping points</em>) sont des seuils au-delà desquels
          certains systèmes climatiques basculent de façon irréversible. La glace de l{"'"}Arctique estival
          et les récifs coralliens tropicaux pourraient être perdus dès <strong>+1,5°C</strong> — un seuil
          déjà franchi en 2024. Ces basculements peuvent interagir en cascade, amplifiant le
          réchauffement bien au-delà des projections linéaires.
        </p>
        <div style={{ display:"flex",gap:"8px",overflowX:"auto",paddingBottom:"8px" }}>
          {D.tippingPoints.map((tp,i) => (
            <div key={i} style={{ flex:"0 0 120px",background:tp.threshold<=1.5?"rgba(239,68,68,0.1)":tp.threshold<=2?"rgba(220,38,38,0.07)":"rgba(185,28,28,0.05)",border:`1px solid ${tp.threshold<=1.5?"rgba(239,68,68,0.25)":tp.threshold<=2?"rgba(220,38,38,0.18)":"rgba(185,28,28,0.12)"}`,borderRadius:"14px",padding:"14px",textAlign:"center" }}>
              <div style={{ fontSize:"28px",marginBottom:"6px" }}>{tp.icon}</div>
              <div style={{ fontSize:"10px",color:"#495057",whiteSpace:"pre-line",lineHeight:1.3,marginBottom:"6px" }}>{tp.name}</div>
              <div style={{ fontSize:"13px",fontWeight:"800",fontFamily:"'DM Mono',monospace",color:tp.threshold<=1.5?"#ef4444":tp.threshold<=2?"#dc2626":"#b91c1c" }}>~{tp.threshold}°C</div>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h3 style={{ fontSize:"15px",fontWeight:"700",margin:"0 0 8px",color:"#343a40" }}>🌍 Bilan mondial 2024 (OMM)</h3>
        <p style={{ fontSize:"13px",color:"#6c757d",lineHeight:1.7,margin:"0 0 16px" }}>
          L{"'"}Organisation Météorologique Mondiale publie chaque année un bilan des impacts climatiques.
          En 2024, année la plus chaude jamais enregistrée, les conséquences humaines et économiques
          ont été particulièrement sévères — illustrant que le changement climatique n{"'"}est plus une
          menace future mais une réalité qui affecte aujourd{"'"}hui des centaines de millions de personnes.
        </p>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:"10px" }}>
          {D.wmoStats2024.map((x,i) => (
            <div key={i} style={{ background:"#fef2f2",border:"1px solid #fecaca",borderRadius:"12px",padding:"14px",textAlign:"center" }}>
              <div style={{ fontSize:"22px",marginBottom:"4px" }}>{x.e}</div>
              <div style={{ fontSize:"18px",fontWeight:"800",color:"#991b1b",fontFamily:"'DM Mono',monospace" }}>{x.n}</div>
              <div style={{ fontSize:"10px",color:"#6c757d",marginTop:"4px" }}>{x.l}</div>
            </div>
          ))}
        </div>
        <Source text="WMO, EM-DAT, Munich Re, Swiss Re" />
      </Card>
    </div>
  )
}

// ════════════════════════════════════════
// SUJET 2 — INÉGALITÉS · palette bleue #3b82f6
// ════════════════════════════════════════
function Sujet2() {
  const giniColor = (g) => g > 50 ? "#1e3a8a" : g > 35 ? "#2563eb" : g > 28 ? "#60a5fa" : "#bfdbfe"
  return (
    <div>
      <SectionTitle number="02" title="Inégalités mondiales & développement humain" subtitle="PIB/habitant, IDH, Espérance de vie, Éducation, Gini · PNUD, Banque Mondiale, OCDE" />

      <Card>
        <h3 style={{ fontSize:"15px",fontWeight:"700",margin:"0 0 12px",color:"#343a40" }}>📋 Démarche méthodologique</h3>
        <p style={{ color:"#6c757d",fontSize:"13px",lineHeight:1.7,margin:"0 0 16px" }}>
          La construction des graphiques a suivi une démarche structurée en cinq étapes : la recherche
          de données fiables auprès de sources institutionnelles, le nettoyage et la normalisation,
          le choix des graphiques adaptés à chaque analyse, leur réalisation, puis leur interprétation.
        </p>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"10px" }}>
          {[
            {d:"PIB / Habitant",s:"FMI / Banque Mondiale",a:"2023"},
            {d:"IDH",s:"PNUD (dernier rapport)",a:"2022-2023"},
            {d:"Espérance de vie",s:"OMS / Banque Mondiale",a:"2022-2023"},
            {d:"Éducation (Indice)",s:"PNUD",a:"2022"},
            {d:"Inégalités (Gini)",s:"Banque Mondiale",a:"2019-2023*"},
          ].map((x,i) => (
            <div key={i} style={{ background:"#eff6ff",border:"1px solid #bfdbfe",borderRadius:"8px",padding:"10px" }}>
              <div style={{ fontSize:"12px",fontWeight:"700",color:"#1e3a8a" }}>{x.d}</div>
              <div style={{ fontSize:"11px",color:"#6c757d",marginTop:"2px" }}>{x.s} — {x.a}</div>
            </div>
          ))}
        </div>
      </Card>

      <div style={{ display:"flex",flexWrap:"wrap",gap:"16px",marginBottom:"32px" }}>
        <StatCard value="0.756" label="IDH mondial 2023" sub="En hausse vs 0.601 en 1990" color="#3b82f6" icon="📈" />
        <StatCard value="×136" label="Écart PIB/hab" sub="Norvège $82k vs Niger $560" color="#2563eb" icon="💰" />
        <StatCard value="0.586" label="Écart IDH max" sub="Islande 0.966 vs Somalie 0.380" color="#1d4ed8" icon="📊" />
        <StatCard value="63.0" label="Gini max" sub="Afrique du Sud, pays le plus inégalitaire" color="#1e3a8a" icon="⚖️" />
      </div>

      <Card>
        <h3 style={{ fontSize:"15px",fontWeight:"700",margin:"0 0 12px",color:"#343a40" }}>🗺️ Inégalités de PIB par habitant dans le monde</h3>
        <p style={{ color:"#6c757d",fontSize:"13px",lineHeight:1.7,margin:"0 0 16px" }}>
          Carte réalisée avec Tableau Public. L{"'"}intensité du bleu représente le PIB/habitant.
        </p>
        <div style={{ background:"#eff6ff",borderRadius:"12px",padding:"20px",border:"1px solid #bfdbfe" }}>
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
              <strong>Analyse :</strong> L{"'"}inégalité Nord/Sud est immédiatement visible. L{"'"}Europe occidentale forme un bloc homogène riche. L{"'"}Afrique est quasi-entièrement dans les tons très clairs. Les revenus intermédiaires concernent l{"'"}Europe de l{"'"}Est, la Chine, le Brésil et le Mexique.
            </p>
          </div>
        </div>
        <Source text="FMI / Banque Mondiale 2023 — Carte : Tableau Public" />
      </Card>

      <Card>
        <h3 style={{ fontSize:"15px",fontWeight:"700",margin:"0 0 8px",color:"#343a40" }}>Évolution de l{"'"}IDH mondial (1990–2023) — Convergence puis divergence</h3>
        <p style={{ fontSize:"13px",color:"#6c757d",lineHeight:1.7,margin:"0 0 16px" }}>
          L{"'"}Indice de Développement Humain (IDH) mesure le développement sur trois dimensions :
          l{"'"}espérance de vie, le niveau d{"'"}éducation et le revenu par habitant. Contrairement au PIB seul,
          il capture une vision plus complète du bien-être humain. Sa valeur varie entre 0 et 1.
        </p>
        <SVGChart data={D.idhEvolution} xKey="year" yKey="world" color="#3b82f6" gradientId="ig" />
        <div style={{ display:"flex",gap:"16px",marginTop:"16px",flexWrap:"wrap" }}>
          {[{l:"IDH élevé 2023",v:"0.912",c:"#1d4ed8"},{l:"IDH mondial",v:"0.756",c:"#3b82f6"},{l:"IDH faible",v:"0.494",c:"#93c5fd"},{l:"Écart haut-bas",v:"0.418",c:"#60a5fa"}].map((x,i)=>(
            <div key={i} style={{ flex:"1 1 120px",background:`${x.c}15`,border:`1px solid ${x.c}30`,borderRadius:"10px",padding:"12px",textAlign:"center" }}>
              <div style={{ fontSize:"10px",color:"#6c757d",fontFamily:"'DM Mono',monospace" }}>{x.l}</div>
              <div style={{ fontSize:"22px",fontWeight:"800",color:x.c,marginTop:"4px" }}>{x.v}</div>
            </div>
          ))}
        </div>
        <p style={{ color:"#6c757d",fontSize:"13px",marginTop:"12px",lineHeight:1.7 }}>
          Après des décennies de convergence, la tendance s{"'"}est inversée depuis 2020. Le PNUD parle
          d{"'"}un « ralentissement dramatique ». Les pays à IDH faible ont été les plus touchés par les
          crises récentes (COVID-19, conflits, inflation alimentaire) et l{"'"}écart se re-creuse.
        </p>
        <Source text="PNUD — Rapport sur le développement humain 2025" />
      </Card>

      <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",marginBottom:"24px" }}>
        <Card style={{ marginBottom:0 }}>
          <h3 style={{ fontSize:"14px",fontWeight:"700",margin:"0 0 12px",color:"#1d4ed8" }}>🏆 Top 5 IDH (2023)</h3>
          {D.topIDH.map((x,i) => (
            <div key={i} style={{ display:"flex",alignItems:"center",gap:"10px",marginBottom:"8px" }}>
              <span style={{ fontSize:"20px" }}>{x.flag}</span>
              <span style={{ flex:1,fontSize:"13px",color:"#343a40" }}>{x.country}</span>
              <span style={{ fontSize:"14px",fontWeight:"700",color:"#1d4ed8",fontFamily:"'DM Mono',monospace" }}>{x.idh}</span>
            </div>
          ))}
        </Card>
        <Card style={{ marginBottom:0 }}>
          <h3 style={{ fontSize:"14px",fontWeight:"700",margin:"0 0 12px",color:"#1e3a8a" }}>⚠️ Bottom 5 IDH (2023)</h3>
          {D.bottomIDH.map((x,i) => (
            <div key={i} style={{ display:"flex",alignItems:"center",gap:"10px",marginBottom:"8px" }}>
              <span style={{ fontSize:"20px" }}>{x.flag}</span>
              <span style={{ flex:1,fontSize:"13px",color:"#343a40" }}>{x.country}</span>
              <span style={{ fontSize:"14px",fontWeight:"700",color:"#1e3a8a",fontFamily:"'DM Mono',monospace" }}>{x.idh}</span>
            </div>
          ))}
        </Card>
      </div>

      <Card>
        <h3 style={{ fontSize:"15px",fontWeight:"700",margin:"0 0 12px",color:"#343a40" }}>💊 Corrélation richesse — santé (Espérance de vie vs PIB/hab)</h3>
        <p style={{ color:"#6c757d",fontSize:"13px",lineHeight:1.7,margin:"0 0 16px" }}>
          Scatter plot montrant la relation entre la richesse d{"'"}un pays et l{"'"}espérance de vie.
          L{"'"}axe des abscisses est en échelle logarithmique pour mieux visualiser l{"'"}impact aux
          bas niveaux de revenus, là où chaque dollar supplémentaire a le plus d{"'"}effet.
        </p>
        <svg viewBox="0 0 700 340" style={{ width:"100%",height:"auto" }}>
          <line x1="80" y1="20" x2="80" y2="290" stroke="#ced4da" strokeWidth="1" />
          <line x1="80" y1="290" x2="670" y2="290" stroke="#ced4da" strokeWidth="1" />
          {[50,60,70,80,90].map((v,i) => {
            const y = 290 - ((v-45)/50)*270
            return <g key={i}><line x1="80" y1={y} x2="670" y2={y} stroke="#f1f3f5" /><text x="72" y={y+4} textAnchor="end" fill="#6c757d" fontSize="10" fontFamily="'DM Mono',monospace">{v} ans</text></g>
          })}
          {[500,2000,5000,20000,50000,100000].map((v,i) => {
            const lMin=Math.log(300),lMax=Math.log(130000)
            const x = 80 + ((Math.log(v)-lMin)/(lMax-lMin)) * 590
            return <g key={i}><line x1={x} y1="20" x2={x} y2="290" stroke="#f1f3f5" /><text x={x} y="308" textAnchor="middle" fill="#6c757d" fontSize="9" fontFamily="'DM Mono',monospace">{v>=1000?`${v/1000}k$`:v+"$"}</text></g>
          })}
          <text x="375" y="335" textAnchor="middle" fill="#495057" fontSize="11" fontWeight="600">PIB / habitant ($, échelle log)</text>
          <text x="18" y="155" textAnchor="middle" fill="#495057" fontSize="11" fontWeight="600" transform="rotate(-90,18,155)">Espérance de vie (années)</text>
          {(() => { const lMin=Math.log(300),lMax=Math.log(130000); const sx = 80+((Math.log(20000)-lMin)/(lMax-lMin))*590; return <line x1={sx} y1="20" x2={sx} y2="290" stroke="#3b82f6" strokeDasharray="6,4" strokeWidth="1.5" /> })()}
          {(() => { const lMin=Math.log(300),lMax=Math.log(130000); const sx = 80+((Math.log(20000)-lMin)/(lMax-lMin))*590; return <text x={sx+4} y="30" fill="#3b82f6" fontSize="8" fontFamily="'DM Mono',monospace">seuil ~20k$</text> })()}
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
            const lMin=Math.log(300),lMax=Math.log(130000)
            const x = 80 + ((Math.log(p.gdp)-lMin)/(lMax-lMin)) * 590
            const y = 290 - ((p.life-45)/50)*270
            const t = Math.min(1,(p.gdp-560)/(82000-560))
            return <g key={i}>
              <circle cx={x} cy={y} r="5" fill={`rgb(${Math.round(96-t*78)},${Math.round(130+t*20)},246)`} opacity="0.8" stroke="#fff" strokeWidth="1.5" />
              <text x={x} y={y-9} textAnchor="middle" fill="#343a40" fontSize="8" fontWeight="600" fontFamily="'DM Mono',monospace">{p.n}</text>
            </g>
          })}
        </svg>
        <div style={{ background:"#eff6ff",border:"1px solid #bfdbfe",borderRadius:"10px",padding:"14px",marginTop:"12px" }}>
          <p style={{ fontSize:"13px",color:"#495057",margin:0,lineHeight:1.7 }}>
            <strong style={{ color:"#2563eb" }}>Constat clé :</strong> La courbe monte très rapidement entre 0 et ~20 000 $/hab, puis s{"'"}aplatit.
            Passer de 500 à 5 000 $/hab fait gagner environ <strong>15 ans</strong> d{"'"}espérance de vie.
            <strong> La richesse sauve des vies, mais seulement jusqu{"'"}à un certain seuil.</strong>
          </p>
        </div>
        <Source text="OMS, Banque Mondiale 2022-2023" />
      </Card>

      <Card>
        <h3 style={{ fontSize:"15px",fontWeight:"700",margin:"0 0 8px",color:"#343a40" }}>⚖️ Coefficient de Gini par pays (0 = égalité parfaite, 100 = inégalité totale)</h3>
        <p style={{ fontSize:"13px",color:"#6c757d",lineHeight:1.7,margin:"0 0 16px" }}>
          Le coefficient de Gini mesure l{"'"}inégalité de distribution des revenus. Un Gini de 0 signifie
          une égalité parfaite, 100 une inégalité absolue. L{"'"}intensité du bleu représente le niveau
          d{"'"}inégalité — plus la barre est sombre, plus le pays est inégalitaire.
        </p>
        <BarChart data={D.giniByCountry} labelKey="country" valueKey="gini" color={(d) => giniColor(d.gini)} />
        <div style={{ display:"flex",justifyContent:"center",gap:"16px",flexWrap:"wrap",marginTop:"12px" }}>
          {[{c:"#1e3a8a",l:"Très inégalitaire (>50)"},{c:"#2563eb",l:"Inégalitaire (35-50)"},{c:"#60a5fa",l:"Moyen (28-35)"},{c:"#bfdbfe",l:"Égalitaire (<28)"}].map((lg,i) => (
            <div key={i} style={{ display:"flex",alignItems:"center",gap:"5px" }}>
              <div style={{ width:"10px",height:"10px",borderRadius:"3px",background:lg.c,flexShrink:0 }} />
              <span style={{ fontSize:"11px",color:"#6c757d",fontFamily:"'DM Mono',monospace" }}>{lg.l}</span>
            </div>
          ))}
        </div>
        <Source text="Banque Mondiale — Poverty and Inequality Platform (2019-2023)" />
      </Card>

      <Card>
        <h3 style={{ fontSize:"15px",fontWeight:"700",margin:"0 0 8px",color:"#343a40" }}>🏥 Espérance de vie par région : évolution 1970 → 2023</h3>
        <p style={{ fontSize:"13px",color:"#6c757d",lineHeight:1.7,margin:"0 0 16px" }}>
          L{"'"}espérance de vie est l{"'"}un des indicateurs les plus synthétiques du développement humain.
          Elle reflète à la fois le niveau du système de santé, la nutrition, l{"'"}accès à l{"'"}eau potable
          et la stabilité politique. La barre bleue claire = 1970, la barre bleue foncée = 2023.
        </p>
        {D.lifeExpectancy.map((x,i) => (
          <div key={i} style={{ marginBottom:"12px" }}>
            <div style={{ display:"flex",justifyContent:"space-between",marginBottom:"4px" }}>
              <span style={{ fontSize:"12px",color:"#495057",fontWeight:"600" }}>{x.region}</span>
              <span style={{ fontSize:"11px",color:"#6c757d",fontFamily:"'DM Mono',monospace" }}>{x.y1970} → {x.y2023} ans (+{x.y2023 - x.y1970})</span>
            </div>
            <div style={{ position:"relative",height:"20px",background:"#f1f5f9",borderRadius:"4px" }}>
              <div style={{ position:"absolute",left:0,top:0,height:"100%",width:`${(x.y1970/85)*100}%`,background:"rgba(147,197,253,0.6)",borderRadius:"4px" }} />
              <div style={{ position:"absolute",left:0,top:0,height:"100%",width:`${(x.y2023/85)*100}%`,background:"linear-gradient(90deg,#60a5fa99,#1d4ed8)",borderRadius:"4px" }} />
            </div>
          </div>
        ))}
        <div style={{ display:"flex",justifyContent:"center",gap:"24px",marginTop:"10px" }}>
          <div style={{ display:"flex",alignItems:"center",gap:"5px" }}><div style={{ width:"14px",height:"10px",borderRadius:"2px",background:"rgba(147,197,253,0.6)" }} /><span style={{ fontSize:"11px",color:"#6c757d" }}>1970</span></div>
          <div style={{ display:"flex",alignItems:"center",gap:"5px" }}><div style={{ width:"14px",height:"10px",borderRadius:"2px",background:"#1d4ed8" }} /><span style={{ fontSize:"11px",color:"#6c757d" }}>2023</span></div>
        </div>
        <p style={{ color:"#6c757d",fontSize:"13px",marginTop:"12px",lineHeight:1.7 }}>
          L{"'"}Afrique subsaharienne a réalisé le plus grand bond (+18 ans) mais reste la région
          la plus basse (62 ans). L{"'"}Asie du Sud a gagné 22 ans. L{"'"}écart entre Am. Nord (79 ans)
          et Afrique (62 ans) reste de 17 ans.
        </p>
        <Source text="Banque Mondiale, OMS, DAES/ONU — 2022-2023" />
      </Card>

      <Card>
        <h3 style={{ fontSize:"15px",fontWeight:"700",margin:"0 0 12px",color:"#343a40" }}>📊 Corrélation PIB/habitant ↔ IDH</h3>
        <svg viewBox="0 0 700 350" style={{ width:"100%",height:"auto" }}>
          <line x1="80" y1="20" x2="80" y2="300" stroke="#ced4da" strokeWidth="1" />
          <line x1="80" y1="300" x2="670" y2="300" stroke="#ced4da" strokeWidth="1" />
          {[0.4,0.5,0.6,0.7,0.8,0.9,1.0].map((v,i) => {
            const y = 300 - ((v-0.35)/0.7)*280
            return <g key={i}><line x1="80" y1={y} x2="670" y2={y} stroke="#f1f3f5" /><text x="72" y={y+4} textAnchor="end" fill="#6c757d" fontSize="10" fontFamily="'DM Mono',monospace">{v.toFixed(1)}</text></g>
          })}
          {[500,2000,10000,40000,100000].map((v,i) => {
            const lMin=Math.log(300),lMax=Math.log(130000)
            const x = 80 + ((Math.log(v)-lMin)/(lMax-lMin)) * 590
            return <g key={i}><line x1={x} y1="20" x2={x} y2="300" stroke="#f1f3f5" /><text x={x} y="318" textAnchor="middle" fill="#6c757d" fontSize="9" fontFamily="'DM Mono',monospace">{v>=1000?`${v/1000}k$`:v+"$"}</text></g>
          })}
          <text x="375" y="342" textAnchor="middle" fill="#495057" fontSize="11" fontWeight="600">PIB / habitant ($, échelle logarithmique)</text>
          <text x="18" y="160" textAnchor="middle" fill="#495057" fontSize="11" fontWeight="600" transform="rotate(-90,18,160)">Indice de Développement Humain (IDH)</text>
          {D.gdpVsIdh.map((p,i) => {
            const lMin=Math.log(300),lMax=Math.log(130000)
            const x = 80 + ((Math.log(p.gdp)-lMin)/(lMax-lMin)) * 590
            const y = 300 - ((p.idh-0.35)/0.7)*280
            const t = (p.idh-0.35)/0.65
            return <g key={i}>
              <circle cx={x} cy={y} r="6" fill={`rgb(${Math.round(100-t*80)},${Math.round(80+t*70)},${Math.round(200+t*55)})`} opacity="0.85" stroke="#fff" strokeWidth="1.5" />
              <text x={x} y={y-10} textAnchor="middle" fill="#343a40" fontSize="8" fontWeight="600" fontFamily="'DM Mono',monospace">{p.country}</text>
            </g>
          })}
        </svg>
        <p style={{ color:"#6c757d",fontSize:"13px",marginTop:"12px",lineHeight:1.7 }}>
          La corrélation est forte mais logarithmique : au-delà de ~$30k/hab, le PIB supplémentaire
          apporte peu d{"'"}IDH. <strong>Cuba</strong> (IDH 0.764 pour $9.5k — santé et éducation performants)
          et <strong>Guinée équatoriale</strong> (IDH 0.535 pour $18k — revenus pétroliers mal redistribués)
          illustrent que la richesse brute ne garantit pas le développement humain.
        </p>
        <Source text="PNUD, Banque Mondiale, FMI — données 2023" />
      </Card>

      <Card>
        <h3 style={{ fontSize:"15px",fontWeight:"700",margin:"0 0 12px",color:"#343a40" }}>🧮 Clustering de pays similaires (K-Means, 5 clusters)</h3>
        <p style={{ color:"#6c757d",fontSize:"13px",lineHeight:1.7,margin:"0 0 16px" }}>
          Regroupement des pays en 5 clusters basé sur : IDH, coefficient de Gini, PIB/habitant
          et espérance de vie. Méthode K-Means avec normalisation des données.
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
// CARBON RING — dataviz polaire originale
// ════════════════════════════════════════
function CarbonRing() {
  const cx = 200, cy = 200
  const ppmBase = 308, ppmTop = 432
  const minR = 36, maxR = 162

  const scaleR = (ppm) => minR + ((ppm - ppmBase) / (ppmTop - ppmBase)) * (maxR - minR)
  const scaleAngle = (year) => ((year - 1958) / (2026 - 1958)) * 2 * Math.PI - Math.PI / 2

  const pts = D.co2Data.map(d => {
    const a = scaleAngle(d.year)
    const r = scaleR(d.ppm)
    return { x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r, ppm: d.ppm, year: d.year }
  })

  const linePts = pts.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')
  const areaPts = `${cx},${cy} ${linePts}`

  const refs = [
    { ppm:315, label:"315", color:"#bfdbfe" },
    { ppm:350, label:"350", color:"#3b82f6" },
    { ppm:400, label:"400", color:"#f97316" },
    { ppm:427, label:"427", color:"#ef4444" },
  ]
  const tickYears = [1958,1975,1990,2005,2020]

  return (
    <svg viewBox="0 0 400 420" style={{ width:"100%",maxWidth:"420px",height:"auto",display:"block",margin:"0 auto" }}>
      <defs>
        <radialGradient id="cra" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.03" />
          <stop offset="60%" stopColor="#f97316" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0.25" />
        </radialGradient>
      </defs>

      {refs.map((ref) => {
        const r = scaleR(ref.ppm)
        const la = -Math.PI / 2 - 0.22
        return (
          <g key={ref.ppm}>
            <circle cx={cx} cy={cy} r={r} fill="none" stroke={ref.color}
              strokeWidth={ref.ppm===350||ref.ppm===400?1.5:1}
              strokeDasharray={ref.ppm===315?"none":"6,4"} opacity="0.65" />
            <text x={cx + Math.cos(la)*r} y={cy + Math.sin(la)*r - 4}
              textAnchor="middle" fill={ref.color} fontSize="8"
              fontFamily="'DM Mono',monospace" fontWeight="700">{ref.label} ppm</text>
          </g>
        )
      })}

      {tickYears.map(yr => {
        const a = scaleAngle(yr)
        return (
          <g key={yr}>
            <line x1={cx + Math.cos(a)*(minR-6)} y1={cy + Math.sin(a)*(minR-6)}
                  x2={cx + Math.cos(a)*(maxR+10)} y2={cy + Math.sin(a)*(maxR+10)}
                  stroke="#e9ecef" strokeWidth="1" />
            <text x={cx + Math.cos(a)*(maxR+22)} y={cy + Math.sin(a)*(maxR+22) + 4}
                  textAnchor="middle" fill="#868e96" fontSize="9" fontFamily="'DM Mono',monospace">{yr}</text>
          </g>
        )
      })}

      <polygon points={areaPts} fill="url(#cra)" />
      <polyline points={linePts} fill="none" stroke="#ef4444" strokeWidth="2.5"
        strokeLinecap="round" strokeLinejoin="round" />

      {pts.map((p, i) => {
        const t = i / (pts.length - 1)
        return (
          <circle key={i} cx={p.x} cy={p.y}
            r={i===pts.length-1?5.5:3}
            fill={`rgb(${Math.round(249-t*13)},${Math.round(115-t*75)},22)`}
            stroke={i===pts.length-1?"#fff":"none"} strokeWidth="1.5" />
        )
      })}

      <circle cx={pts[pts.length-1].x} cy={pts[pts.length-1].y} r="12" fill="#ef4444" opacity="0.15">
        <animate attributeName="r" from="5" to="18" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.22" to="0" dur="2.5s" repeatCount="indefinite" />
      </circle>

      <text x={cx} y={cy-10} textAnchor="middle" fill="#343a40" fontSize="15"
        fontFamily="'DM Mono',monospace" fontWeight="700">CO₂</text>
      <text x={cx} y={cy+9} textAnchor="middle" fill="#868e96" fontSize="10"
        fontFamily="'DM Mono',monospace">1958 → 2025</text>

      <text x={cx} y={396} textAnchor="middle" fill="#adb5bd" fontSize="9" fontFamily="'DM Mono',monospace">
        Rayon = concentration CO₂ · Angle = année
      </text>
    </svg>
  )
}

// ════════════════════════════════════════
// SUJET 3 — DATAVIZ ORIGINAUX
// ════════════════════════════════════════
function Sujet3() {
  return (
    <div>
      <SectionTitle number="03" title="Dataviz originaux" subtitle="Trois visualisations innovantes — lecture, technique et interprétation" />

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
            Créées par le climatologue Ed Hawkins (Université de Reading), les <strong style={{ color:"#ef4444" }}>Warming Stripes</strong> éliminent
            tout axe, chiffre et légende pour ne garder que l{"'"}essentiel : la couleur. Cette radicalité
            minimaliste rend le message immédiatement compréhensible sans connaissance scientifique préalable.
            Elles sont devenues un symbole mondial du changement climatique, portées sur des vêtements,
            bâtiments et affiches de manifestations.
          </p>
        </div>
        <Source text="showyourstripes.info — Ed Hawkins, University of Reading" />
      </Card>

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
            l{"'"}accélération du réchauffement de manière viscérale. Contrairement à un graphique linéaire,
            la spirale permet de voir l{"'"}expansion progressive — les boucles récentes s{"'"}éloignent de plus
            en plus du centre. L{"'"}animation viralisée a été vue des millions de fois et a profondément
            marqué la communication scientifique.
          </p>
        </div>
        <Source text="NASA Scientific Visualization Studio / Ed Hawkins" />
      </Card>

      <Card>
        <h3 style={{ fontSize:"15px",fontWeight:"700",margin:"0 0 8px",color:"#343a40" }}>🔴 Dataviz 3 — Carbon Ring (création originale)</h3>
        <p style={{ fontSize:"13px",color:"#868e96",marginBottom:"16px" }}>
          Les données CO₂ de la Courbe de Keeling encodées en coordonnées polaires :
          l{"'"}angle représente l{"'"}année (1958 en haut, sens horaire), le rayon la concentration en ppm.
          La courbe spirale vers l{"'"}extérieur sans jamais revenir en arrière.
        </p>
        <CarbonRing />
        <div style={{ display:"flex",flexWrap:"wrap",gap:"10px",justifyContent:"center",marginTop:"14px" }}>
          {[
            {c:"#bfdbfe",l:"315 ppm — départ 1958"},
            {c:"#3b82f6",l:"350 ppm — seuil « sûr »"},
            {c:"#f97316",l:"400 ppm — franchi 2013"},
            {c:"#ef4444",l:"427 ppm — niveau 2025"},
          ].map((lg,i) => (
            <div key={i} style={{ display:"flex",alignItems:"center",gap:"5px" }}>
              <div style={{ width:"10px",height:"10px",borderRadius:"50%",background:lg.c,flexShrink:0 }} />
              <span style={{ fontSize:"11px",color:"#6c757d",fontFamily:"'DM Mono',monospace" }}>{lg.l}</span>
            </div>
          ))}
        </div>
        <div style={{ background:"#f1f3f5",borderRadius:"10px",padding:"16px",marginTop:"16px" }}>
          <h4 style={{ fontSize:"13px",fontWeight:"700",color:"#495057",margin:"0 0 8px" }}>Pourquoi c{"'"}est original ?</h4>
          <p style={{ fontSize:"13px",color:"#868e96",margin:0,lineHeight:1.6 }}>
            Ce <strong style={{ color:"#ef4444" }}>Carbon Ring</strong> reprend exactement les données de la Courbe de Keeling
            mais les encode en <em>coordonnées polaires</em> — un type de représentation quasi-absent des rapports
            climatiques standards. Le résultat est frappant : là où la courbe linéaire montre une hausse,
            le graphe circulaire montre une <em>spirale qui s{"'"}éloigne du centre</em> sans jamais se refermer.
            Cette ouverture permanente traduit visuellement l{"'"}irréversibilité : le CO₂ n{"'"}a jamais
            redescendu depuis 1958. Le rayon croissant est une métaphore spatiale de l{"'"}accumulation continue.
          </p>
        </div>
        <Source text="Données NOAA GML / Scripps — Encodage polaire original" />
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
      <header style={{ padding:"20px 24px",borderBottom:"1px solid #e9ecef",background:"linear-gradient(180deg,rgba(239,68,68,0.03) 0%,transparent 100%)",display:"flex",alignItems:"center",gap:"16px" }}>
        <img src={img("/epsi-logo.png")} alt="EPSI" style={{ height:"36px",flexShrink:0 }} />
        <div>
          <h1 style={{ fontSize:"18px",fontWeight:"800",margin:0,letterSpacing:"-0.02em" }}>Atelier datavisualisation Arras 2026</h1>
          <p style={{ fontSize:"11px",color:"#adb5bd",margin:0,fontFamily:"'DM Mono',monospace" }}>Hodari Bigwi · Téo Debay — EPSI Arras 2025</p>
        </div>
      </header>

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

      <main style={{ maxWidth:"1100px",margin:"0 auto",padding:"0 24px 80px" }}>
        {tab === "home" && <HomePage setTab={setTab} />}
        {tab === "s1" && <Sujet1 />}
        {tab === "s2" && <Sujet2 />}
        {tab === "s3" && <Sujet3 />}
      </main>

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
