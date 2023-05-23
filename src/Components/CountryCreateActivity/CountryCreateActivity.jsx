import style from "./countryCreateActivity.module.css"

const CountryCreateActivity = (props) => {
    return (
        <div className={style.CountryCreateActivity}>
            <img src={props.image} alt={props.name} />
            <p>{props.name}</p>
        </div>
    )
}

export default CountryCreateActivity