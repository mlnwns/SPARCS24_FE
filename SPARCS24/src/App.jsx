import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NaverMap from "./pages/NaverMap";
import LoginPage from "./pages/LoginPage";
import SeniorMainPage from "./pages/SeniorMainPage";
import RegisterPage from "./pages/RegisterPage";
import ParentRegisterPage from "./pages/ParentRegisterPage";
import SeniorRegisterPage from "./pages/SeniorRegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/senior" element={<SeniorMainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/map" element={<NaverMap />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="/register/parent" element={<ParentRegisterPage />} />
      <Route path="/register/senior" element={<SeniorRegisterPage />} />
    </Routes>
  );
}

export default App;
