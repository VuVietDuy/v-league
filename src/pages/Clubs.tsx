import React, { useEffect, useState } from "react";
import { IClub } from "../types/club";
import ClubCard from "../components/ClubCard";
import { useParams } from "react-router-dom";
import fetcher from "../api/fetcher";
import HeaderPage from "../components/HeaderPage";

function Clubs() {
  const { tournamentId } = useParams();
  console.log(tournamentId);
  const [clubs, setClubs] = useState<IClub[]>([]);

  useEffect(() => {
    fetcher.get(`seasons/${tournamentId}/clubs`).then((res: any) => {
      console.log(res);
      setClubs(res.data.data);
    });
  }, [tournamentId]);

  return (
    <div>
      <HeaderPage title="Các câu lạc bộ" />
      <div className="container m-auto mb-32 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 xl:px-6">
          {clubs.map((club, index) => (
            <ClubCard club={club} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clubs;
