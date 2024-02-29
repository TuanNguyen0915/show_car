import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

const NavBar = () => {
  return (
    <header className="flexBetween w-full px-4 py-4 border-b-2 border-mySecondary-100 xl:py-6 rounded-b-2xl">
      <Link href={"/"}>
        <h1 className="cursor-pointer text-xl text-white duration-500 hover:text-myPrimary-100 md:text-3xl xl:text-4xl">
          CarHub
        </h1>
      </Link>
      <CustomButton title="Sign In" />
    </header>
  );
};
export default NavBar;
