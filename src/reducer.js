export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //below the token is hardcoded for development purpose, make it null once dev finised
  // token:
  //   "BQBhEt2EjQajKqu4bq4FRpG5wWsPjekvmm_eatnh5XQT0YmSwCmtK9xPJ07snxwjZ3XIYR4XfzSmqq3I2bq_AOGL3CjYJSyIWKVx3EMSbcTQClwJ0_RGC6QXsP8wleuvNFjA_-b32LuXAWcaF6u_UvbjTIhgUa8vRpt2hMPGSfXnarcEg6pasL1CH5Mx3K8Aa7DHdYz3IYVM9X8AOt0z",
};

const reducer = (state, action) => {
  // console.log(action);

  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "SET_TOKEN":
      return { ...state, token: action.token };
    case "SET_PLAYLISTS":
      return { ...state, playlists: action.playlists };
    case "SET_DISCOVER_WEEKLY":
      return { ...state, discover_weekly: action.discover_weekly };
    default:
      return state;
  }
};

export default reducer;
