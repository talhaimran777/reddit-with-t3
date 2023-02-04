import { type NextPage } from "next";
import Head from "next/head";
import { api } from "../../utils/api";

const Posts: NextPage = () => {
  const posts = api.post.getPosts.useQuery();

  return (
    <>
      <Head>
        <title>Blog Posts</title>
        <meta name="description" content="Showing all the blog posts!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <h1>Blog Posts</h1>
        {posts.data && posts.data.map(post => <p>{post.body}</p>)}
      </main>
    </>
  );
};

export default Posts;
