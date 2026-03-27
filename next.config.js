/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',          // génère un dossier /out statique
  trailingSlash: true,       // nécessaire pour GitHub Pages
  images: { unoptimized: true }, // pas de serveur d'images
  // basePath: '/NOM_DU_REPO',  // ← décommente et remplace par ton nom de repo
}

module.exports = nextConfig
