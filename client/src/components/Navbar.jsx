import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { logout } from "../redux/userSlice.js";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { add1, add2, bag } from "../assets";
import { Badge, Hidden } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Announcements from "./Announcements.jsx";
import CloseIcon from "@mui/icons-material/Close";
import Popup from "./Popup.jsx";
import { allCategories } from "../assets";
const Navbar = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.quantity);
  console.log(" Quantity : ", quantity);
  const isNonMobileScreen = useMediaQuery("(min-width:1000px)");
  const [isToggle, setToggle] = useState(false);
  const user = useSelector((state) => state.user.currentUser);
  const handleToggleClick = () => {
    setToggle(!isToggle);
  };
  const logoutMethod = () => {
    dispatch(logout());
  };
  const handleHover = (categoryValue) => {
    setCategory(categoryValue);
  };
  const [selectedCategory, setCategory] = useState("men");
  return (
    <>
      <Announcements />

      <div className=" z-50 w-full py-2 top-0  sticky shadow-lg bg-white ">
        <div className="wrapper flex items-center p-1 w-full  md:px-8 ">
          <div className="left w-full  flex-1">
            <a href="/">
              <div
                className="logo text-[1rem] m-0 p-0 md:text-3xl    rounded-lg  font-bold flex items-center"
                style={{ fontFamily: "'Happy Monkey', cursive" }}
              >
                <p className="">URBAN_ST</p>
                <img src={bag} className="w-[1.5rem]" alt="" />
                <p>RE.in</p>
              </div>
            </a>
          </div>

          <div>
            <div></div>
          </div>

          <div className="right flex justify-end items-center  flex-1 md:gap-8 md:visible">
            {!isNonMobileScreen ? (
              <div className="menu  flex items-center gap-1">
                <FavoriteBorderIcon className="mx-2"/>
                <div className="cart cursor-pointer">
                  <Link to={"/cart"}>
                      <LocalMallOutlinedIcon />
                    <span class="bg-teal-100 text-black text-xs font-medium me-2 px-2.5 py-0.5 rounded  dark:text-teal-400 border border-teal-400">{quantity}</span>

                  </Link>
                </div>
                {!isToggle ? (
                  <div className="">
                    <MenuIcon onClick={handleToggleClick} className=" cursor-pointer" />
                  </div>
                ) : (
                  <div
                    className={` right absolute top-0 z-[1000000] w-full start-0 bg-white shadow-xl rounded-md flex  flex-col md:flex-row gap-4`}
                  >
                    <CloseIcon
                      onClick={handleToggleClick}
                      className=" absolute border-2 cursor-pointer border-black text-bold rounded-md top-[-13px] right-0"
                    />
                    <div className=" middle flex items-center flex-1 ">
                      <ul className="flex gap-4 py-2 md:flex-row">
                        {Object.keys(allCategories).map((category) => (
                          <li className="men font-semibold text-lg  hover:underline underline-offset-8">
                            <Popup
                              id={category}
                              onHover={handleHover}
                              popupContent={
                                <div className=" flex justify-evenly text-xs items-start fixed start-0 w-screen bg-white p-4 shadow-md border rounded-md grid grid-cols-2 gap-2">
                                  {Object.keys(
                                    allCategories[selectedCategory]
                                  ).map((subCategory) => (
                                    <div
                                      key={subCategory}
                                      className="flex p-1 border rounded-md flex-wrap"
                                    >
                                      <div className="first">
                                        <div className="topwear">
                                          <p className="text-start font-bold flex flex-wrap text-red-400">
                                            {subCategory}
                                          </p>
                                          <ul className="text-start my-4">
                                            {allCategories[selectedCategory][
                                              subCategory
                                            ].map((item) => (
                                              <li key={item}>{item}</li>
                                            ))}
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              }
                              label={category}
                              links={[]}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="end flex justify-evenly items-center gap-2">
                      <div className="language flex  justify-center items-center ">
                        <select
                          name="lang"
                          className=" bg-transparent border-2 rounded-md"
                          id="lang"
                        >
                          <option value="EN">EN</option>
                          <option value="EN">HIN</option>
                        </select>
                      </div>
                      <div className="search bg-gray-200  h-min   flex justify-center items-center rounded-xl border md:border-slate-400  w-52  ">
                        <input
                          type="text"
                          placeholder="search"
                          name="search"
                          id="search"
                          className=" bg-transparent py-2 w-full outline-none px-4  "
                        />
                        <SearchIcon className=" cursor-pointer mx-2" />
                      </div>
                      
                            {user ? (
                              <div
                                className="signin cursor-pointer hover:underline underline-offset-8 bg-black text-white rounded-xl px-4 py-1"
                                onClick={logoutMethod}
                              >
                                Logout
                              </div>
                            ) : (
                              <div className="flex gap-4">
                                <div className="border-2 border-white bg-red-400 text-white font-bold  p-2 my-2 w-full rounded-xl">
                                  <Link to={"/register"} value="register">
                                    LOGIN/SIGNUP
                                  </Link>
                                </div>
                              </div>
                            )}
                      
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className={`right flex md:flex-row gap-20`}>
                <div className=" middle flex items-center flex-1 ">
                  <ul className="flex gap-4 flex-col md:flex-row">
                    {Object.keys(allCategories).map((category) => (
                      <li className="men font-semibold text-lg  hover:underline underline-offset-8">
                        <Popup
                          id={category}
                          onHover={handleHover}
                          popupContent={
                            <div className="men flex justify-evenly items-start w-[900px] absolute -left-96 bg-white p-4 shadow-md border rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                              {Object.keys(allCategories[selectedCategory]).map(
                                (subCategory) => (
                                  <div
                                    key={subCategory}
                                    className="flex p-4 border rounded-md"
                                  >
                                    <div className="first flex flex-col">
                                      <div className="topwear">
                                        <p className="text-start font-bold flex flex-wrap text-red-400">
                                          {subCategory}
                                        </p>
                                        <ul className="text-start my-4">
                                          {allCategories[selectedCategory][
                                            subCategory
                                          ].map((item) => (
                                            <li key={item}>{item}</li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                )
                              )}
                            </div>
                          }
                          label={category}
                          links={[]}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="end flex items-center gap-4">
                  <div className="language flex justify-center items-center ">
                    <select name="lang" className=" bg-transparent" id="lang">
                      <option value="EN">EN</option>
                      <option value="EN">HIN</option>
                    </select>
                  </div>
                  <div className="search  flex justify-start rounded-xl border md:border-slate-400 md:p-1 w-60  ">
                    <input
                      type="text"
                      placeholder="search"
                      name="search"
                      id="search"
                      className="hidden bg-transparent md:block md:w-full outline-none md:px-4  "
                    />
                    <SearchIcon className=" cursor-pointer" />
                  </div>

                  <Popup
                    id="account"
                    onHover={handleHover}
                    popupContent={
                      <div className="px-4 text-start flex flex-col w-[200px] absolute top-[250px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 shadow-md border rounded-md">
                        <p className="text-bold font-bold text-red-400">
                          welcome
                        </p>
                        <p className="text-bold  inline-block">
                          To access account and manage orders
                        </p>
                        {user ? (
                          <div
                            className="signin cursor-pointer hover:underline underline-offset-8 bg-black text-white rounded-xl px-4 py-1"
                            onClick={logoutMethod}
                          >
                            Logout
                          </div>
                        ) : (
                          <div className="flex gap-4">
                            <div className="border-2 hover:bg-red-400 hover:text-white  p-2 my-2 w-full rounded-xl">
                              <Link to={"/register"} value="register">
                                LOGIN/SIGNUP
                              </Link>
                            </div>
                          </div>
                        )}

                        <ul className=" text-start text-[17px] my-4">
                          <li className="   ">Orders</li>
                          <li className="  ">Wishlist</li>
                          <li className="  ">Gift Cards</li>
                          <li className="  ">Contact us</li>
                          <hr />
                          <li className="   ">urban Insider</li>
                          <li className="  ">urban Credit</li>
                          <li className="  ">Saved Cards</li>
                          <li className="  ">Saved VPA</li>
                          <li className="  ">Saved Addresses</li>
                        </ul>
                      </div>
                    }
                    label={<AccountCircleOutlinedIcon />}
                    links={[]}
                  />
                  <FavoriteBorderIcon className="flex items-center" />
                  <div className="cart flex items-center cursor-pointer">
                    <Link to={"/cart"} className="flex items-center">
                    <LocalMallOutlinedIcon />

                    <span class="bg-teal-100 text-black text-xs font-medium me-2 px-2.5 py-0.5 rounded  dark:text-teal-400 border border-teal-400">{quantity}</span>

                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
