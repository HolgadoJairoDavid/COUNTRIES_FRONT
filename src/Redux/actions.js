import {
  GETALLCOUNTRIES,
  GETCOUNTRYBYID,
  GETALLCOUNTRIESBYNAME,
  GETALLACTIVITIES,
  DELETEACTIVITY,
  POSTACTIVITY,
  PUTACTIVITY,
  SET_ACCESS,
  FILTER_COUNTRIES_BY_CONTINENT,
  ORDER_COUNTRIES,
  FILTER_COUNTRIES_BY_SUBREGION,
  SEE_ALL,
  SET_TESTER,
  SET_SEE_ALL,
  CLEAN_COUNTRY_BY_ID,
  CLEAN_ALL,
  GET_ACTIVITY_BY_ID,
  FILTER_BY_ACTIVITIES,
  SET_FILTER_AND_ORDER,
  CLEAN_SEARCH_RESULTS,
  POSTING,
  CLEAN_ALL_ACTIVITIES,
  SET_SEARCH,
  SET_ORDER_OR_FILTER,
} from "./types";
import axios from "axios";

const endpointCountries = "http://localhost:3001/countries";
const endpointActivities = "http://localhost:3001/activities";

export const getAllCountries = () => {
  return (dispatch) => {
    try {
      return fetch(endpointCountries)
        .then((response) => response.json())
        .then((data) => dispatch({ type: GETALLCOUNTRIES, payload: data }));
    } catch (error) {
      console.log(`%cerror: ${error.message}`, `color:red;font-weight:bold`);
    }
  };
};

export const getCountryById = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${endpointCountries}/${id}`);
      return dispatch({
        type: GETCOUNTRYBYID,
        payload: data,
      });
    } catch (error) {
      console.log(`%cerror: ${error.message}`, `color:red;font-weight:bold`);
    }
  };
};

export const getCountriesByName = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `${endpointCountries}/name?name=${name}`
      );
      return dispatch({
        type: GETALLCOUNTRIESBYNAME,
        payload: data,
      });
    } catch (error) {
      console.log(`%cerror: ${error.message}`, `color:red;font-weight:bold`);
    }
  };
};

export const getActivityById = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${endpointActivities}/${id}`);
      return dispatch({
        type: GET_ACTIVITY_BY_ID,
        payload: data,
      });
    } catch (error) {
      console.log(`%cerror: ${error.message}`, `color:red;font-weight:bold`);
    }
  };
};

export const getAllActivities = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpointActivities);
      return dispatch({
        type: GETALLACTIVITIES,
        payload: data,
      });
    } catch (error) {
      console.log(`%cerror: ${error.message}`, `color:red;font-weight:bold`);
    }
  };
};

export const deleteActivity = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`${endpointActivities}/${id}`);
      return dispatch({
        type: DELETEACTIVITY,
        payload: data,
      });
    } catch (error) {
      console.log(`%cerror: ${error.message}`, `color:red;font-weight:bold`);
    }
  };
};

export const postActivity = (state) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpointActivities, state);
      return dispatch({
        type: POSTACTIVITY,
        payload: data,
      });
    } catch (error) {
      console.log(`%cerror: ${error.message}`, `color:red;font-weight:bold`);
    }
  };
};

export const putActivity = (id, activityUpdates) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(
        `${endpointActivities}/${id}`,
        activityUpdates
      );
      return dispatch({
        type: PUTACTIVITY,
        payload: data,
      });
    } catch (error) {
      console.log(`%cerror: ${error.message}`, `color:red;font-weight:bold`);
    }
  };
};

export const setAccess = (payload) => {
  return {
    type: SET_ACCESS,
    payload,
  };
};

export const filterCountriesByContinent = (payload) => {
  return {
    type: FILTER_COUNTRIES_BY_CONTINENT,
    payload,
  };
};

export const filterCountriesBySubregion = (payload) => {
  return {
    type: FILTER_COUNTRIES_BY_SUBREGION,
    payload,
  };
};

export const filterCountriesByActivities = (payload) => {
  return {
    type: FILTER_BY_ACTIVITIES,
    payload,
  };
};

export const orderCountries = (payload) => {
  return {
    type: ORDER_COUNTRIES,
    payload,
  };
};

export const seeAll = () => {
  return {
    type: SEE_ALL,
  };
};

export const setTester = () => {
  return {
    type: SET_TESTER,
  };
};

export const setSeeAll = () => {
  return {
    type: SET_SEE_ALL,
  };
};

export const cleanCountryById = () => {
  return {
    type: CLEAN_COUNTRY_BY_ID,
  };
};

export const cleanAll = () => {
  return {
    type: CLEAN_ALL,
  };
};

export const setFilterAndOrder = () => {
  return {
    type: SET_FILTER_AND_ORDER,
  };
};

export const cleanSearchResults = () => {
  return {
    type: CLEAN_SEARCH_RESULTS,
  };
};

export const posting = (paylaod) => {
  return {
    type: POSTING,
    paylaod,
  };
};

export const cleanAllACtivities = () => {
  return {
    type: CLEAN_ALL_ACTIVITIES,
  };
};

export const setSearch = () => {
  return {
    type: SET_SEARCH,
  };
};

export const setOrderOrFilter = () => {
  return {
    type: SET_ORDER_OR_FILTER,
  };
};
