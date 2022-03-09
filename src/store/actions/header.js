export function setSearchInfo(data) {
  return {
    type: "SET_SEARCH_VAL",
    payload: {
      ...data
    }
  };
}

export function updateLoading(loading) {
  return {
    type: "SET_STATU",
    payload: {
      ...loading
    }
  }
}
