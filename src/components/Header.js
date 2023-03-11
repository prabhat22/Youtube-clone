import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import Profile from "../assets/profile.png";
import Menu from "../assets/menu.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { YOUTUBE_SUGGESTION_API } from "../utils/constant ";
import { useDispatch, useSelector } from "react-redux";
import { addValue, selectedQuery } from "../utils/SearchSlice";
import { toggleMenu } from "../utils/MenuSlice";

const Header = () => {
  const [search, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionsObj = useSelector((store) => store.search.list);
  const dispatch = useDispatch();
  useEffect(() => {
    let timer = setTimeout(() => getSearchSuggestion(), 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  async function getSearchSuggestion() {
    if (suggestionsObj[search]) {
      setSuggestions(suggestionsObj[search]);
      return;
    }
    if (search.length > 0) {
      const response = await fetch(YOUTUBE_SUGGESTION_API + search);
      const data = await response.json();
      dispatch(addValue({ key: search, values: data[1] }));
      setSuggestions(data[1]);
    } else if (search.length === 0) {
      setShowSuggestions(false);
      setSuggestions([]);
      dispatch(
        selectedQuery({
          query: "",
        })
      );
    }
  }
  return (
    <div className=" bg-white w-full grid grid-flow-col items-center py-2 px-3 md:px-5 mb-3 fixed z-10 ">
      <div className="flex flex-row col-span-6 cursor-pointer ml-5 md:col-span-2 md:ml-0">
        <img
          className=" w-8 md:w-12  md:mr-3 hover:bg-gray-600"
          src={Menu}
          alt="menu-icon"
          onClick={() => dispatch(toggleMenu())}
        />
        <img className="w-18 md:w-20 h-12" src={Logo} alt="youtube" />
      </div>
      <div className="flex flex-row col-span-6 md:col-span-8 relative">
        <div className="flex w-full justify-center md:justify-start">
          <input
            className="border border-gray-300 rounded-l-full focus-visible:outline-none outline-blue-300 py-1 px-4 w-1/2 md:w-4/5"
            placeholder="Search"
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            onFocus={() => setShowSuggestions(true)}
            value={search}
          />
          <div className="flex items-center justify-center bg-gray-300 rounded-r-full py-2 px-3 dark:border dark:border-gray-300">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>

        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute w-4/5  bg-white top-10 rounded-lg shadow-md z-50">
            <ul className="mt-5 z-30">
              {suggestions.map((suggestion, index) => {
                return (
                  <li
                    className="my-2 text-base hover:bg-gray-200 cursor-pointer py-2 px-3 z-[1000]"
                    key={index}
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(
                        selectedQuery({
                          query: suggestion,
                        })
                      );
                      setSearchValue(suggestion);
                      setShowSuggestions(false);
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      className="px-4"
                      size="sm"
                    />
                    {suggestion}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div className=" cursor-pointer col-span-2 hidden sm:block">
        <img className=" w-8 h-8" src={Profile} alt="profile" />
      </div>
    </div>
  );
};

export default Header;
