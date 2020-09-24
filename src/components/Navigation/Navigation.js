import React from "react";
import classes from "./Navigation.module.css";
import {Link} from 'react-router-dom';

const Navigation = () => {
  
  return (
    <div className={classes.home}>
      <nav>
        <Link to="/">
        <span className={classes.covid}>
          Covid19 <br /> India
        </span>
        </Link>
        <ul className={classes.navLinks}>
          <Link to="/testing-stats">
            <li>Testing Stats</li>
          </Link>
          
          <Link to="/hospital-beds">
            <li>Hospitals and Beds</li>
          </Link>
          <Link to="/helpline-info">
            <li>Contact and Helpline</li>
          </Link>
          <Link to = "/notifications">
            <li>Notifications</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
