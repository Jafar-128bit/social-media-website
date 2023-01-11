import {
    BrowserRouter,
    Navigate,
    Routes,
    Route
} from 'react-router-dom';
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import {useMemo} from "react";
import {useSelector} from "react-redux";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import { themeSettings } from "./theme";

function App() {
    const mode = useSelector((state) => state.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
          <ThemeProvider theme={theme}>
              <CssBaseline/> {/*CSS Reset for mui theme*/}
              <Routes>
                  <Route path="/" element={<Login/>}/>
                  <Route path="/home" element={<Home/>}/>
                  <Route path="/profile/:userId" element={<Profile/>}/>
              </Routes>
          </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
