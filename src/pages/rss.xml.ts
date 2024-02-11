import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import MarkdownIt from "markdown-it";
import sanitizeHTML from "sanitize-html";

const parser = new MarkdownIt();

export async function GET(context: APIContext) {
  const posts = await getCollection("posts");
  return rss({
    title: "De kern met Jordi",
    description:
      "Coachen op een unieke manier zonder poespas daar gaat het om bij De kern met Jordi. De naam zegt het al. Samen gaan wij naar de kern. Alleen de waarheid en niets anders. Samen voor jou. Coachen op onze manier",
    site: context.site?.toString() ?? "",
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.date),
      description: post.data.description,
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
      link: `/blog/${post.slug}/`,
      content: sanitizeHTML(parser.render(post.body)),
      image: post.data.image,
    })),
  });
}
