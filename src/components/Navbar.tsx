import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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

function Navbar() {
  const [showClubs, setShowClubs] = useState(true);
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);

  const listTabTop = [
    {
      path: "/",
      title: "Vô địch quốc gia",
      childen: [
        { path: "/", title: "Trang chủ" },
        { path: "/results", title: "Kết quả" },
        { path: "/tables", title: "Bảng thi đấu" },
        { path: "/clubs", title: "Câu lạc bộ" },
        { path: "/news", title: "Tin tức" },
      ],
    },
    {
      path: "/results",
      title: "Hạng nhất quốc gia",
      childen: [
        { path: "/", title: "Trang chủ" },
        { path: "/results", title: "Kết quả" },
        { path: "/tables", title: "Bảng thi đấu" },
        { path: "/clubs", title: "Câu lạc bộ" },
        { path: "/news", title: "Tin tức" },
      ],
    },
    {
      path: "/tables",
      title: "Cúp quốc gia",
      childen: [
        { path: "/", title: "Trang chủ" },
        { path: "/results", title: "Kết quả" },
        { path: "/tables", title: "Bảng thi đấu" },
        { path: "/clubs", title: "Câu lạc bộ" },
        { path: "/news", title: "Tin tức" },
      ],
    },
    { path: "/playoff", title: "Play-off" },
  ];

  const listTab = [
    { path: "/", title: "Trang chủ" },
    { path: "/results", title: "Kết quả" },
    { path: "/tables", title: "Bảng thi đấu" },
    { path: "/clubs", title: "Câu lạc bộ" },
    { path: "/news", title: "Tin tức" },
  ];

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
      <div className="">
        <div className="bg-primary h-16 border-b-2 md:border-b-0 md:border-orange-500">
          <div className="container m-auto flex md:justify-between justify-end">
            <ul className="hidden md:flex space-x-4">
              {listTabTop.map((navItem, index) => (
                <li
                  className="group h-16 relative flex items-center"
                  key={index}
                >
                  <NavLink
                    className="block px-6 text-white font-bold align-middle"
                    to={navItem.path}
                  >
                    {navItem.title}
                    <CaretDownOutlined className="ml-4 text-[10px]" />
                  </NavLink>
                  <ul className="absolute top-16 hidden group-hover:block w-56 bg-purple-700 text-white shadow-lg">
                    <li className="hover:bg-purple-600 py-2 px-4">
                      <a href="#">Trang chủ</a>
                    </li>
                    <li className="hover:bg-purple-600 py-2 px-4">
                      <a href="#">Lịch thi đấu</a>
                    </li>
                    <li className="hover:bg-purple-600 py-2 px-4">
                      <a href="#">Kết quả</a>
                    </li>
                    <li className="hover:bg-purple-600 py-2 px-4">
                      <a href="#">Bảng xếp hạng</a>
                    </li>
                    <li className="hover:bg-purple-600 py-2 px-4">
                      <a href="#">Thống kê</a>
                    </li>
                  </ul>
                </li>
              ))}
            </ul>
            <div className="h-full flex items-center p-2 gap-3">
              <a href="/login" className="py-2 px-3 border bg-white rounded">
                Đăng nhập
              </a>
              <button className="py-2 px-3 text-white rounded border border-primary hover:border-gray-200">
                <SearchOutlined className="text-2xl" />
              </button>
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
        <ul className="hidden md:flex container m-auto space-x-4 mx-auto ">
          {listTab.map((navItem, index) => (
            <li key={index}>
              <NavLink
                className="block py-4 px-6 text-gray-700 font-medium text-sm hover:text-blue-500 "
                to={navItem.path}
              >
                {navItem.title}
              </NavLink>
            </li>
          ))}
        </ul>
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
