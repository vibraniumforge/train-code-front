export default (state, action) => {
  switch (action.type) {
    case "GET_TRAIN":
      return {
        ...state,
        trains: action.payload,
        loading: false,
      };
    case "GET_TRAIN_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
