import { combineReducers } from "redux";
import location from "./location";
import breed from "./breed";
import breeds from "./breeds";
import animal from "./animal";

export default combineReducers({
  location,
  animal,
  breed,
  breeds
});
