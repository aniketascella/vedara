export async function getBlogs() {
  const res = await fetch(
    `${process.env.CMS_URL}/api/blogs?populate=coverImage&sort=publishedAt:desc`,
    { cache: "no-store" }
  );

  const { data } = await res.json();

  return data.map((item) => ({
    id: item.id,
    title: item.attributes.title,
    excerpt: item.attributes.excerpt,
    slug: item.attributes.slug,
    coverImage: item.attributes.coverImage.data.attributes.url,
    publishedAt: item.attributes.publishedAt,
    readTime: item.attributes.readTime,
    featured: item.attributes.featured,
  }));
}