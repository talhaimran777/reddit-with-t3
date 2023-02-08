import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white px-5 shadow-sm">
      <div className="flex w-fit items-center justify-between">
        <Image src="/redditFace.svg" alt="Reddit Face" height={30} width={30} />
        <Image src="/redditText.svg" alt="Reddit Text" height={72} width={72} />
      </div>
    </nav>
  );
};
export default Navbar;
