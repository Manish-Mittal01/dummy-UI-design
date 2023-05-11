import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import SignIn from "./screens/signIn";
import Dashboard from "./screens/dashboard";
import Timeout from "./Comps/timeOut";
import { Grid } from "@mui/material";
import Home from "./screens/home";
import CommonHeader from "./Comps/commonHeader";
import { Activity } from "./screens/activity";

const Wrapper = ({ Comp }) => {
  return (
    <div style={{ marginLeft: "324px" }}>
      <Comp />
    </div>
  );
};

function App() {
  const { pathname } = useLocation();
  return (
    <div style={{ height: "100vh", overflow: "auto" }}>
      {pathname !== "/sign-in" && <Dashboard />}
      {pathname !== "/sign-in" && <Wrapper Comp={CommonHeader} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/activity" element={<Wrapper Comp={Activity} />} />
        <Route path="/timeout" element={<Timeout />} />
      </Routes>
    </div>
  );
}

export default App;
