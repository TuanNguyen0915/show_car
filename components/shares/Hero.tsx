import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <div className="mt-40 flex flex-col justify-center gap-20 xl:flex-row">
      <div className="flex w-full flex-col gap-5">
        <h1 className="text-4xl max-xl:text-center xl:text-6xl">
          Find, book, or rent a car - quickly and easily!
        </h1>
        <p className="text-lg text-gray-400 max-xl:text-center xl:text-3xl">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <div className="flex w-full items-center max-xl:justify-center">
          <CustomButton title="Explore Cars" />
        </div>
      </div>
      <div className="relative h-[400px] w-full lg:h-[700px] md:h-[500px]">
        <div className="absolute w-full">
          <Image
            src="/hero.png"
            width={1000}
            height={1000}
            alt="logo"
            className="relative z-20 object-contain"
          />
        </div>
        <div className="absolute left-20">
          <Image
            src="/hero-bg.png"
            width={1000}
            height={1000}
            alt="bg"
            className="left-0 top-0 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
