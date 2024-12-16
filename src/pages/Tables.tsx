import React from "react";
import binhDinh from "../assets/binh-dinh.png";
import FormItem from "../components/FormItem";
import { FormStatus } from "../types/form";
import { LeagueTable } from "../types/table";

export const vLeagueTable: LeagueTable[] = [
  {
    position: 1,
    club: { name: "Hà Nội FC", logoUrl: "hanoi_fc_logo.png" },
    played: 9,
    won: 2,
    drawn: 1,
    lost: 0,
    GF: 25,
    GA: 10,
    points: 28,
    form: [
      { status: FormStatus.T },
      { status: FormStatus.T },
      { status: FormStatus.H },
      { status: FormStatus.B },
      { status: FormStatus.B },
    ],
  },
  {
    position: 2,
    club: { name: "Hoàng Anh Gia Lai", logoUrl: "hoanganh_logo.png" },
    played: 9,
    won: 2,
    drawn: 0,
    lost: 1,
    GF: 22,
    GA: 11,
    points: 27,
    form: [
      { status: FormStatus.T },
      { status: FormStatus.T },
      { status: FormStatus.H },
      { status: FormStatus.B },
      { status: FormStatus.B },
    ],
  },
  {
    position: 3,
    club: { name: "Bình Dương", logoUrl: "binhduong_logo.png" },
    played: 9,
    won: 2,
    drawn: 2,
    lost: 1,
    GF: 18,
    GA: 9,
    points: 20,
    form: [
      { status: FormStatus.T },
      { status: FormStatus.T },
      { status: FormStatus.H },
      { status: FormStatus.B },
      { status: FormStatus.B },
    ],
  },
  {
    position: 4,
    club: { name: "Sài Gòn FC", logoUrl: "saigon_fc_logo.png" },
    played: 9,
    won: 2,
    drawn: 1,
    lost: 2,
    GF: 15,
    GA: 11,
    points: 16,
    form: [
      { status: FormStatus.T },
      { status: FormStatus.T },
      { status: FormStatus.H },
      { status: FormStatus.B },
      { status: FormStatus.B },
    ],
  },
  {
    position: 5,
    club: { name: "Đà Nẵng", logoUrl: "danang_logo.png" },
    played: 9,
    won: 2,
    drawn: 1,
    lost: 3,
    GF: 13,
    GA: 14,
    points: 14,
    form: [
      { status: FormStatus.T },
      { status: FormStatus.T },
      { status: FormStatus.H },
      { status: FormStatus.B },
      { status: FormStatus.B },
    ],
  },
  {
    position: 6,
    club: { name: "Nam Định", logoUrl: "namdinh_logo.png" },
    played: 9,
    won: 2,
    drawn: 0,
    lost: 4,
    GF: 12,
    GA: 16,
    points: 12,
    form: [
      { status: FormStatus.T },
      { status: FormStatus.T },
      { status: FormStatus.H },
      { status: FormStatus.B },
      { status: FormStatus.B },
    ],
  },
  {
    position: 7,
    club: { name: "Thanh Hóa", logoUrl: "thanhhoa_logo.png" },
    played: 9,
    won: 2,
    drawn: 1,
    lost: 3,
    GF: 10,
    GA: 12,
    points: 11,
    form: [
      { status: FormStatus.T },
      { status: FormStatus.T },
      { status: FormStatus.H },
      { status: FormStatus.B },
      { status: FormStatus.B },
    ],
  },
  {
    position: 8,
    club: { name: "Cần Thơ", logoUrl: "cantho_logo.png" },
    played: 9,
    won: 2,
    drawn: 0,
    lost: 4,
    GF: 8,
    GA: 16,
    points: 6,
    form: [
      { status: FormStatus.T },
      { status: FormStatus.T },
      { status: FormStatus.H },
      { status: FormStatus.B },
      { status: FormStatus.B },
    ],
  },
  {
    position: 9,
    club: { name: "Hải Phòng", logoUrl: "haiphong_logo.png" },
    played: 9,
    won: 2,
    drawn: 1,
    lost: 3,
    GF: 9,
    GA: 17,
    points: 6,
    form: [
      { status: FormStatus.T },
      { status: FormStatus.T },
      { status: FormStatus.H },
      { status: FormStatus.B },
      { status: FormStatus.B },
    ],
  },
  {
    position: 10,
    club: { name: "Quảng Ninh", logoUrl: "quangninh_logo.png" },
    played: 9,
    won: 2,
    drawn: 0,
    lost: 4,
    GF: 7,
    GA: 20,
    points: 3,
    form: [
      { status: FormStatus.T },
      { status: FormStatus.T },
      { status: FormStatus.H },
      { status: FormStatus.B },
      { status: FormStatus.B },
    ],
  },
];

function Tables() {
  return (
    <div className="container m-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b">
          <tr>
            <th scope="col" className="px-6 py-3 font-bold">
              Thứ hạng
            </th>
            <th scope="col" className="px-6 py-3">
              Câu lạc bộ
            </th>
            <th scope="col" className="px-3 py-3 w-fit">
              Trận
            </th>
            <th scope="col" className="px-3 py-3">
              Thắng
            </th>
            <th scope="col" className="px-3 py-3">
              Hòa
            </th>
            <th scope="col" className="px-3 py-3">
              Thua
            </th>
            <th scope="col" className="px-3 py-3">
              BT-BB
            </th>
            <th scope="col" className="px-3 py-3">
              HS
            </th>
            <th scope="col" className="px-3 py-3">
              BTSK
            </th>
            <th scope="col" className="px-3 py-3">
              Gần đây
            </th>
            <th scope="col" className="px-6 py-3">
              Điểm
            </th>
            {/* <th scope="col" className="px-6 py-3"></th> */}
          </tr>
        </thead>
        <tbody>
          {vLeagueTable.map((item, index) => (
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 border-b dark:border-gray-700">
              <td className="px-6 py-4">{item.position}</td>
              <td className="px-6 py-4 flex items-center gap-2">
                <img className="w-8 h-8" src={binhDinh} alt="" />
                <span className="font-semibold">Binh Dinh FC</span>
              </td>
              <td className="px-6 py-4">{item.played}</td>
              <td className="px-6 py-4">{item.won}</td>
              <td className="px-6 py-4">{item.drawn}</td>
              <td className="px-6 py-4">{item.lost}</td>
              <td className="px-6 py-4">{item.GF}</td>
              <td className="px-6 py-4">{item.GA}</td>
              <td className="px-6 py-4">{item.GF - item.GA}</td>
              <td className="px-6 py-4 flex gap-2">
                <FormItem form={{ status: FormStatus.T }} />
                <FormItem form={{ status: FormStatus.T }} />
                <FormItem form={{ status: FormStatus.H }} />
                <FormItem form={{ status: FormStatus.H }} />
                <FormItem form={{ status: FormStatus.B }} />
              </td>
              <td className="px-6 py-4 font-bold text-red-600">5</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tables;
