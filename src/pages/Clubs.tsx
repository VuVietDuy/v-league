import React from "react";
import { Club } from "../types/club";
import ClubCard from "../components/ClubCard";

const clubs: Club[] = [
  {
    name: "Hà Nội FC",
    logoUrl: "images/hnfc.png",
    homeStadium: "Hà Nội Stadium",
    coach: "Park Hang-seo",
  },
  {
    name: "Hoàng Anh Gia Lai",
    logoUrl: "images/hagl.jpg",
    homeStadium: "Pleiku Stadium",
    coach: "Kiatisuk Senamuang",
  },
  {
    name: "Sài Gòn FC",
    logoUrl: "images/hcm-fc.png",
    homeStadium: "Thống Nhất Stadium",
    coach: "Vũ Tiến Thành",
  },
  {
    name: "Bình Dương",
    logoUrl: "images/binh-duong.png",
    homeStadium: "Gò Đậu Stadium",
    coach: "Nguyễn Thanh Sơn",
  },
  {
    name: "Viettel FC",
    logoUrl: "images/viettel.jpg",
    homeStadium: "Hàng Đẫy Stadium",
    coach: "Trương Việt Hoàng",
  },
  {
    name: "Nam Định FC",
    logoUrl: "images/nam-dinh.png",
    homeStadium: "Thiên Trường Stadium",
    coach: "Phan Thanh Hùng",
  },
  {
    name: "Thanh Hóa",
    logoUrl: "images/thanh-hoa.png",
    homeStadium: "Sân vận động Thanh Hóa",
    coach: "Lê Thụy Hải",
  },
  {
    name: "Ha Tinh",
    logoUrl: "images/ha-tinh.png",
    homeStadium: "Sân vận động Thanh Hóa",
    coach: "Lê Thụy Hải",
  },
  {
    name: "Công an Hà Nội",
    logoUrl: "images/cong-an-ha-noi.png",
    homeStadium: "Sân vận động Thanh Hóa",
    coach: "Lê Thụy Hải",
  },
  {
    name: "Bình Định",
    logoUrl: "images/binh-dinh.png",
    homeStadium: "Sân vận động Thanh Hóa",
    coach: "Lê Thụy Hải",
  },
];

function Clubs() {
  return (
    <div className="container m-auto mb-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 xl:px-6">
        {clubs.map((club, index) => (
          <ClubCard club={club} />
        ))}
      </div>
    </div>
  );
}

export default Clubs;
