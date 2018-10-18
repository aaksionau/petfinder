import React from "react";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import store from "./store";
import NavBar from "./Navbar";

import Results from "./Results";
import Details from "./Details";
import SearchParams from "./SearchParams";

class App extends React.Component {
  render() {
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

export default App;
