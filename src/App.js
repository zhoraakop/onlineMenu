import { useState, useEffect } from "react";
import Header from "./components/Header/Header.js";
import Information from "./components/Information/Information.js";
import Popup from "./components/Popup/Popup.js";
import { Routes, Route } from "react-router";
import Menu from "./components/Menu/Menu.js";
import Bar from "./components/Bar/Bar.js";
import { useLocation } from "react-router";
import Lunch from "./components/Lunch/Lunch.js";
import Loading from "./components/Loading/Loading.js";

function App() {
  const [isPopup, setIsPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const isBarPage = location.pathname === "/bar";

  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  function handleOpenClick() {
    setIsPopup(true);
  }

  function handleCloseClick() {
    setIsPopup(false);
  }

  return (
    <div className={!isBarPage ? "app" : "app app_white"}>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Header click={handleOpenClick} />
          <Routes>
            <Route path="/" element={<Menu />}></Route>
            <Route path="/bar" element={<Bar />}></Route>
            <Route path="/lunch" element={<Lunch />}></Route>
          </Routes>
        </div>
      )}
      <Information isLoading={isLoading} />
      <Popup open={isPopup} click={handleCloseClick} />
    </div>
  );
}

export default App;
