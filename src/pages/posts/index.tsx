import React from "react";
import { type NextPage } from "next";
import Head from "next/head";
import { api } from "../../utils/api";

interface BlogPostProps {
  title: string;
  body: string;
}

interface Post {
  title: string;
  body: string;
}

const Posts: NextPage = () => {
  const { isLoading, data } = api.post.getPosts.useQuery();

  const BlogPost: React.FC<BlogPostProps> = ({ title, body }) => {
    return (
      <div className="my-10 max-w-sm rounded-md border border-blue-300 p-10 shadow-lg shadow-slate-100">
        <p className="mb-2 text-xl font-bold">{title}</p>
        <p className="text-sm">{body}</p>
      </div>
    );
  };

  const PostSkeleton: React.FC = () => {
    return (
      <React.Fragment>
        <div className="my-10 max-w-sm rounded-md border border-blue-300 p-10 shadow-lg shadow-slate-100">
          <div className="flex animate-pulse space-x-4">
            <div className="flex-1 space-y-6 py-1">
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1 h-2 rounded bg-slate-700"></div>
                </div>
                <div className="h-2 rounded bg-slate-700"></div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };

  const Skeletons: React.FC = () => {
    return isLoading ? (
      <React.Fragment>
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
      </React.Fragment>
    ) : null;
  };

  const BlogPosts: React.FC = () => {
    return (
      data &&
      data.map((post: Post) => <BlogPost title={post.title} body={post.body} />)
    );
  };

  return (
    <>
      <Head>
        <title>Blog Posts</title>
        <meta name="description" content="Showing all the blog posts!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto">
        <h1 className="text-4xl">My Latest Posts</h1>
        <Skeletons />
        <BlogPosts />
      </main>
    </>
  );
};

export default Posts;
