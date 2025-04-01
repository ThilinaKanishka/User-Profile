import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import RegisterPage from "./components/Profile/RegisterPage";
import LoginPage from "./components/Profile/LoginPage";
import UserProfile from "./components/Profile/UserProfile";
import PersonalizGoals from "./components/Profile/PersonalizGoals";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Routes Section */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/RegisterPage" element={<RegisterPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/PersonalizGoals" element={<PersonalizGoals />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
