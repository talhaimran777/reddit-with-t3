import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full bg-white px-5">
      <div className="flex items-center justify-between w-fit">
        <Image
          src="/redditFace.svg"
          alt="Reddit Face"
          height={33}
          width={33}
        />
        <Image
          src="/redditText.svg"
          alt="Reddit Text"
          height={76}
          width={76}
        />
      </div>
    </nav>
  );
};
export default Navbar;
