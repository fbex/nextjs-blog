import { Feed } from "feed";
import { getAllPosts } from "@/app/notes/get-posts";
import * as fs from "fs";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL as string

export default async function generateRssFeed() {
  const allPosts = await getAllPosts();

  const feedOptions = {
    title: 'fbex.io | RSS Feed',
    description: 'Stuff fbex.io writes about',
    id: SITE_URL,
    link: SITE_URL,
    // image: `${site_url}/logo.png`,
    // favicon: `${site_url}/favicon.png`,
    copyright: `All rights reserved ${new Date().getFullYear()}, fbex.io`,
    generator: 'Feed for Node.js',
    feedLinks: {
      rss2: `${SITE_URL}/rss.xml`,
    },
  };

  const feed = new Feed(feedOptions);

  allPosts.forEach((post) => {
    feed.addItem({
      title: post.metadata.title!.toString(),
      id: `${SITE_URL}/app/notes/${post.slug}`,
      link: `${SITE_URL}/app/notes/${post.slug}`,
      description: post.metadata.description!,
      date: new Date(post.metadata.date!),
    });
  });

  fs.writeFileSync('./public/rss.xml', feed.rss2());
}

generateRssFeed();
