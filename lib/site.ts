/**
 * URL canonique du site (SEO, Open Graph, sitemap).
 * En production : définir NEXT_PUBLIC_SITE_URL (ex. https://digitech.example.com)
 */
export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}
