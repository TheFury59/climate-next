// SUJET 1 — Réchauffement Climatique
export const tempAnomalyData = [
  {year:1850,anomaly:-0.37},{year:1860,anomaly:-0.33},{year:1870,anomaly:-0.29},{year:1880,anomaly:-0.16},
  {year:1890,anomaly:-0.28},{year:1900,anomaly:-0.13},{year:1910,anomaly:-0.36},{year:1920,anomaly:-0.21},
  {year:1930,anomaly:-0.08},{year:1940,anomaly:0.06},{year:1950,anomaly:-0.04},{year:1960,anomaly:0.02},
  {year:1970,anomaly:0.00},{year:1980,anomaly:0.17},{year:1990,anomaly:0.38},{year:1998,anomaly:0.61},
  {year:2000,anomaly:0.39},{year:2005,anomaly:0.65},{year:2010,anomaly:0.66},{year:2015,anomaly:0.87},
  {year:2016,anomaly:0.99},{year:2018,anomaly:0.82},{year:2020,anomaly:1.01},{year:2022,anomaly:0.89},
  {year:2023,anomaly:1.17},{year:2024,anomaly:1.28},{year:2025,anomaly:1.19}
]
export const co2Data = [
  {year:1958,ppm:315},{year:1965,ppm:320},{year:1970,ppm:326},{year:1975,ppm:331},{year:1980,ppm:339},
  {year:1985,ppm:346},{year:1990,ppm:354},{year:1995,ppm:361},{year:2000,ppm:369},{year:2005,ppm:380},
  {year:2010,ppm:390},{year:2015,ppm:401},{year:2018,ppm:409},{year:2020,ppm:414},{year:2022,ppm:419},
  {year:2023,ppm:421},{year:2024,ppm:425},{year:2025,ppm:427}
]
export const billionDollarDisasters = [
  {decade:"1980s",avg:3.3,cost:22.6},{decade:"1990s",avg:5.5,cost:32.0},
  {decade:"2000s",avg:6.7,cost:62.0},{decade:"2010s",avg:12.8,cost:102.0},
  {decade:"2020-24",avg:19.0,cost:153.2}
]
export const continentWarming = [
    {name:"Arctique",   warming:3.8, color:"#ef4444"},
    {name:"Europe",     warming:2.3, color:"#f97316"},
    {name:"Asie",       warming:1.8, color:"#fb923c"},
    {name:"Amérique N.",warming:1.7, color:"#fbbf24"},
    {name:"Afrique",    warming:1.4, color:"#fcd34d"},
    {name:"Amérique S.",warming:1.2, color:"#fde68a"},
    {name:"Océanie",    warming:1.1, color:"#fef3c7"}
]
export const scenariosIPCC = [
    {name:"SSP1-1.9",temp2100:1.4,label:"Très bas",     color:"#22c55e"},
    {name:"SSP1-2.6",temp2100:1.8,label:"Bas",          color:"#84cc16"},
    {name:"SSP2-4.5",temp2100:2.7,label:"Intermédiaire",color:"#eab308"},
    {name:"SSP3-7.0",temp2100:3.6,label:"Élevé",        color:"#f97316"},
    {name:"SSP5-8.5",temp2100:4.4,label:"Très élevé",   color:"#ef4444"}
]
export const tippingPoints = [
  {name:"Glace Arctique\n(été)",threshold:1.5,icon:"❄️"},{name:"Coraux\ntropicaux",threshold:1.5,icon:"🪸"},
  {name:"Groenland",threshold:1.5,icon:"🏔️"},{name:"Permafrost",threshold:2.0,icon:"🧊"},
  {name:"Forêt\namazonienne",threshold:2.5,icon:"🌳"},{name:"Antarctique\nOuest",threshold:2.5,icon:"🌊"},
  {name:"Circulation\natlantique",threshold:3.0,icon:"🌀"}
]
export const wmoStats2024 = [
  {n:"605",l:"événements extrêmes",e:"⚡"},{n:"148",l:"classés 'sans précédent'",e:"🆘"},
  {n:"16 753",l:"décès directs",e:"💀"},{n:"167M",l:"personnes affectées",e:"👥"},
  {n:"$242 Mrd",l:"pertes économiques",e:"💰"},{n:"824 500",l:"déplacés climatiques",e:"🏚️"}
]

