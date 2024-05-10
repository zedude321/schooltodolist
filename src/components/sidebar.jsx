import { LogoIcon } from "@/assets/icons";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  FiCalendar,
  FiChevronsLeft,
  FiHome,
  FiMoreHorizontal,
  FiPlus,
} from "react-icons/fi";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [extend, setExtend] = useState(true);

  const handleExtend = () => {
    setExtend(!extend);
  };

  return (
    <div
      className={`${
        extend ? "min-w-side w-side" : "min-w-sidemin w-sidemin"
      } border-r border-white-1/60 h-full transition-all duration-300`}
    >
      <div className="w-full items-center h-22 justify-between flex border-b border-white-1/60">
        {extend && <LogoIcon className="h-7 w-fit pl-8" />}
        <button
          onClick={handleExtend}
          className={`h-full px-8 flex items-center ${
            !extend && "rotate-180"
          } transition-all`}
        >
          <FiChevronsLeft className="text-white-1/60 h-5 w-5" />
        </button>
      </div>
      <div className="w-full p-5 pt-3 gap-5 divide-y divide-white-1/60">
        <div className="px-3 pb-3 gap-1 flex flex-col *:flex *:gap-4 *:items-center *:w-full *:py-2">
          <button onClick={() => router.push("/")}>
            <FiHome
              className={`text-white-1${pathname != "/" ? "/60" : ""} h-5 w-5`}
            />
            {extend && (
              <div
                className={`font-inter font-medium transition-all text-16 text-nowrap h-5 text-white-1${
                  pathname != "/" ? "/60" : ""
                }`}
              >
                Нүүр хуудас
              </div>
            )}
          </button>
          <button
            onClick={() => pathname != "/schedule" && router.push("/schedule")}
          >
            <FiCalendar
              className={`text-white-1${
                pathname != "/schedule" ? "/60" : ""
              } h-5 w-5`}
            />
            {extend && (
              <div
                className={`font-inter font-medium text-16 h-5 text-white-1${
                  pathname != "/schedule" ? "/60" : ""
                }`}
              >
                Хуваарь
              </div>
            )}
          </button>
        </div>
        <div className="py-6 flex flex-col gap-3">
          <div className={`uppercase justify-${extend ? 'between pl-2.5' : 'center'} w-full flex  items-center *:text-white-1/60`}>
            {extend && (
              <div className="font-inter font-bold text-14">багууд</div>
            )}
            <button>
              <FiPlus className="h-5 w-5" />
            </button>
          </div>
          <button disabled className="flex flex-col gap-5 text-white-1">
            <div className={`flex w-full justify-${extend ? 'between' : 'center h-12'} p-2.5 bg-purple rounded-md`}>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-l rounded-full" />
                {extend && (
                  <div className="text-14 font-semibold font-inter">11A</div>
                )}
              </div>
              {extend && (
                <a className="cursor-pointer">
                  <FiMoreHorizontal className="h-5 w-5" />
                </a>
              )}
            </div>
          </button>
          <button className="flex flex-col gap-5 text-white-1">
            <div className={`flex w-full justify-${extend ? 'between' : 'center h-12'} p-2.5 rounded-md`}>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-l rounded-full" />
                {extend && (
                  <div className="text-14 font-semibold font-inter">11B</div>
                )}
              </div>
            </div>
          </button>
          <button className="flex flex-col gap-5 text-white-1">
            <div className={`flex w-full justify-${extend ? 'between' : 'center h-12'} p-2.5 rounded-md`}>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-l rounded-full" />
                {extend && (
                  <div className="text-14 font-semibold font-inter">Physics</div>
                )}
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
