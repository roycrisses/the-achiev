import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://theachievers.com.np";
  const routes = ["", "/courses", "/tests/free", "/syllabus", "/teachers", "/about", "/counselling", "/demo", "/contact", "/faqs", "/login", "/register", "/privacy", "/terms", "/cookies"];
  return routes.map((r) => ({ url: `${base}${r || "/"}`, lastModified: new Date(), changeFrequency: "weekly", priority: r === "" ? 1 : 0.7 }));
}
