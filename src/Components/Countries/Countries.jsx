import Country from "../Country/Country";
import style from "./countries.module.css";

const Countries = (props) => {
  return (
    <div>
      <h1 className={style.Title}>Countries</h1>
      <div className={style.Container}>
        {props.allCountries &&
          props.allCountries.map((country) => {
            return (
              <Country
                key={country.id}
                id={country.id}
                name={country.name}
                image={country.image}
                continent={country.continent}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Countries;
