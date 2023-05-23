import { useNavigate } from "react-router-dom";
import style from "./landing.module.css";
import BACK1 from "../../Assets/imgLanding/BACK1.png"
import BACK2 from "../../Assets/imgLanding/BACK2.jpg"
import BACK3 from "../../Assets/imgLanding/BACK3.jpg"
import BACK4 from "../../Assets/imgLanding/BACK4.jpg"
import BACK5 from "../../Assets/imgLanding/BACK5.jpg"
import BACK6 from "../../Assets/imgLanding/BACK6.jpg"

const Landing = () => {
  const navigate = useNavigate()
  const handleStart = () => {
    navigate('/login')
  }
  return (
    <div>
      <div className={style.Background}>
        <img src={BACK1} alt="" className={style.img1}/>
        <img src={BACK2} alt="" className={style.img2}/>
        <img src={BACK3} alt="" className={style.img3}/>
        <img src={BACK4} alt="" className={style.img4}/>
        <img src={BACK5} alt="" className={style.img5}/>
        <img src={BACK6} alt="" className={style.img6}/>
        <div className={style.BackColor}></div>
      </div>
      <div className={style.Landing}>
        <h2 className={style.Henry}>Henry's</h2>
        <h2 className={style.Subtitle}>Co<span>untries</span> app</h2>
        <button onClick={handleStart} className={style.NavLink}>Start
        </button>
      </div>
      <div className={style.Border}>
        <div className={style.Bubble}></div>
      </div>
    </div>
  );
};

export default Landing;
