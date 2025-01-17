import React from "react";
import { Link } from "react-router-dom";
import img1 from "../Assets/home-content.png";

function Home() {
  return (
    <>
      <div className="home-div">
        <header
          id="header"
          className="d-flex flex-column justify-content-center"
        >
          <nav id="navbar" className="navbar nav-menu">
            <ul>
              <li>
                <Link to="/" className="nav-link scrollto active">
                  <i className="uil uil-home"></i> <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/satTrack" className="nav-link scrollto">
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
        <section>
          <div className="content-1">
            <div className="col-lg-9 col-sm-9 m-4">
              ​
              <span className="home-content">
                Clean Magnetic Fusion for a Sustainable Future
              </span>
              <br />{" "}
              <span
                className="home-content-web-name"
              >
                satTrack
              </span>
            </div>
          </div>
          <div className="content-2 container-fluid pt-5">
            <div className="row project-content-div">
              <div className="project-desc">
                <div className="img">
                  <img src={img1} width="700px" height="800px" />
                </div>
                <div className="project-content">
                  Magnetic reconnection is a fundamental phenomenon in physics
                  that involves the interaction and reorganization of magnetic
                  fields in regions of space. This process can be best
                  understood as a "connection shift" in magnetic fields, where
                  magnetic field lines break and then reconnect in new
                  configurations. This reorganization of magnetic fields
                  releases a large amount of energy, which makes it a process of
                  great relevance in various areas of physics and astrophysics.
                  <br />
                  This project combines research in the physics of magnetic
                  reconnection with the aim of creating a sustainable and clean
                  energy source for the future, which could have a significant
                  impact on protecting the environment and combating climate
                  change.
                </div>
              </div>
            </div>
            <footer className="mt-4 footer container-fluid">
              <div class="row mb-4 mt-4 footer-section-1">
                <div className="col-lg-2 footer-web-name">
                  <h1 className="mb-3">satTrack</h1>
                </div>
                <div class="col-lg-10">
                  <form>
                    <h5>Subscribe to our newsletter</h5>
                    <p>Monthly digest of whats new and exciting from us.</p>
                    <div class="d-flex gap-2">
                      <label for="newsletter1" class="visually-hidden">
                        Email address
                      </label>
                      <input
                        id="newsletter1"
                        type="text"
                        class="form-control email"
                        placeholder="Email address"
                      />
                      <button class="btn btn-primary" type="button">
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div class="d-flex justify-content-between py-4 border-top w-100">
                <p>© 2021 Company, Inc. All rights reserved.</p>
                <ul class="list-unstyled d-flex">
                  <li class="ms-3">
                    <a class="link-dark" href="#">
                      <i class="uil uil-twitter"></i>
                    </a>
                  </li>
                  <li class="ms-3">
                    <a class="link-dark" href="#">
                      <i class="uil uil-instagram-alt"></i>
                    </a>
                  </li>
                  <li class="ms-3">
                    <a class="link-dark" href="#">
                      <i class="uil uil-facebook"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </footer>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
