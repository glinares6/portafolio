import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const Capitulo5 = () => {
  let { url } = useRouteMatch();
  return (
    <div style={{ padding: " 0px 20px" }}>
      <h1>Capitulo5</h1>
      <Link
        to="/inicio"
        style={{
          background: "blue",
          color: "white",
          padding: "10px 25px",
          borderRadius: "15px",
        }}
      >
        Regresar
      </Link>
      <hr />

      <h1>Sidebar</h1>
      <div className="capitulo5__sidebar">
        <div className="item__sidebar">
          <ul>
            <li>
              <Link to={`${url}/`}>Home</Link>
            </li>
            <li>
              <Link to={`${url}/bubblegum`}>Bubblegum</Link>
            </li>
            <li>
              <Link to={`${url}/shoelaces`}>Shoelaces</Link>
            </li>
          </ul>

          <h1>primera pagina</h1>
        </div>
        <div className="item__sidebar">
          <h1>segunda pagina</h1>
        </div>
      </div>
    </div>
  );
};

export default Capitulo5;
