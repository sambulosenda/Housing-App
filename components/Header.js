import Image from "next/image";
import logo from "../public/logo.png";

import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";

import { useState } from "react";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";

function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const router  = useRouter()


const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
};

  const selectionRage = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

const search = () => {
    router.push({
        pathname: "/search", 
        query: {
            location: searchInput,
            startDate: startDate.toISOString(),
            endDate: endDate.toISOString(),
        },
    });
};


  return (
    <header
      className="sticky top-0 z-50 grid grid-cols-3
        bg-white shadow-md  p-5 md:px-10"
    >
      {/*left*/}

      <div 
      onClick={() => router.push("/")}
      className="relative flex items-center h-10 w-30 cursor-pointer my-auto ">
        <Image src={logo} width={140} height={35} />
      </div>

      {/*center*/}
      <div className="flex items-center md:border-2 rounded-full py-2 md: shadow-md">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder="Start your search"
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-black-500 placeholder-gray-400"
        />
        <SearchIcon className="hidden md:inline h-8 bg-gray-300 text-white rounded-full p-2  pl-2 cursor-pointer mx-2 " />
      </div>

      {/*right*/}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline text-gray-500">Become an Host</p>
        <GlobeAltIcon className="h-6" />
        <div className="flex items-center space-x-2 b-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-10">
          <DateRangePicker
            ranges={[selectionRage]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
            />

            <div className="flex items-center bottom-5 mb-4">
                <h2 className="flex-grow text-2xl font-semibold">Number of Guests</h2>
                <UserIcon className="h-5"/>
                <input type="number" className="w-12 pl-2 text-lg outline-none " />
           </div>


         <div className="flex">
             <button onClick={search} className="flex-grow bg-red-500 rounded-lg p-2 text-white font-semibold">Search</button>
         </div>
        </div>
      )}
    </header>
  );
}

export default Header;
