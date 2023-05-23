import {  useNavigate, useParams } from "react-router-dom";
import React from "react";
import style from "./putActivity.module.css";
import validate from "./validate";
import { useDispatch, useSelector } from "react-redux";
import {
  putActivity,
  getCountriesByName,
  getAllCountries,
  getActivityById,
} from "../../Redux/actions";
import CountryCreateActivity from "../../Components/CountryCreateActivity/CountryCreateActivity";

const PutActivity = (props) => {
const navigate = useNavigate()
  const { id } = useParams();
  const dispatch = useDispatch();

  const activityById = useSelector((state) => state.activityById);
  const allCountries = useSelector((state) => state.allCountries);
  const countriesByName = useSelector((state) => state.countriesByName);
  const [name, setName] = React.useState("");

  const [state, setState] = React.useState({
    name: activityById.name,
    difficulty: activityById.difficulty,
    duration: activityById.duration,
    season: activityById.season,
    image: activityById.image,
    countriesNames: activityById.countriesNames,
    countriesRemove: [],
    countriesNamesUpdate: [],
  });

  const [error, setError] = React.useState({});
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
    setError(validate({ ...state, [event.target.name]: event.target.value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!Object.keys(error).length) {
      dispatch(putActivity(id, state));
      dispatch(getAllCountries());
      navigate('/activities')
    }
  };
  const handleCountries = (event) => {
    setName(event.target.value);
    setError(validate({ ...state, [event.target.name]: event.target.value }));
    dispatch(getCountriesByName(name));
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (
      state.countriesRemove.includes(event.target.value) &&
      activityById.countriesNames.includes(event.target.value)
    ) {
      setState({
        ...state,
        countriesNames: [...state.countriesNamesUpdate, event.target.value],
      });
    }
    setState({
      ...state,
      countriesNames: [...state.countriesNames, event.target.value],
      countriesNamesUpdate: [...state.countriesNamesUpdate, event.target.value],
    });
  };

  const countriesByActivity = allCountries.filter((country) =>
    state.countriesNames.includes(country.name)
  );

  const handleRemove = (event) => {
    event.preventDefault();
    setState({
      ...state,
      countriesNames: state.countriesNames.filter(
        (countryName) => countryName !== event.target.value
      ),
      countriesNamesUpdate: state.countriesNamesUpdate.filter(
        (countryName) => countryName !== event.target.value
      ),
      countriesRemove: activityById.countriesNames.includes(event.target.value)
        ? [...state.countriesRemove, event.target.value]
        : [...state.countriesRemove],
    });
  };

  const handleSeasons = (event) => {
    if (state.season.includes(event.target.value)) {
      setState({
        ...state,
        season: state.season.filter((value) => value !== event.target.value),
      });
    } else {
      setState({ ...state, season: [...state.season, event.target.value] });
    }
    setError(
      validate({ ...state, season: [...state.season, event.target.value] })
    );
  };

  React.useEffect(() => {
    dispatch(getActivityById(id));
  });
  return (
    <div className={style.PutActivity}>
      <form>
        <div className={style.Form}>
          <div className={style.Specifications}>
            <div className={style.Name}>
              <label htmlFor="name">Name </label>
              <input
                value={state.name}
                type="text"
                name="name"
                onChange={handleChange}
              />
              {error.name && <p>{error.name}</p>}
            </div>

            <div className={style.Difficulty}></div>
            <div className={style.Difficulty}>
              <label htmlFor="difficulty">Difficulty </label>
              <div className={style.SliderValue}>
                <span>{state.difficulty}</span>
              </div>
              <div className={style.Range}>
                <div className={style.Field}>
                  <div className={style.ValueLeftAndRight}>1</div>

                  <input
                    onChange={handleChange}
                    value={state.difficulty}
                    type="range"
                    min="1"
                    max="5"
                    name="difficulty"
                  />

                  <div className={style.ValueLeftAndRight}>5</div>
                </div>
              </div>
              {error.difficulty && <p>{error.difficulty}</p>}
            </div>

            <div className={style.Duration}>
              <label htmlFor="duration">Duration </label>
              <input
                value={state.duration}
                type="number"
                name="duration"
                min="0.5"
                max="120"
                step="0.5"
                onChange={handleChange}
              />
              {error.duration && <p>{error.duration}</p>}
            </div>
            <div className={style.Season}>
              <label>Season </label>
              <div className={style.Checkbox}>
                <div className={style.Box}>
                  <input
                    type="checkbox"
                    name="season"
                    value="Summer"
                    onChange={handleSeasons}
                    checked={state.season && state.season.includes("Summer")}
                  />
                  <label>Summer</label>
                </div>
                <div className={style.Box}>
                  <input
                    type="checkbox"
                    name="season"
                    value="Autumn"
                    onChange={handleSeasons}
                    checked={state.season && state.season.includes("Autumn")}
                  />
                  <label>Autumn</label>
                </div>
                <div className={style.Box}>
                  <input
                    type="checkbox"
                    name="season"
                    value="Winter"
                    onChange={handleSeasons}
                    checked={state.season && state.season.includes("Winter")}
                  />
                  <label>Winter</label>
                </div>
                <div className={style.Box}>
                  <input
                    type="checkbox"
                    name="season"
                    value="Spring"
                    onChange={handleSeasons}
                    checked={state.season && state.season.includes("Spring")}
                  />
                  <label>Spring</label>
                </div>
              </div>
              {error.season && <p>{error.season}</p>}
            </div>
          </div>

          <div className={style.CountriesAndImage}>
            <label htmlFor="countriesNames">Country: </label>
            <input
              type="search"
              value={name}
              onChange={handleCountries}
              placeholder="Enter the name of a country"
            />
            {error.countriesNames && <p>{error.countriesNames}</p>}

            <div className={style.CountriesSearchAndResults}>
            <div className={style.Search}>
              {countriesByName &&
                countriesByName.slice(0, 15).map((country, index) => {
                  return (
                    <div key={`${index}SearchCountries`} className={style.countriesByActivity}>
                      <CountryCreateActivity
                        key={country.id}
                        id={country.id}
                        name={country.name}
                        image={country.image}
                      />
                      <button
                        key={`${index}add`}
                        value={country.name}
                        onClick={handleClick}
                      >
                        +
                      </button>
                    </div>
                  );
                })}
            </div>

            <div className={style.CountriesAdd}>
              {countriesByActivity &&
                countriesByActivity.map((country, index) => {
                  return (
                    <div key={`${index}CountriesByActivity`} className={style.countriesByActivity}>
                      <CountryCreateActivity
                        key={country.id}
                        id={country.id}
                        name={country.name}
                        image={country.image}
                      />
                      <button
                        key={index}
                        value={country.name}
                        onClick={handleRemove}
                      >
                        -
                      </button>
                    </div>
                  );
                })}
            </div>
            </div>



            <label htmlFor="image">Image </label>
            <input
              type="text"
              value={state.image}
              name="image"
              onChange={handleChange}
            />

            {state.image && (
              <div className={style.ImageAdd}>
                <img src={state.image} alt="Imagen cargada" />
              </div>
            )}

            
          </div>
        </div>
        <button className={style.ButtonSubmit} onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default PutActivity;
