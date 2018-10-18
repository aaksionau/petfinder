import React from "react";
import { Link } from "@reach/router";

class NavBar extends React.Component {
  public render() {
    return (
      <header>
        <Link to="/">Adopt me!</Link>
        <Link to="/search-params">
          <i className="fas fa-search" />
        </Link>
      </header>
    );
  }
}
export default NavBar;
