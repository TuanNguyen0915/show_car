"use client";

import { IShowMore } from "@/types";
// import { updateSearchParams } from "@/utils";
import { useRouter } from "next/navigation";

const ShowMore = ({ pageNumber, isNext, setLimit }: IShowMore) => {
  const router = useRouter();
  const newLimit = (pageNumber + 1) * 10;
  const handleNavigation = () => {
    setLimit(newLimit)
  };

  return (
    <div className="flexCenter w-full">
      {!isNext && (
        <button
          onClick={handleNavigation}
          className="flexCenter rounded-3xl bg-myPrimary-100 px-6 py-4 text-base duration-500 hover:bg-myPrimary-300 xl:text-xl"
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default ShowMore;
