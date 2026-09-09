import { getCollection, type CollectionEntry } from 'astro:content';

const isProd = import.meta.env.PROD;

/** All publishable posts, newest first. Drafts are hidden in production only. */
export async function getPosts(): Promise<CollectionEntry<'blog'>[]> {
  const posts = await getCollection('blog', ({ data }) => !isProd || !data.draft);
  return posts.sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
  );
}

/** Map of tag -> posts, plus a sorted list of [tag, count]. */
export async function getTags() {
  const posts = await getPosts();
  const map = new Map<string, CollectionEntry<'blog'>[]>();
  for (const post of posts) {
    for (const tag of post.data.tags) {
      map.set(tag, [...(map.get(tag) ?? []), post]);
    }
  }
  const counts = [...map.entries()]
    .map(([tag, list]) => [tag, list.length] as const)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  return { map, counts };
}
