import {
  SET_MAP_DATA,
  LOADING
} from "./types";

import axios from "axios";

const REACT_APP_HERE_MAP_API_KEY = "0bNcsVhBQj0_tvmM63iURT7dO6ZnW277UUrwtQt36EA";
const setMapData =() =>async (dispatch:any) => {
    try {
      dispatch({
        type: LOADING,
        payload: true,
      });
      const response = await axios.get(
        `https://discover.search.hereapi.com/v1/discover?apikey=${REACT_APP_HERE_MAP_API_KEY}&q=restaurant&in=circle:23.78031,90.40707;r=3000`
      );
        dispatch({
          type:SET_MAP_DATA,
          payload:response.data.items
        })
      dispatch({
        type: LOADING,
        payload: false,
      });
    } catch (error:any) {
      console.log(error.message);
      dispatch({
        type: LOADING,
        payload: false,
      });
    }
  };

  export {setMapData};
