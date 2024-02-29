"use client";
import SearchManufacturer from "./SearchManufacturer";
import { useRouter } from "next/navigation";
import CustomFilter from "./CustomFilter";
import { fuels, yearsOfProduction } from "@/constants";

interface ISearchBar {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
  model: string;
  setModel: (model: string) => void;
  year: string;
  setYear: (year: string) => void;
  fuel: string;
  setFuel: (fuel: string) => void;
}
const SearchBar = ({
  manufacturer,
  setManufacturer,
  model,
  setModel,
  year,
  setYear,
  fuel,
  setFuel,
}:ISearchBar ) => {
  // const router = useRouter();
  // const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (manufacturer === "" || model === "") {
  //     return alert("Please fill  in the search bar");
  //   }
  //   handleSearchParams(
  //     model.toLowerCase(),
  //     manufacturer.toLowerCase(),
  //     year.toLowerCase(),
  //     fuel.toLowerCase(),
  //   );
  // };

  // const handleSearchParams = (
  //   model: string,
  //   manufacturer: string,
  //   year: string,
  //   fuel: string,
  // ) => {
  //   const searchParams = new URLSearchParams(window.location.search);
  //   if (model) {
  //     searchParams.set("model", model);
  //   } else {
  //     searchParams.delete("model");
  //   }

  //   if (manufacturer) {
  //     searchParams.set("manufacturer", manufacturer);
  //   } else {
  //     searchParams.delete("manufacturer");
  //   }
  //   if (year) {
  //     searchParams.set("year", year);
  //   } else {
  //     searchParams.delete("year");
  //   }
  //   if (fuel) {
  //     searchParams.set("fuel_type", fuel);
  //   } else {
  //     searchParams.delete("fuel_type");
  //   }
  //   const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  //   router.push(newPathname);
  // };

  return (
    <form
      className="flex flex-col items-center gap-10 p-4 md:flex-row"
      // onSubmit={handleSearch}
    >
      <div className="flex flex-col items-center gap-10 p-4 md:flex-row">
        <div className="flex">
          <SearchManufacturer
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}
          />
        </div>
        <input
          type="text"
          name="model"
          placeholder="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="text-md h-14 w-[300px] justify-between rounded-lg bg-myPrimary-100 p-4 duration-300 hover:bg-indigo-500 focus:outline-none"
        />
      </div>
      <div className="flexBetween flex-row gap-10 p-4">
        <CustomFilter
          title="year"
          custom={year}
          setCustom={setYear}
          customArray={yearsOfProduction}
        />
        <CustomFilter
          title="fuel"
          custom={fuel}
          setCustom={setFuel}
          customArray={fuels}
        />
      </div>
      <div className="flex flex-col items-center gap-10 p-4 md:flex-row">
        <button
          type="submit"
          className="text-md flexCenter rounded-lg bg-mySecondary-100 p-4 duration-500 hover:bg-indigo-500"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
