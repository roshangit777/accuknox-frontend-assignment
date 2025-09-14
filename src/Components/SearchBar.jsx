import { RiArrowDropDownLine } from "react-icons/ri";
import { LuBellRing } from "react-icons/lu";
import { IoMdSearch } from "react-icons/io";
import { IoChevronForwardSharp } from "react-icons/io5";
const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <section className="w-full h-[50px] bg-white flex items-center justify-between px-6 py-4 my-1 border-t-4 border-[#835fb0]">
      <div className="flex items-center gap-2 text-[15px] text-gray-600">
        <span>Home</span> {""}
        <span>
          <IoChevronForwardSharp />
        </span>
        <span className="font-semibold text-black">Dashboard V2</span>
      </div>
      <div className="relative ml-20">
        <IoMdSearch className="absolute text-gray-400 top-[32%] left-1 w-[15px]" />
        <input
          type="search"
          value={searchTerm}
          placeholder="Search anything..."
          className="w-2/1 h-[35px] px-4 py-2 pl-5 text-[17px] text-gray-500 border-2 border-[#d9e9ff] bg-[#f2f5fa] rounded-sm focus:outline-none focus:border-3"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="w-[150px]">
        <ul className="flex items-center gap-8">
          <li>
            <RiArrowDropDownLine className="text-4xl text-[#5a647d]" />
          </li>
          <li>
            <LuBellRing className="text-2xl text-[#a9bdd1]" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SearchBar;
