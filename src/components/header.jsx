import { useState } from "react";
import { SearchInput } from ".";
import { FiBell, FiInbox } from "react-icons/fi";

export const Header = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="px-10 flex items-center justify-between h-22 min-h-22 border-b border-white-1/60 w-full">
      <SearchInput
        value={searchValue}
        setValue={setSearchValue}
        placeholder="Хайх..."
      />
      <div className="flex gap-5 items-center">
        <button>
          <FiInbox className="text-white/60 h-6 w-6" />
        </button>
        <button className="relative">
          <FiBell className="text-white/60 h-6 w-6" />
          <div className="w-2 h-2 rounded-full bg-red-l absolute top-0 right-0" />
        </button>
        <p className="text-white-1/60 font-inter text-16">Enkhbold Ebo</p>
        <div className="h-10 w-10 rounded-full bg-white-1" />
      </div>
    </div>
  );
};
