import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NaverMap from "./pages/NaverMap";
import LoginPage from "./pages/LoginPage";
import SeniorMainPage from "./pages/SeniorMainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/senior" element={<SeniorMainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/map" element={<NaverMap />} />
    </Routes>
  );
}

export default App;
