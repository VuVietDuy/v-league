/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import binhDinh from "../assets/binh-dinh.png";
import binhDuong from "../assets/binh-duong.png";
import congAnHaNoi from "../assets/cong-an-ha-noi.png";
import haTinh from "../assets/ha-tinh.png";
import hagl from "../assets/hagl.jpg";
import hcmFc from "../assets/hcm-fc.png";
import namDinh from "../assets/nam-dinh.png";
import quangNam from "../assets/quang-nam.jpg";
import shbDaNang from "../assets/shb-da-nang.png";
import thanhHoa from "../assets/thanh-hoa.png";
import viettel from "../assets/viettel.jpg";
import {
  CaretDownOutlined,
  CloseOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import logo from "../assets/V.League.png";
import logoNoText from "../assets/V.LeagueNoText.png";

const listClubs = [
  {
    name: "Bình Định",
    path: "/clubs/",
    image: binhDinh,
  },
  {
    name: "Bình Định",
    path: "/clubs/",
    image: binhDuong,
  },
  {
    name: "Bình Định",
    path: "/clubs/",
    image: congAnHaNoi,
  },
  {
    name: "Bình Định",
    path: "/clubs/",
    image: haTinh,
  },
  {
    name: "Bình Định",
    path: "/clubs/",
    image: hagl,
  },
  {
    name: "Bình Định",
    path: "/clubs/",
    image: hcmFc,
  },
  {
    name: "Bình Định",
    path: "/clubs/",
    image: namDinh,
  },
  {
    name: "Bình Định",
    path: "/clubs/",
    image: quangNam,
  },
  {
    name: "Bình Định",
    path: "/clubs/",
    image: shbDaNang,
  },
  {
    name: "Bình Định",
    path: "/clubs/",
    image: thanhHoa,
  },
  {
    name: "Bình Định",
    path: "/clubs/",
    image: viettel,
  },
];

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
  const [logoPosition, setLogoPosition] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const tournament = location.pathname.split("/")[1];
  const user = useSelector((state: RootState) => state.user);

  const subTab = listTabTop.find((item) => item.path === tournament)?.childen;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowClubs(true);
        setLogoPosition(false);
      } else {
        setShowClubs(false);
        setLogoPosition(true);
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
            {listClubs.map((club, index) => (
              <li key={index}>
                <NavLink
                  to={club.path}
                  className={"flex w-10 h-10 justify-center items-center"}
                >
                  <img src={club.image} className="w-8 hover:w-9 " alt="Logo" />
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="relative overflow-hidden">
        <Link
          to="/"
          className={`${
            logoPosition
              ? "bg-white rounded-full -top-[26px] -left-5 w-40 p-8"
              : "top-[55%] -translate-y-[55%] w-[132px] left-4 p-4"
          }  absolute md:block hidden`}
        >
          <img
            src={logo}
            alt="logo"
            className="w-full object-cover drop-shadow-lg"
          />
        </Link>

        <div className="bg-primary h-16 border-b-2 md:border-b-0 md:border-orange-500 md:pl-32">
          <div className="container m-auto  flex md:justify-between justify-between items-center ">
            <Link to="/" className={`h-12 w-12  md:hidden block`}>
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
            <div className="h-full flex items-center p-2 gap-3">
              {user.id ? (
                <p className="text-white font-bold">{user.name}</p>
              ) : (
                <a href="/login" className="py-2 px-3 border bg-white rounded">
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
          <ul className="pl-24 hidden md:flex container m-auto mx-auto ">
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
                <li className="hover:bg-purple-600 py-3 px-2 text-xs border-b">
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
