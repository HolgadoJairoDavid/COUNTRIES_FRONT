import { useDispatch, useSelector } from "react-redux";
import {
  filterCountriesByActivities,
  filterCountriesByContinent,
  filterCountriesBySubregion,
} from "../../Redux/actions";
import style from "./filter.module.css";

const Filter = (props) => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);
  const allActivities = useSelector((state) => state.allActivities);
  const search = useSelector((state) => state.search);

  const continents = [];
  for (let i = 0; i < allCountries.length; i++) {
    if (!continents.includes(allCountries[i].continent)) {
      continents.push(allCountries[i].continent);
    }
  }

  const subregions = [];
  for (let i = 0; i < allCountries.length; i++) {
    if (!subregions.includes(allCountries[i].subregion)) {
      subregions.push(allCountries[i].subregion);
    }
  }

  const activities = [];
  if (Array.isArray(allActivities)) {
    for (let i = 0; i < allActivities.length; i++) {
      if (!activities.includes(allActivities[i].name)) {
        activities.push(allActivities[i].name);
      }
    }
  }

  const handleContinents = (event) => {
    dispatch(filterCountriesByContinent(event.target.value));
    if (!search) {
      props.seteador();
    }
  };

  const handleSubregions = (event) => {
    dispatch(filterCountriesBySubregion(event.target.value));
    if (!search) {
      props.seteador();
    }
  };

  const handleActivities = (event) => {
    dispatch(filterCountriesByActivities(event.target.value));
    if (!search) {
      props.seteador();
    }
  };
  return (
    <div className={style.Filter}>
      <div className={style.Selected}>
        <select
          className={style.Select}
          onChange={handleContinents}
          defaultValue=""
        >
          <option value="" disabled>
            Select a continent
          </option>
          {continents.map((continent, index) => (
            <option key={index} value={continent}>
              {continent}
            </option>
          ))}
        </select>
      </div>

      <div className={style.Selected}>
        <select
          className={style.Select}
          onChange={handleSubregions}
          defaultValue=""
        >
          <option value="" disabled>
            Select a subregion
          </option>
          {subregions.map((subregion, index) => (
            <option key={index} value={subregion}>
              {subregion}
            </option>
          ))}
        </select>
      </div>

      <div className={style.Selected}>
        <select
          className={style.Select}
          onChange={handleActivities}
          defaultValue=""
        >
          <option value="" disabled>
            Select a activity
          </option>
          {activities.map((activity, index) => (
            <option key={index} value={activity}>
              {activity}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
