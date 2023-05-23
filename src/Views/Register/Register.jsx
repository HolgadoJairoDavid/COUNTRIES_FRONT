import { useNavigate, NavLink } from "react-router-dom";
import validate from "./validate";
import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { cleanAll } from "../../Redux/actions";
import style from "./register.module.css";
import SLIDE1 from "../../Assets/imgRegister/SLIDE1.png";

const Register = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = React.useState({});

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
    setError(validate({ ...state, [event.target.name]: event.target.value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = state;
    const URL = "http://localhost:3001/register";
    const { data } = await axios.post(URL, { email, password });

    if (data.result === "Successful registration") {
      navigate("/login");
    }
  };
  useEffect(() => {
    dispatch(cleanAll());
  }, [dispatch]);
  return (
    <div className={style.Register}>
      <div className={style.Filter}></div>
      <form onSubmit={handleSubmit} className={style.Form}>
        <div>
          <h1 className={style.Title}>Welcome!</h1>
          <div className={style.InputAndLabel}>
            <label htmlFor="email" className={style.Email}>
              Email{" "}
            </label>
            <input
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
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

          <div className={style.InputAndLabel}>
            <label htmlFor="password" className={style.ConfirmPassword}>
              Confirm password{" "}
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={state.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <p className={style.Error}>{error.confirmPassword}</p>

          <button
            disabled={
              !state.email ||
              !state.password ||
              !state.confirmPassword ||
              error.email ||
              error.password ||
              error.confirmPassword
            }
            type="submit"
          >
            Submit
          </button>
          <p className={style.toRegister}>
            Do you already have an account?{" "}
            <NavLink to="/login" className={style.NavLink}>Sign in here</NavLink>
          </p>
        </div>
        <img src={SLIDE1} className={style.Slide1} alt="" />
      </form>
    </div>
  );
};

export default Register;
