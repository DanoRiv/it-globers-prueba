import { GET_EMAIL } from "./actions";

const email = [];

const rootReducer = (state = email, { type, payload }) => {
  switch (type) {
    case GET_EMAIL:
      return [...state, payload]
    default:
      return state;
  }
};

export default rootReducer;
