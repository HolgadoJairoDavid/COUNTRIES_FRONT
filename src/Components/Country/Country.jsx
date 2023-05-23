import { NavLink } from "react-router-dom";
import style from "./country.module.css";

const Country = (props) => {
  return (
    <div className={style.Country}>
      <NavLink to={`/detail/${props.id}`} className={style.NavLink}>
        <div className={style.Container}>
          <img src={props.image} alt={props.name} />
          <div>
            <p className={style.CountryName}>{props.name}</p>
            <p>{props.continent}</p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Country;
