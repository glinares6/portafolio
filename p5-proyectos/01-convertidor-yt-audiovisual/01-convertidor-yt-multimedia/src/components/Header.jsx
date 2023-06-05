import { Link } from "react-router-dom";
import "../scss/index.scss";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="menu">
          <div className="items__menu">
            <h1>Online Video Converter </h1>
          </div>
          <div>
            <ul className="items__menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/idioma">español</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
