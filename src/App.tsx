import { Router } from "@reach/router";
import { render } from "react-dom";
import React from "react";
import NavBar from "./Navbar";
import { Provider } from "react-redux";
import store from "./store";

import Results from "./Results";
import Details from "./Details";
import SearchParams from "./SearchParams";

class App extends React.Component {
  public render() {
    return (
      <div>
        <NavBar />
        <Provider store={store}>
          <Router>
            <Results path="/" />
            <Details path="/details/:id" />
            <SearchParams path="/search-params/" />
          </Router>
        </Provider>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
