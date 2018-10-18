import { Reducer } from "redux";

const breedsReducer: Reducer<string[]> = (state: string[] = [], action) => {
  if (action.type === "SET_BREEDS") {
    return action.payload;
  } else {
    return state;
  }
};

export default breedsReducer;
