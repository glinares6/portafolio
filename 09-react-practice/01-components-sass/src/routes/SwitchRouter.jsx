import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";

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
import Capitulo6 from "../pages/Capitulo6";
import Capitulo7 from "../pages/Capitulo7";
import LoginExample from "../pages/LoginExample";
import Capitulo8 from "../pages/Capitulo8";
import VisitGallery from "../pages/VisitGallery";
import TomatoCrimson from "../pages/TomatoCrimson";
import ModalGallery from "../components/ModalGallery";

// import Login from "../pages/Login";
// import LoginPage from "../pages/LoginPage";
// import PrivateRoute from "./PrivateRoute";
// import ProtectedPage from "../pages/ProtectedPage";
// import PublicPage from "../pages/PublicPage";

const SwitchRouter = () => {
  let location = useLocation();

  let background = location.state && location.state.background;
  return (
    <>
      <Switch location={background || location}>
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
        <Route path="/capitulo6">
          <Capitulo6 />
        </Route>
        <Route path="/capitulo7">
          <Capitulo7 />
        </Route>
        <Route path="/capitulo8">
          <Capitulo8 />
        </Route>
        <Route path="/visitgallery">
          <VisitGallery />
        </Route>
        <Route path="/img/:id">
          <TomatoCrimson />
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
        <Route path="/loginexample">
          <LoginExample />
        </Route>
      </Switch>

      {background && (
        <Route path="/img/:id">
          <ModalGallery />
        </Route>
      )}
    </>
  );
};

export default SwitchRouter;
