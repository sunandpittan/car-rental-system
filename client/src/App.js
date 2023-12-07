import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Pnf from "./Components/Pnf";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import Navbar1 from "./Components/Navbar1";
import Panel from "./Components/Panel";
import Dashboard from "./Components/Dashboard";
import History from "./Components/History";
import Account from "./Components/Account";
import Viewvehicles from "./Components/Viewvehicles";
import Addvehicle from "./Components/Addvehicle";
import Updatevehicle from "./Components/Updatevehicle";
import Viewusers from "./Components/Viewusers";
import Viewreservations from "./Components/Viewreservations";
import Vehicleslist from "./Components/Vehicleslist";
import Reservevehicle from "./Components/Reservevehicle";
import Updatereservation from "./Components/Updatereservation";

function App() {
  const [userInfo, setUserInfo] = useState(() => {
    return JSON.parse(localStorage.getItem("userInfo"));
  });

  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }, [userInfo]);

  return (
    <div>
      <Navbar1 userInfo={userInfo} />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/signin"
            element={<Signin setUserInfo={setUserInfo} />}
          />

          <Route path="/panel" element={<Panel />} />
          <Route
            path="/managevehicles"
            element={
              <>
                <Addvehicle />
                <Viewvehicles />
              </>
            }
          />
          <Route path="/updatevehicle/:id" element={<Updatevehicle />} />
          <Route path="/reservations" element={<Viewreservations />} />
          <Route path="/users" element={<Viewusers />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/vehicleslist" element={<Vehicleslist />} />
          <Route
            path="/reservevehicle/:id"
            element={<Reservevehicle userInfo={userInfo} />}
          />
          <Route
            path="/updatereservation/:id"
            element={<Updatereservation userInfo={userInfo} />}
          />
          <Route path="/history" element={<History userInfo={userInfo} />} />
          <Route path="/account" element={<Account userInfo={userInfo} />} />

          <Route path="*" element={<Pnf />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
