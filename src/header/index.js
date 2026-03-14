import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext, socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  // PERBAIKAN 1: Set default ke false (menu tertutup saat awal)
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link className="navbar-brand nav_ac" to="/">
            {logotext}
          </Link>
          <div className="d-flex align-items-center">
            <Themetoggle />
            <button className="menu__button nav_ac" onClick={handleToggle}>
              {/* PERBAIKAN 2: Jika active tampilkan Close, jika tidak tampilkan Grabber */}
              {isActive ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>

        {/* PERBAIKAN 3: Hapus tanda seru (!). Pakai isActive langsung untuk trigger menu__opend */}
        <div className={`site__navigation ${isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/">Home</Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/portfolio">Portfolio</Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/about">About</Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
              <a href={socialprofils.linkedin}>LinkedIn</a>
              <a href={socialprofils.github}>Github</a>
            </div>
            <p className="copyright m-0">copyright __ {logotext}</p>
          </div>
        </div>
      </header>
      <div className="br-top"></div><div className="br-bottom"></div>
      <div className="br-left"></div><div className="br-right"></div>
    </>
  );
};

export default Headermain;