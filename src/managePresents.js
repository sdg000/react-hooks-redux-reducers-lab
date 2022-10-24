const initialState = { numberOfPresents: 0 };

export function managePresents(state = initialState, action) {

  // updating state based on action type
  switch (action.type){

    // if action is type: "presents/increase", increment numberOfPresents by 1.
    case "presents/increase":
      return {numberOfPresents: state.numberOfPresents + 1}

      // if no action type is matched, set default numberOfPresents = 0
    default:
      return {numberOfPresents: 0}
  }
}
