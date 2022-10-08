import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Info from "../pages/Info";
import Landing from "../pages/Landing";

import Capitulo1 from "../pages/Capitulo1";
import Capitulo2 from "../pages/Capitulo2";
import Capitulo3 from "../pages/Capitulo3";
// import Login from "../pages/Login";

import Somos from "../pages/Somos";
import Productos from "../pages/Productos";
import Contactos from "../pages/Contactos";
import Capitulo4 from "../pages/Capitulo4";
// import C5 from "../components/C5";
import Capitulo5 from "../pages/Capitulo5";
// import LoginPage from "../pages/LoginPage";
// import PrivateRoute from "./PrivateRoute";
// import ProtectedPage from "../pages/ProtectedPage";
// import PublicPage from "../pages/PublicPage";

const SwitchRouter = () => {
  return (
    <Switch>
      <Route path="/inicio">
        <Landing />
      </Route>
      <Route path="/info/:id" component={Info} />
      <Route path="/capitulo1/:id">
        <Capitulo1 />
      </Route>
      <Route path="/capitulo1">
        <Redirect to="/0" />
      </Route>
      <Route path="/capitulo2/:id">
        <Capitulo2 />
      </Route>
      <Route path="/capitulo3">
        <Capitulo3 />
      </Route>
      <Route path="/capitulo4/:id">
        <Capitulo4 />
      </Route>
      <Route path="/capitulo4">
        <Redirect to="/0" />
      </Route>
      <Route path="/capitulo5">
        <Capitulo5 />
      </Route>
      <Route path="/somos">
        <Somos />
      </Route>
      <Route path="/productos">
        <Productos />
      </Route>
      <Route path="/contactos">
        <Contactos />
      </Route>
    </Switch>
  );
};

export default SwitchRouter;
