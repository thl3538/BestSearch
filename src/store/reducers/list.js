const initState = {
  list: []
};
export default function listReducer(state = initState, action) {
  console.log("执行")
  switch (action.type) {
    case "SET_LIST":
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
