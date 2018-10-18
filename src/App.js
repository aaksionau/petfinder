import React from "preact-compat";
import { render } from "preact-compat";
import { Router } from "preact-router";
import { Provider } from "preact-redux";
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

render(<App />, document.getElementById("root"));
