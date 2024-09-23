import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";

import styles from "./nav.module.scss";
import LOGO_QT from "@/images/logo-qt.svg";
import LOGO_QT_UPDATE from "@/images/logo-qt-update.svg";
import CHEVRON from "@/images/chevron.svg";
import HAMBURGER from "@/images/hamburger.svg";
import BG_IMG from "@/images/quicktranslates_bg.png";

import { Nav as Content } from "@/content";

const Nav = () => {
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isMobileNavServicesOpen, setIsMobileNavServicesOpen] = useState(false);

  const handleScrollEvent = () => {
    setIsNavScrolled(window.scrollY > 15);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);
    
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  const handleDropdownCloseWithOutsideClick = (e: any) => {
    const parentNode = e.target?.parentNode;

    // if the click is outside of the services dropdown
    // then close the dropdown
    if (
      parentNode.id === styles.servicesDropdown ||
      parentNode.parentNode.id === styles.servicesDropdown
    )
      return;

    setIsDropDownOpen(false);
    document.body.removeEventListener(
      "click",
      handleDropdownCloseWithOutsideClick
    );
  };

  // const handleScrollEvent = (e: Event) => {
  //   const isThresholdReached: boolean = window.scrollY > 15;
  //   setIsNavScrolled(isThresholdReached);
  // };

  useEffect(() => {
    document.body.removeEventListener(
      "click",
      handleDropdownCloseWithOutsideClick
    );

    window.removeEventListener("scroll", handleScrollEvent);

    document.body.addEventListener(
      "click",
      handleDropdownCloseWithOutsideClick
    );

    window.addEventListener("scroll", handleScrollEvent);

    if (isMobileNavOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.backgroundImage = `url(${BG_IMG.src})`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "top center";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.backgroundImage = `url(${BG_IMG.src})`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "top center";
    }
  });

  return (
    <nav id={styles.nav} className={isNavScrolled ? styles.scrolled : ""}>
      <div
        className={`${styles["grid-layout"]} grid-layout container-global-bg-color`}
      >
        <Link
          href="/"
          className={`flex-xleft-ycenter no-text-decoration ${styles["logo-container"]}`}
        >
          <Image
            src={LOGO_QT_UPDATE}
            alt={Content.companyName}
            width={50}
            height={50}
            className="mr-12"
          />
          <p className={`${styles.mb0} paragraph-bold`}>{Content.companyName}</p>
        </Link>

        <hr
          className={`${styles["separator"]} ${isNavScrolled ? "" : "d-none"}`}
        />

        <div className={styles["desktop-links-container"]}>
          <div id={styles.servicesDropdown} className="p-relative">
            <p
              className={`${styles.mb0} btn paragraph-regular flex-center`}
              onClick={() => setIsDropDownOpen(!isDropDownOpen)}
            >
              {Content.servicesTitle}
              <Image
                width={10}
                height={10}
                alt="chevron"
                src={CHEVRON}
                className="ml-8"
              />
            </p>
            <ul
              className={`btn paragraph-regular ${
                isDropDownOpen ? "" : "d-none"
              } ${styles["dropdown-list"]}`}
            >
              {Content.services.map((service, index) => {
                return (
                  <li
                    key={`desktop-${index}-${service.title}`}
                    className={`btn paragraph-regular ${styles["dropdown-item"]}`}
                  >
                    <Link
                      href={service.link}
                      className={`no-text-decoration ${styles.link}`}
                    >
                      {service.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <Link
            href={Content.pricing.link}
            className={`${styles.mb0} btn paragraph-regular ml-24`}
          >
            {Content.pricing.title}
          </Link>
        </div>
        <div className={styles["desktop-login-signup-container"]}>
          <Link
            href={Content.login.link}
            className="btn btn-secondary paragraph-bold ml-24"
          >
            {Content.login.title}
          </Link>
          <Link
            href={Content.signup.link}
            className="btn btn-primary paragraph-bold ml-24"
          >
            {Content.signup.title}
          </Link>          
        </div>

        <div
          className={styles["hamburger-container"]}
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        >
          <Image
            width={26}
            height={18}
            src={HAMBURGER}
            alt={Content.navigationItems}
            className={`${styles["hamburger"]}`}
          />
        </div>

        <div
          className={`${styles["mobile-links-container"]} ${
            isMobileNavOpen ? "" : "d-none"
          } grid-layout container-global-bg-color`}
        >
          <div id={styles.servicesDropdown} className="p-relative py-12">
            <p
              className={`${styles.mb0} paragraph-regular flex-xleft-ycenter pl-0`}
              onClick={() =>
                setIsMobileNavServicesOpen(!isMobileNavServicesOpen)
              }
            >
              {Content.servicesTitle}
              <Image
                width={10}
                height={10}
                alt="chevron"
                src={CHEVRON}
                className="ml-8"
              />
            </p>
            <ul className={`${isMobileNavServicesOpen ? "" : "d-none"} pt-12`}>
              {Content.services.map((service, index) => {
                return (
                  <li
                    key={`mobile-${index}-${service.title}`}
                    className={`${styles["dropdown-item"]} btn paragraph-regular pl-0`}
                    onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                  >
                    <Link
                      href={service.link}
                      className={`no-text-decoration ${styles.link}`}
                    >
                      {service.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <Link
            href={Content.pricing.link}
            className={`${styles.mb0} ${styles.pricing} paragraph-regular pl-0 py-12`}
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          >
            {Content.pricing.title}
          </Link>
          <Link
            href={Content.signup.link}
            className="btn btn-primary d-block paragraph-bold text-center mt-48"
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          >
            {Content.signup.title}
          </Link>
          <Link
            href={Content.login.link}
            className="btn btn-secondary d-block paragraph-bold text-center mt-16"
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          >
            {Content.login.title}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
