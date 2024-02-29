"use client";
import { ICar } from "@/types";
import Image from "next/image";
import CardDetails from "./CardDetails";
import { generateCarImageUrl } from "@/utils";
interface CarCardProps {
  car: ICar;
}

const CarCard = ({ car }: CarCardProps) => {
  const transmissionType = car.transmission === "a" ? "Automatic" : "Manual";
  const carURl = generateCarImageUrl(car);
  return (
    <>
      <div className="group flex w-full flex-col gap-4 rounded-lg border border-indigo-950 bg-indigo-950/20 p-4 text-white shadow-md backdrop-blur-lg duration-500 hover:border-slate-700 lg:max-w-[400px]">
        <h2 className="text-2xl font-bold capitalize">
          {car.model} <span className="uppercase">{car.drive}</span>
        </h2>
        <p className="text-lg capitalize text-indigo-300 font-semibold group-hover:text-orange-400 duration-500">{car.class}</p>
        <div className="relative my-3 h-40 w-full object-contain">
          {carURl && (
            <Image
              src={carURl?.href}
              fill
              alt="car"
              sizes="(100vw - 768px)"
              className="object-contain duration-500 group-hover:scale-125"
            />
          )}
        </div>
        <div className="flexBetween">
          <div className="flexCenter flex-col gap-2">
            <Image
              src={"/steering-wheel.svg"}
              width={25}
              height={25}
              alt="transmission"
            />
            <p>{transmissionType}</p>
          </div>
          <div className="flexCenter flex-col gap-2">
            <Image
              src={"/tire.svg"}
              alt="transmission"
              width={25}
              height={25}
              className="object-contain"
            />
            <p className="uppercase">{car.drive}</p>
          </div>
          <div className="flexCenter g flex-col p-2">
            <Image
              src={"/gas.svg"}
              width={25}
              height={25}
              alt="gas"
              className="object-contain"
            />
            <p>{car.combination_mpg}</p>
          </div>
        </div>
        <CardDetails car={car} carURl={carURl}/>
      </div>
    </>
  );
};

export default CarCard;
