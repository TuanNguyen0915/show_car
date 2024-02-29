"use client";
import { IButton } from "@/types";
import { Button } from "../ui/button";
import Image from "next/image";

const CustomButton = ({
  title,
  handleClick,
  rightIcon,
}: IButton) => {
  return (
    <Button
      className="flexCenter hover:bg-myPrimary-300 rounded-2xl bg-myPrimary-100 p-6 text-base duration-500 xl:text-xl"
      onClick={handleClick}
    >
      <p className="flex-1 text-center">{title}</p>
      {rightIcon && (
        <Image src={rightIcon} width={35} height={35} alt="rightIcon" />
      )}
    </Button>
  );
};

export default CustomButton;
