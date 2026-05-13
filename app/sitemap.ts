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
      url: 'https://hanzvisuals.com/micd-up',
      lastModified: new Date(),
    },
    {
      url: 'https://hanzvisuals.com/senior-prems-26',
      lastModified: new Date(),
    },{
      url: 'https://hanzvisuals.com/unim8s-semester-2-25',
      lastModified: new Date(),
    },
  ]
}