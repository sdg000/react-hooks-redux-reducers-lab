// initial state should be an object with a key, friends, set to an empty array.
// state = {friends: []}

export function manageFriends(state, action) {

  // updating state based on action type
  switch (action.type) {

  // if action is type: "friends/add", add new friend Object to state Array by;
      // -returning friends Object with value:
      // (old friends objects which has been copied using spread operator
      //  plus new friend object added using (action.payload))

  case "friends/add":
    return {
      friends: [...state.friends, action.payload]
    }

  // if action is type: "friends/remove", find and remove friend from friends Object using ID
  // filter friends Object and return all objects except one mathing id of (friend to be removed)
  
  case "friends/remove":
    return {
      friends: state.friends.filter((friend) => friend.id !== action.payload)
    }

  // if no action type is matched, return all friends
  default:
    return state
  }

}
