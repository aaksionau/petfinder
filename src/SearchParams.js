import React from "react";
import Search from "./SearchBox";
import { navigate } from "@reach/router";

class SearchParams extends React.Component {
  handleSearchSubmit() {
    navigate("/");
  }
  render() {
    return (
      <div className="search-route">
        <Search search={this.handleSearchSubmit} />
      </div>
    );
  }
}

export default SearchParams;
