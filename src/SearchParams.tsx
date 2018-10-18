import React from "react";
import { RouteComponentProps } from "@reach/router";
import Search from "./SearchBox";
import { navigate } from "@reach/router";

class SearchParams extends React.Component<
  RouteComponentProps<{ path: string }>
> {
  public handleSearchSubmit() {
    navigate("/");
  }
  public render() {
    return (
      <div className="search-route">
        <Search search={this.handleSearchSubmit} />
      </div>
    );
  }
}

export default SearchParams;
