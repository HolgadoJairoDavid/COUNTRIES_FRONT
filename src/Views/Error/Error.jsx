import style from "./error.module.css"
import {useNavigate } from "react-router-dom"
import IMG1 from "../../Assets/imgError/IMG1.png"

const Error = (props) => {
    const navigate = useNavigate()

    return (
        <div className={style.Error}>
            <img src={IMG1} alt="" />
            <h1>404</h1>
            <p>Oops! Page not found...</p>
            <button onClick={() => {navigate('/login')}}>Go to Login</button>
        </div>
    )
}

export default Error;