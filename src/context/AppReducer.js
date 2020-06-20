export default (state, action) => {
  switch (action.type) {
    case "GET_TRAIN":
      return {
        ...state,
        trains: action.payload,
        loading: false,
        searched: true,
        error: "",
      };
    case "GET_TRAIN_ERROR":
      return {
        ...state,
        trains: [],
        loading: false,
        searched: true,
        error: action.payload,
      };
    default:
      return state;
  }
};
