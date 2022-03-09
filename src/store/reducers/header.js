const initState = {
  searchVal: "",
  loading: false
};
export default function headerReducer(state = initState, action) {
  switch (action.type) {
    case "SET_SEARCH_VAL":
      return {
        ...state,
        ...action.payload
      };
    case "SET_STATU":
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}
