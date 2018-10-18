import { Reducer } from "redux";

const animalReducer: Reducer<string> = (state: string = "", action) => {
  if (action.type === "SET_ANIMAL") {
    return action.payload;
  } else {
    return state;
  }
};

export default animalReducer;
