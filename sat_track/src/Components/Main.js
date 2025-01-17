import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
function Main() {
  const typedElement = useRef(null); // Reference for the typed element

  useEffect(() => {
    const options = {
      strings: ["ABCD", "EFGH", "IJKL", "MNOP"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    // Clean up the Typed instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <header id="header" className="d-flex flex-column justify-content-center">
        <nav id="navbar" className="navbar nav-menu">
          <ul>
            <li>
              <Link to="/" className="nav-link scrollto">
                <i className="uil uil-home"></i> <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/satTrack" className="nav-link scrollto active">
                <i class="uil uil-search-alt"></i> <span>satTrack</span>
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link scrollto">
                <i className="uil uil-user"></i> <span>About</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section id="hero" className="d-flex flex-column justify-content-center">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter Satellite Name"
            className="search-box"
          />
          <input type="button" value="Search" className="search-btn" />
        </div>
        <div className="container" data-aos="zoom-in" data-aos-delay="100">
          <h1>satTrack</h1>
          <p>
            Lorem ipsum dolor sit amet{" "}
            <span ref={typedElement} className="typed"></span>
          </p>
        </div>
      </section>
    </>
  );
}

export default Main;
