const PostInitiator = () => {
  return (
    <div className="flex rounded-sm border border-gray-100 p-2">
      <div className="h-10 w-10 rounded-full bg-gray-200">&nbsp;</div>
      <input
        name="input"
        placeholder="Create Post"
        className="ml-2 flex-1 rounded-md
        bg-gray-100 py-2 px-4 text-sm hover:outline hover:outline-1
        hover:outline-blue-600
        focus:outline-none"
      />
    </div>
  );
};
export default PostInitiator;
