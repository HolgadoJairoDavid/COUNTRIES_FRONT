import "./App.css";
import {
  Home,
  Detail,
  SearchResults,
  CreateActivity,
  Landing,
  Login,
  Register,
  Error,
  About
} from "./Views/index";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCountries,
  setAccess,
  setFilterAndOrder,
  seeAll,
  getAllActivities,
  cleanAllACtivities,
} from "./Redux/actions";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import PutActivity from "./Views/PutActivity/PutActivity";
import Activities from "./Views/Activities/Activities";

function App() {
  const navigate = useNavigate();
  let { pathname } = useLocation();
  const allActivities = useSelector((state) => state.allActivities);
  const allCountries = useSelector((state) => state.allCountries);

  const access = useSelector((state) => state.access);
  const dispatch = useDispatch();

  const verify = (path) => {
    const arrayPath = path.split("/");
    return ((arrayPath[1] === "detail" || arrayPath[1] === "activities") );
  };

  const login = async (state) => {
    const { email, password } = state;
    // const URL = `http://localhost:3001/login?email=${email}&password=${password}`;
    const URL = `https://countriesback-production-11ed.up.railway.app/login?email=${email}&password=${password}`;
    try {
      const response = await axios.get(URL);
      const { access } = response.data;

      dispatch(setAccess(access));

      access && navigate("/home");
      dispatch(getAllActivities());

      !access && window.alert("Los datos ingresados son incorrectos");
    } catch (error) {
      window.alert("No estás logueado");
    }
  };

  const logOut = () => {
    navigate("/login");
    dispatch(setAccess(false));
    dispatch(seeAll());
    dispatch(setFilterAndOrder());
    dispatch(cleanAllACtivities());
  };

  useEffect(() => {
    !access &&
      (pathname === "/home" ||
        pathname === "/about" ||
        pathname === "/activities" ||
        pathname === "/create" ||
        verify(pathname) ||
        pathname === "/home/search") &&
      navigate("/login");

    if (
      allCountries.length === 0 &&
      pathname !== "/" &&
      pathname !== "/register"
    ) {
      dispatch(getAllCountries());
    }
  }, [dispatch, allCountries, access, navigate, allActivities, pathname]);

  return (
    <div className="App">
      {(pathname === "/home" ||
        pathname === "/home/search" ||
        pathname === "/about" ||
        verify(pathname) ||
        pathname === "/create" ||
        pathname === "/activities") && <NavBar logOut={logOut} />}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<CreateActivity />} />
        <Route path="/activities" element={<Activities />} />
        {<Route path="/activities/:id" element={<PutActivity />} />}
        <Route path="/login" element={<Login login={login} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/home/search" element={<SearchResults />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
