import {
    BrowserRouter,
    Navigate,
    Routes,
    Route
} from 'react-router-dom';
import Login from "./scences/loginPage/Login";
import Home from "./scences/homePage/Home";
import Profile from "./scences/profilePage/Profile";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/profile/:userId" element={<Profile/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
