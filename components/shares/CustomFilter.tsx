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

import { ScrollArea } from "../ui/scroll-area";
import { ICustomFilter } from "@/types";

const CustomFilter = ({
  title,
  custom,
  setCustom,
  customArray,
}: ICustomFilter) => {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen} modal={true}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          className="text-md h-14 w-full justify-between bg-myPrimary-100 duration-300 hover:bg-indigo-500 lg:w-[200px]"
        >
          {custom ? custom.toUpperCase() : `Select ${title}`}
          <ChevronsUpDown className="ml-2 h-6 w-6 shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-h-[500px] w-[200px]">
        <Command>
          <CommandInput placeholder={`Search ${title}`} />
          <CommandEmpty className="mt-10 text-center text-lg text-mySecondary-100">
            No {title} found
          </CommandEmpty>
          <ScrollArea>
            <CommandGroup>
              {customArray.map((item) => (
                <CommandItem
                  key={item.name}
                  value={item.name}
                  onSelect={(currentValue) => {
                    setCustom(currentValue === custom ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {item.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </ScrollArea>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default CustomFilter;
