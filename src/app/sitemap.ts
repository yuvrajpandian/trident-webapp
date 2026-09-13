import type { MetadataRoute } from "next";
import { site, spaces } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/about/",
    "/services/",
    "/spaces/",
    "/why-dubai/",
    "/india-founders/",
    "/free-zone-mainland/",
    "/blog/",
    "/contact/",
  ];
  const spaceRoutes = spaces.map((s) => `/spaces/${s.slug}/`);

  return [...routes, ...spaceRoutes].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path.startsWith("/spaces/") && path !== "/spaces/" ? 0.7 : 0.8,
  }));
}
