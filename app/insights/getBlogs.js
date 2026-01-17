export async function getBlogs() {
  const res = await fetch(
    `https://blogs.vedaracollective.ca/wp-json/wp/v2/posts`,
    { cache: "no-store" }
  );

  const data = await res.json();

  return data.map((item) => ({
    id: item.id,
    title: item.title.rendered,
    excerpt: item.excerpt.rendered,
    slug: item.slug,
    content: item.content.rendered,
    // coverImage: item.attributes.coverImage.data.attributes.url,
    // publishedAt: item.attributes.publishedAt,
    // readTime: item.attributes.readTime,
    // featured: item.attributes.featured,
  }));
}