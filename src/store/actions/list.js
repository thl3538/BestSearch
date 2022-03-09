import axios from "axios";

export function fetchPost() {
  return (dispatch, getState) => {
    const headerState = getState().header
    axios.post('http://3.141.23.218:5000/interview/keyword_search', {
      "login_token": "INTERVIEW_SIMPLY2021",
      "search_phrase": headerState.searchVal
    }).then(res => {
      const list = res.data.data.product_trends
      dispatch({
        type: "SET_LIST",
        payload: {
          list
        }
      })
      dispatch({
        type: "SET_STATU",
        payload: {
          loading: false
        }
      })
    })
  }
}