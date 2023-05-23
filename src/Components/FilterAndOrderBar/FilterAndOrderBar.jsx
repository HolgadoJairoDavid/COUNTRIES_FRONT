import Filter from "../Filter/Filter";
import Order from "../Order/Order";

const FilterAndOrderBar = (props) => {
  return (
    <div>
      <Filter seteador2={props.seteador2} prevHandler={props.prevHandler} nextHandler={props.nextHandler} seteador={props.seteador}/>
      <Order prevHandler={props.prevHandler} nextHandler={props.nextHandler} seteador={props.seteador}/>
    </div>
  );
};

export default FilterAndOrderBar;
