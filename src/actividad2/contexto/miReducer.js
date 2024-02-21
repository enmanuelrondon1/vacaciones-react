import { types } from "./types";

export const miReducer = (state, action) => {

  switch (action.type) {

    case types.login:
      return {
        logeado:true,
        usuario:action.payload
      };

    case types.logout:
      return {
        logeado:false,
        usuario:null
      };

    default:
      return state;
  }
};
