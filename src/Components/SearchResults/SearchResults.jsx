import { useSelector } from "react-redux";
import Country from "../Country/Country";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cleanSearchResults, setOrderOrFilter } from "../../Redux/actions";
import SearchBar from "../SearchBar/SearchBar";
import style from "./searchResults.module.css";
import FilterAndOrderBar from "../FilterAndOrderBar/FilterAndOrderBar";

const SearchResults = (props) => {
  const dispatch = useDispatch();
  const orderOrFilter = useSelector((state) => state.orderOrFilter);
  const countriesByName = useSelector((state) => {
    if (!orderOrFilter) {
      return state.countriesByName;
    } else {
      return state.filteredAndOrderedCountriesSearch;
    }
  });
  useEffect(() => {
    return () => {
      dispatch(cleanSearchResults());
      dispatch(setOrderOrFilter());
    };
  }, [dispatch]);

  const handleReset = () => {
    dispatch(setOrderOrFilter());
  };
  return (
    <div className={style.SearchResults}>
      <div className={style.BarsAndPages}>
        <div className={style.Bars}>
          <SearchBar />
          <FilterAndOrderBar />
          <button className={style.Reset} onClick={handleReset}>Reset</button>
        </div>
        <div>
          <h1 className={style.Title}>Countries</h1>
          <div className={style.Pages}>
            {countriesByName &&
              countriesByName.slice(0, 15).map((country) => {
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
      </div>
    </div>
  );
};

export default SearchResults;
