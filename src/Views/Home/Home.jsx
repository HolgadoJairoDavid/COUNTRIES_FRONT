import { useState } from "react";
import Countries from "../../Components/Countries/Countries";
import { useDispatch, useSelector } from "react-redux";
import Buttons from "../../Components/Buttons/Buttons";
import FilterAndOrderBar from "../../Components/FilterAndOrderBar/FilterAndOrderBar";
import { setTester, seeAll, setSeeAll } from "../../Redux/actions";
import style from "./home.module.css";
import SearchBar from "../../Components/SearchBar/SearchBar";

const Home = (props) => {
  const dispatch = useDispatch();

  const COUNTRIES_PER_PAGE = 10;
  const seeAllGlobal = useSelector((state) => state.seeAll);
  const tester = useSelector((state) => state.tester);
  const order = useSelector((state) => state.order);
  const tenFilteredAndOrderedCountries = useSelector(
    (state) => state.tenFilteredAndOrderedCountries
  );
  const filter = useSelector((state) => state.filter);
  const allCountries = useSelector((state) => {
    if (order || filter || tester) {
      return state.filteredAndOrderedCountries;
    } else if (!order && !filter && !tester) {
      return state.filteredAndOrderedCountries;
    } else {
      return state.allCountries;
    }
  });

  const [currentCountries, setCurrentCountries] = useState([
    ...allCountries.slice(0, COUNTRIES_PER_PAGE),
  ]);

  const [currentPage, setCurrentPage] = useState(0);

  const nextHandler = () => {
    if (allCountries.length <= 10 && currentPage === 0) return;
    dispatch(setTester());
    dispatch(setSeeAll());
    const nextPage = currentPage + 1;

    const firstIndex = nextPage * COUNTRIES_PER_PAGE;

    if (nextPage > Math.ceil(allCountries.length / 10) - 1) return;

    setCurrentCountries(
      allCountries.slice(firstIndex, firstIndex + COUNTRIES_PER_PAGE)
    );
    setCurrentPage(nextPage);
  };
  const prevHandler = () => {
    if (currentPage === 0) return;
    dispatch(setTester());
    dispatch(setSeeAll());
    const prevPage = currentPage - 1;
    const firstIndex = prevPage * COUNTRIES_PER_PAGE;

    setCurrentCountries(
      allCountries.slice(firstIndex, firstIndex + COUNTRIES_PER_PAGE)
    );
    setCurrentPage(prevPage);
  };
  const seteador = () => {
    setCurrentPage(0);
  };

  const seteador2 = () => {
    setCurrentCountries(allCountries.slice(0, 10));
  };

  const handleReset = () => {
    dispatch(seeAll());
    seteador();
    seteador2();
  };
  return (
    <div className={style.Home}>
      {currentCountries ? (
        <div className={style.BarsAndPages}>
          <div className={style.Bars}>
            <SearchBar />
            <FilterAndOrderBar seteador2={seteador2} seteador={seteador} />
            <button className={style.Reset} onClick={handleReset}>Reset</button>
          </div>
          <div className={style.Pages}>
            {" "}
            <Countries
              allCountries={
                tester && (order || filter)
                  ? tenFilteredAndOrderedCountries
                  : seeAllGlobal
                  ? allCountries.slice(0, 10)
                  : currentCountries
              }
            />
            <Buttons
              currentPage={currentPage}
              allCountries={allCountries}
              prevHandler={prevHandler}
              nextHandler={nextHandler}
            />
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;
