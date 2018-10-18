import { combineReducers, Reducer } from "redux";
import locationReducer from "./location";
import animalReducer from "./animal";
import breedReducer from "./breed";
import breedsReducer from "./breeds";

interface ApplicationState {
  location: string;
  animal: string;
  breed: string;
  breeds: string[];
}
const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  location: locationReducer,
  animal: animalReducer,
  breed: breedReducer,
  breeds: breedsReducer
});

export default reducers;
export { ApplicationState };
