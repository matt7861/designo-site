import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import NavLinks from "../NavLinks/NavLinks";

const NavBar = () => {
  return (
    <header className="site-header">
      <div className="container flex justify-between">
        <Link to="/">
          <img className="site-header__logo" src={logo} alt="Designo Logo" />
        </Link>

        <NavLinks color="dark" />
      </div>
    </header>
  );
};

export default NavBar;
