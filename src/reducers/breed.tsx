import { Reducer } from "redux";

const breedReducer: Reducer<string> = (state: string = "", action) => {
  if (action.type === "SET_BREED") {
    return action.payload;
  } else {
    return state;
  }
};

export default breedReducer;
