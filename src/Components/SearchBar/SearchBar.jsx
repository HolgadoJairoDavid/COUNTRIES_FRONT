import { useState } from "react";
import { cleanSearchResults, getCountriesByName } from "../../Redux/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from "./searchBar.module.css"

const SearchBar = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleSearch = () => {
    if (name !== "") {
      dispatch(cleanSearchResults())

      dispatch(getCountriesByName(name));
      setName("");
      navigate("/home/search");
    }
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && name !== '') {
      dispatch(cleanSearchResults())
      dispatch(getCountriesByName(name));
      setName("");
      navigate("/home/search");
    }
  };

  return (
    <div className={style.SearchBar}>
      <input
        type="search"
        value={name}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter the name of a country"
      />
      <button className={style.Search} onClick={handleSearch}>🔍︎</button>
    </div>
  );
};

export default SearchBar;
