import "./sass/App.scss";

import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Main from "./pages/Main";
import { UseContext } from "./contexts/AuthContext";
// import { themes } from "./helpers/Pictures";
import { useState } from "react";

const App = () => {
  const [appcontext, setAppcontext] = useState("");
  return (
    <UseContext.Provider value={{ appcontext, setAppcontext }}>
      <div className="app__body">
        <Header />
        <Main />
        <Footer />
      </div>
    </UseContext.Provider>
  );
};

export default App;
