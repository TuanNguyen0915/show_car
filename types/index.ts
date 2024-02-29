import { MouseEventHandler } from "react";

export interface IButton {
  title: string;
  containerStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  rightIcon?: string;
}

export interface IManufacturer {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface ICar {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface IFilter {
  manufacturer?: string;
  year?: string;
  fuel?: string;
  limit?: number;
  model?: string;
}

export interface IOptionsProps {
  title: string;
  value: string;
}


export interface ICustomFilter {
  title: string;
  custom: string;
  setCustom: (custom: string) => void;
  customArray: { name: string }[];
}

export interface IShowMore {
  pageNumber: number;
  isNext: boolean;
  setLimit(limit: number): void
}