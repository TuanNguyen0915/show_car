import {ICar, IFilter} from "@/types";

export const fetchCars = async (filters: IFilter) => {
  const { manufacturer, year, limit, model, fuel } = filters;
  // @ts-ignore
  const res = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&fuel_type=${fuel}&limit=${limit}`,
    {
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
        "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST,
      }
    },
  );
  return await res.json()
};

export const generateCarImageUrl = (car: ICar, angel?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angel}`);
  return url;
};

