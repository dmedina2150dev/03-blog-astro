import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ params, request, site }) => {

  const blogPosts = await getCollection('blog');

  return rss({
    // stylesheet: '/styles/rss.xsl',
    
    // `<title>` campo en el xml generado
    title: "DMedina's Blog",
    // `<description>` campo en el xml generado
    description: 'Guía de un humilde astronauta a las estrellas - Mientras aprendemos',
    // Usa el "site" desde el contexto del endpoint
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: site ?? '',
    // Array de `<item>`s en el xml generado
    // Consulta la sección "Generando `items`" para ejemplos utilizando colecciones de contenido y glob imports
    items: blogPosts.map(({ data, slug }) => ({
      title: data.title,
      pubDate: data.date,
      description: data.description,
      link: `posts/${slug}`
    })),
    // (opcional) inyecta xml personalizado
    customData: `<language>es</language>`,
  });
}