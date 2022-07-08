const userReducerFunction = (userState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...userState,
        userDetails: [...userState.userDetails, action.payload],
      };
      break;

    default:
      break;
  }
};
