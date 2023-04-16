import React from "react";
import { Link } from "react-router-dom";
import imgege from "../img/1.jpg";

const HOME = () => {
  return (
    <div>
      <header>
        <nav>
          <h1>mmkmkmk</h1>

          <ul>
            <li>
              <Link to={"/second"}>jjjjj</Link>
            </li>
            <li>
              <Link to={"/second"}>jjjjj</Link>
            </li>
            <li>
              <Link to={"/second"}>jjjjj</Link>
            </li>
            <li>
              <Link to={"/second"}>jjjjj</Link>
            </li>
            <li>
              <Link to={"/second"}>jjjjj</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="block">
          <div className="blockImage">
           
           <h3>lolololo</h3>
            <img className="img" src={imgege} alt="" />
          </div>
        </div>
        <div className="block">
          <div className="blockImage">
            <h3>lolololo</h3>
            <img className="img" src={imgege} alt="" />
          </div>
        </div>
        <div className="block">
          <div className="blockImage">
            <h3>lolololo</h3>
            <img className="img" src={imgege} alt="" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HOME;
