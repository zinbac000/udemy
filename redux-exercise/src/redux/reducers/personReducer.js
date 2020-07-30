import personAction from "../actions/personAction";

const intialState = {
  persons: []
};

const personReducer = (state = intialState, action) => {
  if (action.type === personAction.ADD_PERSON) {
    return { persons: [...state.persons, action.payload] };
  }
  return state;
};

export default personReducer;
