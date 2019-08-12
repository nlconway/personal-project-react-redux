export const ACTION_TYPES = {
  CHANGE_USERNAME: "changeUsername",
  SET_IS_LOADING: "setLoading",
  SEARCH: "setSearch",
  SET_LIST_STATUS: "setListStatus"
};
export const handleChangeUsername = name => ({
  type: ACTION_TYPES.CHANGE_USERNAME,
  payload: name
});
export const handleSearch = () => ({
  type: ACTION_TYPES.SEARCH,
  payload: true
});
export const setListStatus = status => ({
  type: ACTION_TYPES.SET_LIST_STATUS,
  payload: status
});
export const fetchEventsThunk = () => dispatch => {
  //SET
  // dispatch(setIsLoadingCatFacts(true));
  // returnCatFactsData().then(facts => dispatch(setCatFacts(facts);
  // dispatch(setIsLoadingCatFacts(false))));
  dispatch(setListStatus(true));
};
