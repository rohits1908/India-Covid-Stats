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
          
          <li>Hospitals and Beds</li>
          <li>Contact and Helpline</li>
          <li>Notifications</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
