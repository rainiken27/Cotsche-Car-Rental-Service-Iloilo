import { useLocation } from "react-router-dom";
import Button from "./Button";
import logo from "../assets/cotsche_vector.svg";
import { navigation } from "../constants";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Overlay from "./Overlay";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [overlayVisibility, setOverlayVisibility] = useState(false);


  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  const openOverlay = () => {
    setOverlayVisibility(true);
    disablePageScroll();
  }

  const closeOverlay = () => {
    setOverlayVisibility(false);
    enablePageScroll();
  }

  return (
    <div
      className={`${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      } fixed top-0 left-0 w-full z-50 border-b border-n-6`}
    >
      <div className="flex items-center px-1 lg:px-1.5 xl:px-2 max-lg:py-0.8">
        <Link className="block w-[12.5rem]" to="/#hero">
          <img src={logo} width={200} />
        </Link>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[3.8rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            <div className="absolute -top-32 text-white text-2xl hover:text-color-1 transition-colors duration-200">
              <a href="https://www.facebook.com/bestcarrentaliloilo/"
              target="_blank">
                Contact Us
              </a>
            </div>
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl text-n-1 transition-colors hover:text-color-3 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-5 py-5 lg:-mr-0.25 lg:text-base lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:hover:text-n-1`}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        <Button

          isOverlayButton={true}
          onClick={openOverlay}
        >
          Contact Us
        </Button>

        <Button  onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
      {overlayVisibility && <Overlay onClose={closeOverlay} />}
    </div>
  );
};

export default Header;
