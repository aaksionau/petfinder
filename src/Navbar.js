import React from "preact-compat";
import { Link } from "preact-router";

class NavBar extends React.Component {
  state = {
    frequency: 10
  };
  halfFrequency = () => {
    this.setState({ frequency: this.state.frequency / 2 });
  };
  render() {
    return (
      <header>
        <Link href="/">Adopt me!</Link>
        <Link href="/search-params">
          <i className="fas fa-search" />
        </Link>
      </header>
    );
  }
}
export default NavBar;
