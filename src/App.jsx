import { Routes, Route } from "react-router-dom";
import Header from "./components/Common/Header/Header.jsx";
import Navbar from "./components/Common/Navbar/Navbar.jsx";
import Footer from "./components/Common/Footer/Footer.jsx";
import NewsList from "./components/MainPage/NewsList/NewsList.jsx";
import Home from "./components/pages/Home/Home.jsx";
import Movies from "./components/pages/Movies/Movies.jsx";
import Sports from "./components/pages/Sports/Sports.jsx";
import Technology from "./components/pages/Technology/Technology.jsx";
import Health from "./components/pages/Health/Health.jsx";
import TrendingNow from "./components/Common/TrendingNow/TrendingNow.jsx";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <TrendingNow />

      <Routes>
        <Route path="/" element={<NewsList />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/health" element={<Health />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
