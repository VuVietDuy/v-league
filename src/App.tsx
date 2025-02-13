import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PersistGate } from "redux-persist/integration/react";

import Home from "@/pages/Home/Home";
import MatchDetails from "@/pages/Match/MatchDetails/MatchDetails";
import PlayerList from "@/pages/Player/PlayerList";
import PlayerDetail from "@/pages/Player/PlayerDetail";
import Register from "@/pages/Auth/Register";
import Login from "@/pages/Auth/Login";
import Fixtures from "@/pages/Match/Fixtures";
import Tables from "@/pages/Tables/Tables";
import ClubList from "@/pages/Club/ClubList";
import NewsList from "@/pages/News/NewsList";
import NewsDetail from "@/pages/News/NewsDetail";
import ClubDetail from "@/pages/Club/ClubDetail/ClubDetail";
import Results from "@/pages/Match/Results";
import Category from "@/pages/Category/Category";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { persistor, store } from "@/store/store";
import Search from "./pages/Search/Search";

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <div className="font-montserrat">
              <Navbar />
              <Routes>
                <Route path="/search" element={<Search />} />
                <Route path="" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/:tournamentId/fixtures/" element={<Fixtures />} />
                <Route path="/:tournamentId/results/" element={<Results />} />
                <Route path="/:tournamentId/tables/" element={<Tables />} />
                <Route path="/:tournamentId/clubs/" element={<ClubList />} />
                <Route path="/clubs/:clubId/*" element={<ClubDetail />} />
                <Route path="/players" element={<PlayerList />} />
                <Route path="/players/:playerId" element={<PlayerDetail />} />
                <Route path="/news" element={<NewsList />} />
                <Route path="/news/:newsId" element={<NewsDetail />} />
                <Route path="/match/:matchId/*" element={<MatchDetails />} />
                <Route path="/:tournamentId/category" element={<Category />} />
              </Routes>
              <Footer />
            </div>
          </BrowserRouter>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
