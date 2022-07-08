const employeeReducerFunction = (employeeState, action) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return {
        ...employeeState,
        employeeDetails: [...employeeState.employeeDetails, action.payload],
      };

      break;

    default:
      break;
  }
};
