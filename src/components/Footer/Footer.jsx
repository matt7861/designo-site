import { useLocation } from "react-router-dom";
import logo from "../../assets/images/logo-light.svg";
import NavLinks from "../NavLinks/NavLinks";
import facebook from "../../assets/images/facebook.svg";
import youtube from "../../assets/images/youtube.svg";
import twitter from "../../assets/images/twitter.svg";
import pinterest from "../../assets/images/pinterest.svg";
import instagram from "../../assets/images/instagram.svg";
import FooterCTA from "../FooterCTA/FooterCTA";
import "./Footer.scss";

const Footer = () => {
  const location = useLocation().pathname;
  const isContact = location !== "/contact";

  return (
    <>
      {isContact && <FooterCTA />}
      <footer className={`footer ${isContact && "footer--padding"}`}>
        <div className="container">
          <div className="footer__nav flex justify-between">
            <img className="site-header__logo" src={logo} alt="Designo Logo" />

            <NavLinks color="light" />
          </div>
          <div className="grid grid-cols-12 gap-4 footer__bottom">
            <div className="col-span-12 lg:col-span-4">
              <p>
                <b>Designo Central Office </b>
                <br />
                3886 Wellington Street <br />
                Toronto, Ontario M9C 3J5
              </p>
            </div>
            <div className="col-span-12 lg:col-span-3">
              <p>
                <b>
                  Contact Us (Central Office) <br />
                  P : +1 253-863-8967 <br />M : contact@designo.co
                </b>
              </p>
            </div>
            <div className="col-span-12 lg:col-span-5 footer__socials">
              <a href="#">
                <img src={facebook} alt="Facebook" />
              </a>
              <a href="#">
                <img src={youtube} alt="Youtube" />
              </a>
              <a href="#">
                <img src={twitter} alt="Twitter" />
              </a>
              <a href="#">
                <img src={pinterest} alt="Pinterest" />
              </a>
              <a href="#">
                <img src={instagram} alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
