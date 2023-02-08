const Post = () => {
  const PostHeader = () => {
    return (
      <div className="mb-3 flex">
        <div className="h-5 w-5 rounded-full bg-gray-200">&nbsp;</div>
        <p className="ml-2 text-xs font-bold">u/talhaimran</p>
        <p className="ml-2 text-xs text-gray-600">15 hours ago</p>
      </div>
    );
  };

  const PostBody = () => {
    return (
      <div className="mb-3">
        <h1 className="text-md mb-1 font-semibold">
          What does the python prompt mean?
        </h1>
        <p className="text-justify text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          commodi aut aliquam tempore assumenda sapiente explicabo enim, et id
          quae atque facere rerum, similique beatae alias vel! Sequi, ducimus
          dolore!
        </p>
      </div>
    );
  };

  const PostFooter = () => {
    return (
      <div className="flex">
        <div className="text-bold rounded-sm p-2 text-sm text-gray-700 hover:cursor-pointer hover:bg-gray-200">
          5 Comments
        </div>
      </div>
    );
  };

  const UpVoteIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10zM15 12h-1v8h-4v-8H6.081L12 4.601L17.919 12H15z"
      />
    </svg>
  );

  const DownVoteIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M20.901 10.566A1.001 1.001 0 0 0 20 10h-4V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H4a1.001 1.001 0 0 0-.781 1.625l8 10a1 1 0 0 0 1.562 0l8-10c.24-.301.286-.712.12-1.059zM12 19.399L6.081 12H10V4h4v8h3.919L12 19.399z"
      />
    </svg>
  );

  return (
    <div className="border-1 my-1 flex justify-between border border-gray-400 bg-white">
      <div className="flex flex-col items-center bg-gray-100 p-2">
        <div className="mb-1 cursor-pointer text-gray-400 hover:text-red-400">
          {UpVoteIcon}
        </div>
        <span className="text-xs">85</span>
        <div className="mt-1 cursor-pointer text-gray-400 hover:text-green-400">
          {DownVoteIcon}
        </div>
      </div>
      <div className="flex-1 p-2">
        <PostHeader />
        <PostBody />
        <PostFooter />
      </div>
    </div>
  );
};

const Posts = () => {
  return (
    <>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </>
  );
};
export default Posts;
