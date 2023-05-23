import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import {
  getAllActivities,
  getAllCountries,
  posting,
  setSearch,
} from "../../Redux/actions";
import style from "./navBar.module.css";

const NavBar = (props) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const allActivities = useSelector((state) => state.allActivities);
  const post = useSelector((state) => state.post);
  const handleClick = () => {
    dispatch(setSearch());
    props.logOut();
  };

  const handleActivities = () => {
    dispatch(setSearch());
    if (allActivities.length === 0) {
      dispatch(getAllActivities());
    }
  };

  const handleHome = () => {
    dispatch(setSearch());
    if (pathname === "/create" && post) {
      dispatch(getAllCountries());
      dispatch(posting(false));
    }
  };

  return (
    <div className={style.NavBar}>
      <div>
        <button onClick={handleHome}>
          <NavLink to="/home" className={style.NavLink}>
            Home
          </NavLink>
        </button>
        <button>
          <NavLink to="/create" className={style.NavLink}>
            Create Activity
          </NavLink>
        </button>
        <button>
          <NavLink to="/about" className={style.NavLink}>
            About
          </NavLink>
        </button>
        <button onClick={handleActivities}>
          <NavLink to="/activities" className={style.NavLink}>
            Activities
          </NavLink>
        </button>
        <button onClick={handleClick}>Log Out</button>
      </div>
      <div className={style.Logo}>
        <h2 className={style.Henry}>Henry's</h2>
        <h2 className={style.Subtitle}>
          Co<span>untries</span> app
        </h2>
      </div>
    </div>
  );
};

export default NavBar;
