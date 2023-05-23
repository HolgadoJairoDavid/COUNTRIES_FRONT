import { useDispatch } from "react-redux";
import {
  cleanAllACtivities,
  deleteActivity,
  getAllActivities,
  getCountryById,
} from "../../Redux/actions";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import style from "./activity.module.css";

const Activity = (props) => {
  const dispatch = useDispatch();
  // const navigate = useNavigate()
  const { pathname } = useLocation();
  const handleDelete = () => {
    dispatch(deleteActivity(props.id));
    dispatch(cleanAllACtivities())
    // navigate('/activities')

    dispatch(getAllActivities)

    if (pathname.includes("detail")) {
      dispatch(getCountryById(props.countryId));
    }
  };

  useEffect(() => {
    dispatch(getAllActivities());
  });

  return (
    <div className={style.Activity}>
      <div className={style.ButtonReset}>
          {!pathname.includes("detail") && (
            <button onClick={handleDelete}>X</button>
          )}
        </div>
      <div className={style.Buttons}>
        <button>
          <NavLink to={`/activities/${props.id}`} className={style.NavLink}>
            Update
          </NavLink>
        </button>
      </div>
      <div className={style.InfoAndImage}>
        <div className={style.Info}>
          <h1>{props.name}</h1>
          <div className={style.Details}>
            <p>Difficulty</p> <p>{props.difficulty}</p>
          </div>
          <div className={style.Details}>
            <p>Duration</p> <p>{props.duration} Hs</p>
          </div>
          <div className={style.ContentSeasons}>
            <p className={style.SeasonsTitle}>Seasons</p>
            <div className={style.Seasons}>
              <div>
                {props.season &&
                  props.season
                    .slice(0, 2)
                    .map((value, index) => <p key={index}>{value}</p>)}
              </div>
              <div>
                {props.season &&
                  props.season
                    .slice(2, 4)
                    .map((value, index) => <p key={index}>{value}</p>)}
              </div>
            </div>
          </div>
        </div>
        <div className={style.Image}>
          {" "}
          <img src={props.image} alt={props.name} />
        </div>
      </div>
    </div>
  );
};

export default Activity;
