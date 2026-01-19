import he from "he";
import { htmlToText } from "html-to-text";

export async function getBlogs() {
  const res = await fetch(
    `https://blogs.vedaracollective.ca/wp-json/wp/v2/posts?_embed`,
    { cache: "no-store" }
  );


  const data = await res.json();

  return data.map((item) => ({
    id: item.id,
    title: he.decode(item.title.rendered),
    slug: item.slug,
    coverImage: item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
    publishedAt: item.date,
  }));
}