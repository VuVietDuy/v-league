import { BrowserRouter, Routes, Route } from "react-router-dom";
import Players from "./pages/Players";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Results from "./pages/Results";
import Tables from "./pages/Tables";
import Clubs from "./pages/Clubs";
import Home from "./pages/Home";
import News from "./pages/News";
import Login from "./pages/Login";
import DetailsClub from "./pages/DetailsClub";

function App() {
  return (
    <BrowserRouter>
      <div className="font-montserrat">
        <Navbar />
        <div className="pt-14">
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/results" element={<Results />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/clubs/:id*" element={<DetailsClub />} />
            <Route path="/players" element={<Players />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
