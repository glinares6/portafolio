import React from "react";
import { Link } from "react-router-dom";

const Articulos = () => {
  return (
    <div className="article__main">
      <ul className="navlink__main">
        <li>
          <Link to="/capitulo1/0">CAPITULO I</Link>
        </li>
        <li>
          <Link to="/capitulo2/lo-que-llevaremos-consigo">CAPITULO II</Link>
        </li>
        <li>
          <Link to="/capitulo3">CAPITULO III</Link>
        </li>
        <li>
          <Link to="/capitulo4/0">CAPITULO IV</Link>
        </li>
        <li>
          <Link to="/capitulo5/ ">CAPITULO V</Link>
        </li>
        <li>
          <Link to="/capitulo6">CAPITULO VI</Link>
        </li>
        <li>
          <Link to="/capitulo7">CAPITULO VI</Link>
        </li>
      </ul>
    </div>
  );
};

export default Articulos;
