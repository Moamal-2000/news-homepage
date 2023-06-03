import { createContext, useContext, useState } from "react";
import "./App.css";
import Aside from "./Components/Aside";
import Cards from "./Components/Cards";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Overlay from "./Components/Portals/Overlay";

const navContext = createContext();

function App() {
  const [isNavListActive, setIsNavListActive] = useState(false);


  const navData = {
    isNavListActive,
    setIsNavListActive,
  };


  return (
    <div className="App">
      <navContext.Provider value={navData}>
        <Overlay />

        <div className="container">
          <Header />

          <div className="main-content">
            <Main />
            <Aside />
          </div>
          <Cards />
        </div>
      </navContext.Provider>
    </div>
  );
}

export default App;


export const useNavDataContext = () => {
  return useContext(navContext)
}
