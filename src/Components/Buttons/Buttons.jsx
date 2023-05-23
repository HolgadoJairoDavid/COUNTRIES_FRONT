import style from "./buttons.module.css"

const Buttons = (props) => {
  const total = Math.ceil(props.allCountries.length / 10) - 1;
  return (
    <div className={style.Buttons}>
      <button onClick={props.prevHandler}>Prev</button>
      <h1 className={style.NumberPage}>{props.currentPage + 1} | {total + 1}</h1>
      <button onClick={props.nextHandler}>Next</button>
    </div>
  );
};

export default Buttons;
