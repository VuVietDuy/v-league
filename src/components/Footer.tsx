import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-purple-950 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div className="col-span-1">
          <h3 className="text-white font-bold text-xl pb-2">V League</h3>
          <div className="grid grid-cols-2">
            <ul className="col-span-1 text-[12px] text-white">
              <li>
                <NavLink className="block h-8" to={""}>
                  Trang chủ
                </NavLink>
              </li>
              <li>
                <NavLink className="block h-8" to={""}>
                  Kết quả
                </NavLink>
              </li>
              <li>
                <NavLink className="block h-8" to={""}>
                  Bảng thi đấu
                </NavLink>
              </li>
            </ul>
            <div className="col-span-1">
              <ul className="col-span-1 text-[12px] text-white">
                <li>
                  <NavLink className="block h-8" to={""}>
                    Câu lạc bộ
                  </NavLink>
                </li>
                <li>
                  <NavLink className="block h-8" to={""}>
                    Cầu thủ
                  </NavLink>
                </li>
                <li>
                  <NavLink className="block h-8" to={""}>
                    Tin tức
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <h3 className="text-white font-bold text-xl pb-2">Về chúng tôi</h3>
          <div className="grid grid-cols-2">
            <ul className="col-span-1 text-[12px] text-white">
              <li>
                <NavLink className="block h-8" to={""}>
                  Tổng quan
                </NavLink>
              </li>
              <li>
                <NavLink className="block h-8" to={""}>
                  Sứ mệnh
                </NavLink>
              </li>
              <li>
                <NavLink className="block h-8" to={""}>
                  Nguên tác
                </NavLink>
              </li>
            </ul>
            <div className="col-span-1">
              <ul className="col-span-1 text-[12px] text-white">
                <li>
                  <NavLink className="block h-8" to={""}>
                    Đối tác
                  </NavLink>
                </li>
                <li>
                  <NavLink className="block h-8" to={""}>
                    Nghề nghiệp
                  </NavLink>
                </li>
                <li>
                  <NavLink className="block h-8" to={""}>
                    Truyền thông
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