// SUJET 2 — Inégalités Mondiales
export const idhEvolution = [
  {year:1990,world:0.601,high:0.796,low:0.345},
  {year:2000,world:0.645,high:0.839,low:0.378},
  {year:2010,world:0.698,high:0.878,low:0.443},
  {year:2015,world:0.724,high:0.895,low:0.473},
  {year:2020,world:0.736,high:0.901,low:0.483},
  {year:2023,world:0.756,high:0.912,low:0.494}
]
export const topIDH = [
  {country:"Islande",idh:0.966,flag:"🇮🇸"},{country:"Norvège",idh:0.961,flag:"🇳🇴"},
  {country:"Suisse",idh:0.956,flag:"🇨🇭"},{country:"Danemark",idh:0.952,flag:"🇩🇰"},
  {country:"Allemagne",idh:0.950,flag:"🇩🇪"}
]
export const bottomIDH = [
  {country:"Soudan du Sud",idh:0.381,flag:"🇸🇸"},{country:"Somalie",idh:0.380,flag:"🇸🇴"},
  {country:"Centrafrique",idh:0.387,flag:"🇨🇫"},{country:"Tchad",idh:0.394,flag:"🇹🇩"},
  {country:"Niger",idh:0.400,flag:"🇳🇪"}
]
export const giniByCountry = [
  {country:"Afrique du Sud",gini:63.0},{country:"Colombie",gini:54.8},
  {country:"Brésil",gini:52.9},{country:"Mexique",gini:45.4},
  {country:"États-Unis",gini:39.8},{country:"Chine",gini:37.1},
  {country:"Inde",gini:35.7},{country:"Royaume-Uni",gini:32.6},
  {country:"France",gini:31.5},{country:"Allemagne",gini:29.7},
  {country:"Japon",gini:29.6},{country:"Suède",gini:27.6},
  {country:"Norvège",gini:26.8},{country:"Slovaquie",gini:22.0}
]
export const lifeExpectancy = [
  {region:"Afrique sub.",y1970:44,y2023:62},{region:"Asie du Sud",y1970:48,y2023:70},
  {region:"Am. Latine",y1970:60,y2023:74},{region:"Asie Est",y1970:59,y2023:76},
  {region:"Europe",y1970:68,y2023:78},{region:"Am. Nord",y1970:71,y2023:79}
]
export const gdpVsIdh = [
  {country:"Qatar",gdp:88000,idh:0.875},{country:"Norvège",gdp:82000,idh:0.961},
  {country:"États-Unis",gdp:76000,idh:0.927},{country:"Allemagne",gdp:54000,idh:0.950},
  {country:"France",gdp:45000,idh:0.910},{country:"Chine",gdp:12500,idh:0.788},
  {country:"Brésil",gdp:10000,idh:0.760},{country:"Cuba",gdp:9500,idh:0.764},
  {country:"Inde",gdp:2500,idh:0.644},{country:"Guinée éq.",gdp:18000,idh:0.535},
  {country:"Niger",gdp:560,idh:0.400}
]
export const clustersPays = [
    {name:"Cluster A — Très développés", color:"#38bdf8",pays:"Norvège, Suisse, Islande, Danemark",  traits:"IDH > 0.94, Gini < 30, Esp. vie > 82 ans"},
    {name:"Cluster B — Développés",      color:"#34d399",pays:"France, UK, Japon, Corée du Sud",     traits:"IDH 0.85-0.94, Gini 28-35, Esp. vie 78-83 ans"},
    {name:"Cluster C — Émergents",       color:"#fbbf24",pays:"Chine, Brésil, Mexique, Turquie",     traits:"IDH 0.70-0.85, Gini 35-55, Forte croissance"},
    {name:"Cluster D — En développement",color:"#f97316",pays:"Inde, Bangladesh, Kenya, Ghana",      traits:"IDH 0.55-0.70, Progrès rapides"},
    {name:"Cluster E — Vulnérables",     color:"#ef4444",pays:"Niger, Tchad, Somalie, Soudan du Sud",traits:"IDH < 0.45, Esp. vie < 60 ans"}
]
