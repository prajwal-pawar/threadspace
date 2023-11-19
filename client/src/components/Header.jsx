import {
  MagnifyingGlassIcon,
  BellIcon,
  ChatBubbleOvalLeftIcon,
  PlusIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { avatar } from "../assets/images/images";

const Header = () => {
  return (
    <header className="w-full bg-threadspace-header p-2">
      <div className="flex items-center mx-4">
        {/* logo */}
        <h2 className="h-8 mr-4 text-xl">ThreadSpace</h2>

        {/* search box */}
        <div className="flex bg-threadspace-searchbar rounded-md px-4 border border-gray-400 items-center mx-4 flex-grow">
          <MagnifyingGlassIcon className="text-slate-800 h-7 w-7" />
          <input
            type="text"
            className="bg-threadspace-searchbar h-7 focus:outline-none p-1 pl-2 pr-0 text-sm m-1 block"
            placeholder="Search"
          />
        </div>

        {/* notification */}
        <button className="px-2 py-1">
          <BellIcon className="w-7 h-7 mx-2" />
        </button>
        {/* chat */}
        <button className="px-2 py-1">
          <ChatBubbleOvalLeftIcon className="w-7 h-7 mx-2" />
        </button>
        {/* add */}
        <button className="px-2 py-1">
          <PlusIcon className="w-7 h-7 mx-2" />
        </button>

        {/* profile */}
        <button className="flex rounded-md ml-4">
          <div className="w-8 h-8 bg-gray-300 rounded-md">
            <img src={avatar} alt="user_avatar" className="block" />
          </div>
          <ChevronDownIcon className="w-5 h-5 m-1 mt-2 ml-1" />
        </button>
      </div>
    </header>
  );
};

export default Header;
