"use client";
import CarCard from "@/components/shares/CarCard";
import Hero from "@/components/shares/Hero";
import SearchBar from "@/components/shares/SearchBar";
import ShowMore from "@/components/shares/ShowMore";
import {fetchCars} from "@/utils";
import {useEffect, useState} from "react";

export default function Home() {

  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);
  // search states
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  // search filter
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState("2023");
  // pagination states
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    try {
      setLoading(true);
      const data = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || "2023",
        fuel: fuel || "",
        limit: limit || 10,
        model: model || "",
      });
      setAllCars(data);
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      throw new Error(error);
    }
  };

  useEffect(() => {
    getCars().then(r => console.log(r));
  }, [manufacturer, model, year, fuel, limit]);

  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className="mt-12 w-full">
        <h1 className="text-4xl font-bold">Car Catalogue</h1>
        <p className="text-xl text-myTextColor-200">
          Explore the cars you might like
        </p>
        <div className="flex w-full items-center gap-10 max-xl:flex-col">
          <div className="flex-1">
            <SearchBar
              manufacturer={manufacturer}
              setManufacturer={setManufacturer}
              year={year}
              setYear={setYear}
              model={model}
              setModel={setModel}
              fuel={fuel}
              setFuel={setFuel}
            />
          </div>
        </div>
        {allCars.length < 1 ? (
          <div className="w-full">
            <h2 className="my-4 text-center text-3xl">Oops, no results</h2>
          </div>
        ) : loading ? (
          <h1 className="text-center text-3xl font-bold">Loading...</h1>
        ) : (
          <section>
            <div className="flex w-full flex-wrap justify-between gap-10">
              {allCars?.map((car, idx) => <CarCard car={car} key={idx}/>)}
            </div>
            <ShowMore pageNumber={limit / 10} isNext={limit > allCars.length} setLimit={setLimit}/>
          </section>
        )}
      </div>
    </main>
  );
}
