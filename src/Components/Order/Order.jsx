import { useDispatch } from "react-redux";
import { orderCountries } from "../../Redux/actions";
import style from "./order.module.css"

const Order = (props) => {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(orderCountries(event.target.value));
  };
  return (
    <div className={style.Order}>
      <div className={style.Selected}>
      <select className={style.Select} onChange={handleChange} defaultValue=''>
      <option value='' disabled>
        Order By Name
        </option>
        <option value="AlphabeticallyA">A - Z</option>
        <option value="AlphabeticallyD">Z - A</option>
      </select>
      </div>

      <div className={style.Selected}>
      <select className={style.Select} onChange={handleChange} defaultValue=''>
      <option value='' disabled>
        Order By Population
        </option>
        <option value="PopulationA">Lower to Higher</option>
        <option value="PopulationD">Higher to Lower</option>
      </select>
      </div>

      <div className={style.Selected}>
      <select className={style.Select} onChange={handleChange} defaultValue=''>
      <option value='' disabled>
        Order By Area
        </option> 
        <option value="AreaA">Lower to Higher</option>
        <option value="AreaD">Higher to Lower</option>
      </select>
      </div>
    </div>
  );
};

export default Order;
