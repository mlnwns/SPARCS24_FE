import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NaverMap from "./pages/NaverMap";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="map" element={<NaverMap />} />
    </Routes>
  );
}

export default App;
