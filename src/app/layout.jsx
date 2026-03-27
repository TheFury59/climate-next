import './globals.css'

export const metadata = {
  title: 'Atelier datavisualisation Arras 2026',
  description: 'Dashboard interactif documentant le réchauffement climatique, Inégalités mondiales & développement humain, Dataviz originaux. Sources : NASA GISTEMP · NOAA GML · GIEC AR6 · PNUD · Banque Mondiale · OCDE · Climate Central.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
