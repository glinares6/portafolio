import React from "react";

const Navbar = () => {
  return (
    <div>
      <ul className="nav__header">
        <li className="item__nav">
          <a href="#">Inicio</a>
        </li>
        <li className="item__nav">
          <a href="#">Quienes somos</a>
        </li>
        <li className="item__nav">
          <a href="#">Productos</a>
        </li>
        <li className="item__nav">
          <a href="#">Contactos</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
