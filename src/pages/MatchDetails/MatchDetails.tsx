import { useParams } from "react-router-dom";
import ballSmall from "../../assets/ball-small.svg";
import clubBackground from "../../assets/club-bg.svg";
import clubGraphic from "../../assets/club-graphic.svg";
import { useEffect } from "react";

export default function MatchDetails() {
  const { matchId } = useParams();
  console.log(matchId);

  useEffect(() => {}, []);
  return (
    <div className="mt-10">
      <div className="container m-auto">
        <div className="grid grid-cols-3 gap-6">
          <div></div>
          <div className="col-span-2">
            <div className="rounded-2xl bg-white p-4 flex gap-2 border">
              <div className="flex-1">
                <div className=" flex items-center gap-4">
                  <div className="w-20 h-20 bg-purple-950"></div>
                  <p className="text-xl flex items-center font-bold">
                    <span>SHB Da Nang</span>
                  </p>
                </div>
                <div></div>
              </div>
              <div className="col-span-1">
                <div className="bg-purple-950 rounded-b-xl p-4">
                  <div className="text-5xl font-bold text-white flex px-2">
                    <span>0</span>
                    <span>-</span>
                    <span>3</span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative flex justify-end gap-4">
                  <p className="text-xl flex items-center font-bold">
                    <span>SHB Da Nang</span>
                  </p>
                  <div className="w-20 h-20 bg-purple-950"></div>
                </div>
                <div>
                  <ul className="ml-6 mt-4">
                    <li className="mb-2">
                      <span className="flex text-sm font-bold">
                        <img src={ballSmall} className="w-3 mr-1" alt="" />
                        71'
                      </span>
                      <a className="text-sm block">Vũ Viết Duy</a>
                      <a className="text-xs">Trần Văn Hậu (Kiến tạo)</a>
                    </li>
                    <li className="mb-2">
                      <span className="flex text-sm font-bold">
                        <img src={ballSmall} className="w-3 mr-1" alt="" />
                        71'
                      </span>
                      <a className="text-sm block">Vũ Viết Duy</a>
                      <a className="text-xs">Trần Văn Hậu (Kiến tạo)</a>
                    </li>
                    <li className="mb-2">
                      <span className="flex text-sm font-bold">
                        <img src={ballSmall} className="w-3 mr-1" alt="" />
                        71'
                      </span>
                      <a className="text-sm block">Vũ Viết Duy</a>
                      <a className="text-xs">Trần Văn Hậu (Kiến tạo)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
