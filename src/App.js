import {
    BrowserRouter,
    Navigate,
    Routes,
    Route
} from 'react-router-dom';
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import {useSelector} from "react-redux";
import './App.css';
import SignUp from "./pages/SignUp/SignUp";
import ResetAccount from "./pages/ResetAccount/ResetAccount";

function App() {
    const mode = useSelector((state) => state.mode);
  return (
    <div className="app">
      <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Login/>}/>
                  <Route path="/signup" element={<SignUp/>}/>
                  <Route path="/resetAccount" element={<ResetAccount/>}/>
                  <Route path="/home" element={<Home/>}/>
                  <Route path="/profile/:userId" element={<Profile/>}/>
              </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
