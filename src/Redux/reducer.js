import {
  GETALLCOUNTRIES,
  GETCOUNTRYBYID,
  GETALLCOUNTRIESBYNAME,
  GETALLACTIVITIES,
  DELETEACTIVITY,
  POSTACTIVITY,
  PUTACTIVITY,
  SET_ACCESS,
  ORDER_COUNTRIES,
  FILTER_COUNTRIES_BY_CONTINENT,
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
  SET_ORDER_OR_FILTER
} from "./types";

// FOR DETAIL COMPONENT WE USE A LOCAL STATE
const initialStore = {
  orderOrFilter: false,
  search: false,
  post: false,
  seeAll: false,
  tester: true,
  filter: false,
  order: false,
  access: false,
  allCountries: [],
  filteredAndOrderedCountries: [],
  filteredAndOrderedCountriesSearch: [],
  tenFilteredAndOrderedCountries: [],
  allActivities: [],
  countriesByName: [],
  countryById: {},
  activityById: {},
  putActivity: {},
};

const reducer = (state = initialStore, { type, payload }) => {
  switch (type) {
    case GETALLCOUNTRIES:
      return {
        ...state,
        allCountries: payload,
        filteredAndOrderedCountries: payload,
        tenFilteredAndOrderedCountries: payload.slice(0, 10),
      };
    case GETCOUNTRYBYID:
      return {
        ...state,
        countryById: payload,
      };
    case GETALLCOUNTRIESBYNAME:
      return {
        ...state,
        search: true,
        filteredAndOrderedCountriesSearch: payload,
        countriesByName: payload,
      };
    case GETALLACTIVITIES:
      return {
        ...state,
        allActivities: payload,
      };
    case DELETEACTIVITY:
      return {
        ...state,
        allCountries: payload,
      };
    case POSTACTIVITY:
      return {
        ...state,
        allActivities: payload,
        post: true,
      };
    case PUTACTIVITY:
      return {
        ...state,
        putActivity: payload,
      };
    case SET_ACCESS:
      return {
        ...state,
        access: payload,
      };
    // ORDER
    case ORDER_COUNTRIES:
      let orderCountries;
      if (payload === "AlphabeticallyA") {
        orderCountries = state.search ? state.filteredAndOrderedCountriesSearch.sort((a, b) =>
        a.name > b.name ? 1 : -1) : state.filteredAndOrderedCountries.sort((a, b) =>
          a.name > b.name ? 1 : -1
        );
      } else if (payload === "AlphabeticallyD") {
        orderCountries = state.search ? state.filteredAndOrderedCountriesSearch.sort((a, b) =>
        a.name < b.name ? 1 : -1) : state.filteredAndOrderedCountries.sort((a, b) =>
          a.name < b.name ? 1 : -1
        );
      } else if (payload === "PopulationA") {
        orderCountries = state.search ? state.filteredAndOrderedCountriesSearch.sort((a, b) =>
        a.population > b.population ? 1 : -1) : state.filteredAndOrderedCountries.sort((a, b) =>
          a.population > b.population ? 1 : -1
        );
      } else if (payload === "PopulationD") {
        orderCountries = state.search ? state.filteredAndOrderedCountriesSearch.sort((a, b) =>
        a.population < b.population ? 1 : -1) : state.filteredAndOrderedCountries.sort((a, b) =>
          a.population < b.population ? 1 : -1
        );
      } else if (payload === "AreaA") {
        orderCountries = state.search ? state.filteredAndOrderedCountriesSearch.sort((a, b) =>
        a.area > b.area ? 1 : -1) : state.filteredAndOrderedCountries.sort((a, b) =>
          a.area > b.area ? 1 : -1
        );
      } else if (payload === "AreaD") {
        orderCountries = state.search ? state.filteredAndOrderedCountriesSearch.sort((a, b) =>
        a.area < b.area ? 1 : -1) : state.filteredAndOrderedCountries.sort((a, b) =>
          a.area < b.area ? 1 : -1
        );
      }
      if(!state.search){
        return {
          ...state,
          order: true,
          tester: true,
          filteredAndOrderedCountries: [...orderCountries],
          tenFilteredAndOrderedCountries: [...orderCountries].slice(0, 10),
        };
      } else {
        return {
          ...state,
          orderOrFilter: true,
          filteredAndOrderedCountriesSearch: [...orderCountries]
        }
      }

    // FILTER
    case FILTER_COUNTRIES_BY_CONTINENT:
      if(!state.search){
        return {
          ...state,
          filter: true,
          tester: true,
          filteredAndOrderedCountries: state.allCountries.filter(
            (country) => country.continent === payload
          ),
          tenFilteredAndOrderedCountries: state.allCountries
            .filter((country) => country.continent === payload)
            .slice(0, 10),
        };
      } else {
        return {
          ...state,
          orderOrFilter: true,
          filteredAndOrderedCountriesSearch: state.countriesByName.filter((country) => country.continent === payload)
        }
      }

    case FILTER_COUNTRIES_BY_SUBREGION:
      if(!state.search){
        return {
          ...state,
          filter: true,
          tester: true,
          filteredAndOrderedCountries: state.allCountries.filter(
            (country) => country.subregion === payload
          ),
          tenFilteredAndOrderedCountries: state.allCountries
            .filter((country) => country.subregion === payload)
            .slice(0, 10),
        };
      } else {
        return {
          ...state,
          orderOrFilter: true,
          filteredAndOrderedCountriesSearch: state.countriesByName.filter((country) => country.subregion === payload)
        }
      }

    case FILTER_BY_ACTIVITIES:
      if(!state.search){
        return {
          ...state,
          filter: true,
          tester: true,
          filteredAndOrderedCountries: state.allCountries.filter((country) =>
            country.activitiesData.some((activity) => activity.name === payload)
          ),
          tenFilteredAndOrderedCountries: state.allCountries
            .filter((country) =>
              country.activitiesData.some((activity) => activity.name === payload)
            )
            .slice(0, 10),
        };
      } else {
        return {
          ...state,
          orderOrFilter: true,
          filteredAndOrderedCountriesSearch: state.countriesByName.filter((country) =>
          country.activitiesData.some((activity) => activity.name === payload)
        )
        }
      }

    // SEE_ALL

    case SEE_ALL:
      return {
        ...state,
        seeAll: true,
        filter: false,
        order: false,
        tester: false,
        filteredAndOrderedCountries: [...state.allCountries],
      };

    case SET_TESTER:
      return {
        ...state,
        tester: false,
      };

    case SET_SEE_ALL:
      return {
        ...state,
        seeAll: false,
      };

    case CLEAN_COUNTRY_BY_ID:
      return {
        ...state,
        countryById: {},
      };
    case CLEAN_ALL:
      return {
        ...state,
        allCountries: [],
        filteredAndOrderedCountries: [],
        tenFilteredAndOrderedCountries: [],
        countriesByName: [],
        allActivities: [],
      };

    case CLEAN_SEARCH_RESULTS:
      return {
        ...state,
        countriesByName: [],
      };

    case GET_ACTIVITY_BY_ID:
      return {
        ...state,
        activityById: payload,
      };

    case SET_FILTER_AND_ORDER:
      return {
        ...state,
        filter: false,
        order: false,
      };
    case POSTING:
      return {
        ...state,
        post: payload,
      };
    case CLEAN_ALL_ACTIVITIES: 
    return {
      ...state,
      allActivities: []
    }

    case SET_SEARCH: 
    return {
      ...state,
      search: false
    }

    case SET_ORDER_OR_FILTER:
      return{
        ...state,
        orderOrFilter: false,
      }

    default:
      return state;
  }
};

export default reducer;
