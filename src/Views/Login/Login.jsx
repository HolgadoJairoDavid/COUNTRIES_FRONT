import { NavLink } from "react-router-dom";
import validate from "./validate";
import React from "react";
import style from "./login.module.css";
import SLIDE1 from "../../Assets/imgLogin/SLIDE1.png";

const Login = (props) => {
  const [state, setState] = React.useState({
    email: "",
    password: "",
  });
  const [error, setError] = React.useState({});

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
    setError(validate({ ...state, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(state);
  };
  return (
    <div className={style.Login}>
      <div className={style.Filter}></div>
      <form onSubmit={handleSubmit} className={style.Form}>
        <div>
          {" "}
          <h1 className={style.Title}>Welcome back!</h1>
          <div className={style.InputAndLabel}>
            <label htmlFor="email" className={style.Email}>
              Email{" "}
            </label>
            <input
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              className={style.Input}
            />
          </div>
          <p className={style.Error}>{error.email}</p>
          <div className={style.InputAndLabel}>
            <label htmlFor="password" className={style.Password}>
              Password{" "}
            </label>

            <input
              type="password"
              name="password"
              value={state.password}
              onChange={handleChange}
            />
          </div>
          <p className={style.Error}>{error.password}</p>
          <button
            disabled={
              !state.email || !state.password || error.email || error.password
            }
            type="submit"
          >
            Submit
          </button>
          <p className={style.toRegister}>
            Do not you have an account yet?{" "}
            <NavLink to="/register" className={style.NavLink}>
              Sign up here
            </NavLink>
          </p>
        </div>
        <img src={SLIDE1} className={style.Slide1} alt="" />
      </form>
    </div>
  );
};

export default Login;
