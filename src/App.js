import React from "react";
import Loadable from "react-loadable";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import store from "./store";
import NavBar from "./Navbar";

const LoadableDetails = Loadable({
  loader: () => import("./Details"),
  loading() {
    return <h1>Loading details Component...</h1>;
  }
});
const LoadableResults = Loadable({
  loader: () => import("./Results"),
  loading() {
    return <h1>Loading details Component...</h1>;
  }
});
const LoadableSearchParams = Loadable({
  loader: () => import("./SearchParams"),
  loading() {
    return <h1>Loading details Component...</h1>;
  }
});

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Provider store={store}>
          <Router>
            <LoadableResults path="/" />
            <LoadableDetails path="/details/:id" />
            <LoadableSearchParams path="/search-params/" />
          </Router>
        </Provider>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
