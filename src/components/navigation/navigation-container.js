import React from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const NavigationComponent = (props) => {
  const dynamicLink = (route, linkText) => {
    return (
      <div className="nav-link-wrapper">
        <NavLink to={route}>{linkText}</NavLink>
      </div>
    );
  };

  const handleSignOut = () => {
    axios
      .delete("https://api.devcamp.space/logout", { withCredentials: true })
      .then((response) => {
        if (response.status === 200) {
          props.history.push("/");
          props.handleSuccessfulLogout();
        }
        return response.data;
      })
      .catch((error) => {
        console.log("Error signing out", error);
      });
  };

  return (
    <div className="nav-wrapper">
      <div className="left-side">
        <div className="nav-link-wrapper">
          <NavLink exact to="/">
            Home
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/about-me">About</NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/blog">Blog</NavLink>
        </div>

        {props.loggedInStatus === "LOGGED_IN"
          ? dynamicLink("/portfolio-manager", "portfolio manager")
          : null}
      </div>

      <div className="right-side">
        <div className="wow">
          <div className="nav-link-wrapper">
            {props.loggedInStatus === "LOGGED_IN" ? (
              <a onClick={handleSignOut}>Sign Out</a>
            ) : null}
          </div>

          <div className="nLW">Eureka Inc</div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(NavigationComponent);
