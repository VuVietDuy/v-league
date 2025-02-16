/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  CaretDownOutlined,
  CloseOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import logoNoText from "@/assets/V.LeagueNoText.png";
import { useQuery } from "@tanstack/react-query";
import fetcher from "@/api/fetcher";

const listTabTop = [
  {
    path: "/",
    title: "Trang chủ",
  },
  {
    path: "vleague-1",
    title: "Vô địch quốc gia",
    childen: [
      { path: "/vleague-1/fixtures", title: "Lịch thi đấu" },
      { path: "/vleague-1/results", title: "Kết quả" },
      { path: "/vleague-1/tables", title: "Bảng xếp hạng" },
      { path: "/vleague-1/clubs", title: "Câu lạc bộ" },
      { path: "/vleague-1/category", title: "Điều lệ" },
    ],
  },
  {
    path: "vleague-2",
    title: "Hạng nhất quốc gia",
    childen: [
      { path: "/vleague-2/fixtures", title: "Lịch thi đấu" },
      { path: "/vleague-2/results", title: "Kết quả" },
      { path: "/vleague-2/tables", title: "Bảng xếp hạng" },
      { path: "/vleague-2/clubs", title: "Câu lạc bộ" },
      { path: "/vleague-2/category", title: "Điều lệ" },
    ],
  },
  { path: "/news", title: "Tin tức" },
];

function Navbar() {
  const [showClubs, setShowClubs] = useState(true);
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const tournament = location.pathname.split("/")[1];
  const user = useSelector((state: RootState) => state.user);
  const { data: clubs, isLoading } = useQuery({
    queryKey: ["GET_CLUBS_LIST_FOR_NAVBAR"],
    queryFn: () =>
      fetcher.get(`tournaments/${"vleague-1"}/clubs`).then((res) => {
        return res.data;
      }),
  });

  const subTab = listTabTop.find((item) => item.path === tournament)?.childen;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowClubs(true);
      } else {
        setShowClubs(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-10 bg-white shadow-md">
      {showClubs && (
        <div className="bg-gray-100 py-2 hidden md:block">
          <ul className="flex space-x-4 justify-center h-10">
            {!isLoading &&
              clubs?.map((club: any, index: number) => (
                <li key={index}>
                  <NavLink
                    to={`clubs/${club.id}`}
                    className={"flex w-10 h-10 justify-center items-center"}
                  >
                    <img
                      src={club.logoURL}
                      className="w-8 h-8 object-contain hover:w-9 "
                      alt="Logo"
                    />
                  </NavLink>
                </li>
              ))}
          </ul>
        </div>
      )}
      <div className="relative ">
        <div
          className={`bg-primary h-16 border-b-2 md:border-b-0 md:border-orange-500"
          }`}
        >
          <div className="container m-auto flex md:justify-between justify-between items-center">
            <div className="flex">
              <Link to="/" className={`h-16 ml-3 w-fit  flex-shrink-0 p-2`}>
                <img
                  src={logoNoText}
                  alt="logo"
                  className=" h-full object-cover drop-shadow-lg"
                />
              </Link>
              <ul className="hidden md:flex space-x-4 relative ">
                {listTabTop.map((navItem, index) => (
                  <li
                    className="group h-16 relative flex items-center"
                    key={index}
                  >
                    {navItem.childen ? (
                      <div>
                        <div className="block px-6 text-white font-bold align-middle">
                          {navItem.title}
                          <CaretDownOutlined className="ml-4 text-[10px]" />
                        </div>
                        <ul className="absolute top-16 hidden group-hover:block w-56 bg-purple-700 text-white shadow-lg">
                          {navItem.childen.map((item, index) => (
                            <li key={index}>
                              <NavLink
                                className={({ isActive }) =>
                                  isActive
                                    ? "block hover:bg-purple-600 py-2 px-4 text-orange-500"
                                    : "block hover:bg-purple-600 py-2 px-4"
                                }
                                to={item.path}
                              >
                                {item.title}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "block px-6 text-orange-500 font-bold align-middle"
                            : "block px-6 text-white font-bold align-middle"
                        }
                        to={navItem.path + ""}
                      >
                        {navItem.title}
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-full flex items-center p-2 gap-3">
              {user?.id ? (
                <Link to={`/profile`} className="text-white font-bold">
                  {user?.name}
                </Link>
              ) : (
                <a
                  href="/login"
                  className="py-2 px-3 border bg-white rounded text-nowrap"
                >
                  Đăng nhập
                </a>
              )}
              {location?.pathname === "/search" ? (
                <button
                  className="py-2 px-3 text-white rounded border border-primary hover:border-gray-200"
                  onClick={() => navigate(-1)}
                >
                  <CloseOutlined className="text-2xl" />
                </button>
              ) : (
                <button
                  className="py-2 px-3 text-white rounded border border-primary hover:border-gray-200"
                  onClick={() => navigate("/search")}
                >
                  <SearchOutlined className="text-2xl" />
                </button>
              )}

              {isOpenNavbar ? (
                <button
                  className="text-xl text-white block md:hidden"
                  onClick={() => setIsOpenNavbar(false)}
                >
                  <CloseOutlined />
                </button>
              ) : (
                <button
                  className="text-2xl text-white block md:hidden"
                  onClick={() => setIsOpenNavbar(true)}
                >
                  <MenuOutlined />
                </button>
              )}
            </div>
          </div>
        </div>
        {/* Sub tab */}
        {subTab && (
          <ul className="hidden md:flex container m-auto mx-auto pl-20">
            {subTab.map((navItem, index) => (
              <li key={index} className="m-0 p-0 group">
                <NavLink to={navItem.path} className={`text-sm font-medium `}>
                  {({ isActive }) => (
                    <>
                      <span className="block py-4 px-6">{navItem.title}</span>
                      <div
                        className={`h-2 w-full bg-gradient-to-r ${
                          isActive
                            ? "from-blue-500 to-purple-600"
                            : "group-hover:from-blue-500 group-hover:to-purple-600"
                        }`}
                      ></div>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
      {isOpenNavbar && (
        <div className="fixed top-16 right-0 left-0 bottom-0">
          <ul className="absolute top-0 left-0 bottom-0 w-52 sm:w-72 bg-[#250428] flex flex-col gap-[2px]">
            {listTabTop.map((navItem, index) => (
              <li key={index} className="bg-primary">
                <div className="py-4 px-6 text-white text-xs align-middle flex">
                  <p>{navItem.title}</p>
                  <CaretDownOutlined className="ml-4 text-[10px]" />
                </div>
              </li>
            ))}
          </ul>
          <div className="absolute top-0 left-52 sm:left-72 right-0 bottom-0 bg-white">
            <ul className="text-primary">
              {listTabTop[0].childen?.map((item, index) => (
                <li
                  key={index}
                  className="hover:bg-purple-600 py-3 px-2 text-xs border-b"
                >
                  <a href="#">{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
