"use client";

import { useState } from "react";
import { ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { manufacturers } from "@/constants";
import { IManufacturer } from "@/types";
import { ScrollArea } from "../ui/scroll-area";

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: IManufacturer) => {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen} modal={true}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          className="text-md h-14 w-[300px] justify-between bg-myPrimary-100 duration-300 hover:bg-indigo-500"
        >
          {manufacturer ? manufacturer.toUpperCase() : "Select manufacture..."}
          <ChevronsUpDown className="ml-2 h-6 w-6 shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="h-[500px] w-[300px] p-0 lg:h-[700px]">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty className="mt-10 text-center text-lg text-mySecondary-100">
            No manufacture found.
          </CommandEmpty>
          <ScrollArea>
            <CommandGroup>
              {manufacturers.map((framework) => (
                <CommandItem
                  key={framework.name}
                  value={framework.name}
                  onSelect={(currentValue) => {
                    setManufacturer(
                      currentValue === manufacturer ? "" : currentValue,
                    );
                    setOpen(false);
                  }}
                >
                  {framework.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </ScrollArea>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default SearchManufacturer;
