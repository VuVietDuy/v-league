import { BrowserRouter, Routes, Route } from "react-router-dom";
import Players from "./pages/Players";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Results from "./pages/Results";
import Tables from "./pages/Tables";
import Clubs from "./pages/Clubs";
import Home from "./pages/Home/Home";
import News from "./pages/News";
import Login from "./pages/Login";
import Fixtures from "./pages/Fixtures";
import NewsDetails from "./pages/NewsDetails";
import DetailsClub from "./pages/DetailsClub/DetailsClub";
import MatchDetails from "./pages/MatchDetails/MatchDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="font-montserrat">
        <Navbar />
        <div>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/:tournamentId/fixtures/" element={<Fixtures />} />
            <Route path="/:tournamentId/results/" element={<Results />} />
            <Route path="/:tournamentId/tables/" element={<Tables />} />
            <Route path="/:tournamentId/clubs/" element={<Clubs />} />
            <Route path="/clubs/:clubId/*" element={<DetailsClub />} />
            <Route path="/players" element={<Players />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:newsId" element={<NewsDetails />} />
            <Route path="/match/:matchId" element={<MatchDetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
