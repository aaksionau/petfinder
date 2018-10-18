import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers, { ApplicationState } from "./reducers";
import { History } from "history";

export default function configureStore(
  initialState: ApplicationState
): Store<ApplicationState> {
  // create the composing function for our middlewares
  const composeEnhancers = composeWithDevTools({});

  // We'll create our store with the combined reducers and the initial Redux state that
  // we'll be passing from our entry point.
  return createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}
