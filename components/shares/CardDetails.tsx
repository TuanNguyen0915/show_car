import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ICar } from "@/types";
import Image from "next/image";
import { ScrollArea } from "../ui/scroll-area";
import { generateCarImageUrl } from "@/utils";

const CardDetails = ({
  car,
  carURl,
}: {
  car: ICar;
  carURl: {
    href: string;
  };
}) => {
  const car29URL = generateCarImageUrl(car, "29");
  const car33URL = generateCarImageUrl(car, "33");
  const car13URL = generateCarImageUrl(car, "13");

  return (
    <>
      <Dialog modal={true}>
        <DialogTrigger asChild>
          <Button className="flexCenter rounded-2xl bg-myPrimary-100 p-6 text-base duration-500 hover:bg-myPrimary-300 xl:text-xl">
            <p className="flex-1 text-center">View More</p>
            <Image
              src="/right-arrow.svg"
              width={35}
              height={35}
              alt="rightIcon"
            />
          </Button>
        </DialogTrigger>
        <ScrollArea>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>
                <div className="relative h-[150px] w-full bg-blue-600 object-contain xl:h-[200px]">
                  <Image
                    src={carURl?.href}
                    fill
                    alt="car"
                    sizes="(100vw - 768px)"
                    className="object-contain"
                  />
                </div>
                <div className="flexBetween w-full">
                  <div className="relative h-[150px] w-full bg-slate-700 object-contain xl:h-[200px]">
                    <Image
                      src={car29URL.href}
                      fill
                      alt="car"
                      sizes="(100vw - 768px)"
                      className="object-contain"
                    />
                  </div>
                  <div className="relative h-[150px] w-full bg-slate-700 object-contain xl:h-[200px]">
                    <Image
                      src={car33URL.href}
                      fill
                      alt="car"
                      sizes="(100vw - 768px)"
                      className="object-contain"
                    />
                  </div>
                  <div className="relative h-[150px] w-full bg-slate-700 object-contain xl:h-[200px]">
                    <Image
                      src={car13URL.href}
                      fill
                      alt="car"
                      sizes="(100vw - 768px)"
                      className="object-contain"
                    />
                  </div>
                </div>
              </DialogTitle>
              <DialogDescription>
                <span className="text-lg font-semibold capitalize text-white lg:text-xl">
                  {car.make} {car.model}
                </span>
              </DialogDescription>
              {Object.entries(car).map(([key, value]) => (
                <DialogDescription className="flexBetween p-4" key={key}>
                  <span className="flex-1 text-left text-sm  capitalize text-gray-300 lg:text-base">
                    {key.split("_").join(" ")}
                  </span>
                  <span className="text-right  text-sm font-bold text-white lg:text-base">
                    {value.toString()}
                  </span>
                </DialogDescription>
              ))}
            </DialogHeader>
          </DialogContent>
        </ScrollArea>
      </Dialog>
    </>
  );
};

export default CardDetails;
