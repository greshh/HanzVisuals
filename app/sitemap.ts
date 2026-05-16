import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://hanzvisuals.com',
      lastModified: new Date(),
    },
    {
      url: 'https://hanzvisuals.com/projects',
      lastModified: new Date(),
    },
    {
      url: 'https://hanzvisuals.com/projects/college-sport-micd-up-volleyball',
      lastModified: new Date(),
    },
    {
      url: 'https://hanzvisuals.com/projects/college-sport-senior-premier-basketball-2026',
      lastModified: new Date(),
    },
    {
      url: 'https://hanzvisuals.com/projects/roller-blacks',
      lastModified: new Date(),
    },
    {
      url: 'https://hanzvisuals.com/projects/unim8s-semester-2-2025',
      lastModified: new Date(),
    },
  ]
}