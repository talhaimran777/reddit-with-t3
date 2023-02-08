import React from "react";
import { type NextPage } from "next";
import Head from "next/head";

const CreatePost: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Post</title>
        <meta name="description" content="Showing all the blog posts!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mt-16">Creating Post!</div>
    </>
  );
};

export default CreatePost;
