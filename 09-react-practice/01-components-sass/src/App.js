import React from "react";
import "./sass/App.scss";

import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Main from "./pages/Main";

const App = () => {
  return (
    <div className="app__body">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
