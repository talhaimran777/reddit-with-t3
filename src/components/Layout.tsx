import PostInitiator from "./PostInitiator";
import Posts from "./Posts";

const Layout = () => {
  return (
    <div className="mx-auto mt-16 mb-10 flex max-w-5xl items-start justify-between px-2">
      <div className="flex flex-1 flex-col">
        <div className="mb-3 rounded-sm border border-gray-400 bg-white">
          <PostInitiator />
        </div>
        <Posts />
      </div>
      <div className="ml-8 hidden h-80 w-80 bg-white lg:block">&nbsp;</div>
    </div>
  );
};

export default Layout;
