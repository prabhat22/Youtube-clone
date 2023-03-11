import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faFilm ,faPhotoFilm,faClockRotateLeft,faClapperboard} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SideBar = () => {
  const sidebarList = [
    {
      title: "Home",
      icon: faHome,
      path: "/",
    },
    {
      title: "Shorts",
      icon: faPhotoFilm,
    },
    {
      title: "Subscription",
      icon: faFilm,
    },
    {
      title: "Library",
      icon: faClapperboard,
    },
    {
      title: "History",
      icon: faClockRotateLeft,
    },
  ];
  const isMenuOpen=useSelector((store)=>store.menu.isMenuOpen);
  if(!isMenuOpen)
  {
    return <div className="mr-5"></div>
  }

  return (
    <div className="w-24 mr-3 sm:w-20 ml-2">
      <div className="flex flex-col gap-4 fixed">
        {sidebarList.map((menu, index) => {
          return (
            <Link
              to={menu.path}
              className=" hover:bg-slate-200 flex flex-col py-2 px-1 rounded-xl gap-2 cursor-pointer min-w-max items-center"
              key={index}
            >
              <FontAwesomeIcon icon={menu.icon} size="sm" stroke="0" />
              <span className=" text-sm">{menu.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
