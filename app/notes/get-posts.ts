import { Post } from "@/app/notes/Post";

async function importAll(requireContext: __WebpackModuleApi.RequireContext): Promise<Post[]> {
  return Promise.all(
    requireContext.keys().map(async (fileName: string) => {
      const component = requireContext(fileName);
      const slug = fileName.substring(2).replace(/\/page\.mdx$/, "");

      return {
        slug,
        metadata: component?.metadata,
        component: component?.default,
        readingTime: component?.metadata_readingTime,
      } satisfies Post;
    })
  );
}

export async function getAllPosts(): Promise<Post[]> {
  return importAll(
    require.context("./(posts)", true, /^\.\/[^\/]+\/page\.mdx$/)
  );
}
