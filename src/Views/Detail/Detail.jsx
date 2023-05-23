import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cleanCountryById, getCountryById } from "../../Redux/actions";
import Activity from "../../Components/Activity/Activity";
import style from "./detail.module.css";

const Detail = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const countryById = useSelector((state) => state.countryById);

  useEffect(() => {
    dispatch(getCountryById(id));
    return () => {
      dispatch(cleanCountryById());
    };
  }, [dispatch, id]);

  return (
    <div className={style.Detail}>
      <div className={style.Container}>
        <div className={style.CountryDetails}>
          <p>#{countryById.id}</p>
          <div>
            <img src={countryById.image} alt={countryById.name} />
          </div>
          <h1>{countryById.name}</h1>
          <div className={style.Details}><p>Continent</p> <p>{countryById.continent}</p></div>
          <div className={style.Details}><p>Capital</p> <p>{countryById.capital}</p></div>
          <div className={style.Details}><p>Subregion</p> <p>{countryById.subregion}</p></div>
          <div className={style.Details}><p>Area</p> <p>{countryById.area}</p></div>
          <div className={style.Details}><p>Population</p> <p>{countryById.population}</p></div>
        </div>

        <div className={style.Activities}>
          <h1 className={style.Title}>ACTIVITIES: </h1>

          {countryById.activitiesData &&
            countryById.activitiesData.map((activity, index) => {
              return (
                <Activity
                  countryId={id}
                  key={activity.id}
                  id={activity.id}
                  name={activity.name}
                  difficulty={activity.difficulty}
                  duration={activity.duration}
                  season={activity.season}
                  image={activity.image}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Detail;
