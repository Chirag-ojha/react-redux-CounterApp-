const value=0;
export const incDec = (state=value,action) => {
  switch (action.type) {
    case "Increament":
      return state + 1;
    case "Decreament":
      return state - 1;
    default:
      return state;
  }
};
