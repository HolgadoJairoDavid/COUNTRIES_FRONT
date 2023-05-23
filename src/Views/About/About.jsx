import style from "./about.module.css";
import aboutImg from "../../Assets/imgAbout/About.jpg";
import bootstrap from "../../Assets/imgAbout/bootstrap.png";
import css from "../../Assets/imgAbout/css.png";
import express from "../../Assets/imgAbout/express.png";
import git from "../../Assets/imgAbout/git.png";
import html from "../../Assets/imgAbout/html.png";
import JavaScript from "../../Assets/imgAbout/JavaScript.png";
import Linkedin from "../../Assets/imgAbout/Linkedin.png";
import node from "../../Assets/imgAbout/node.png";
import react from "../../Assets/imgAbout/react.png";
import postGree from "../../Assets/imgAbout/postGree.png";
import seq from "../../Assets/imgAbout/sequelize.png";
import SQL from "../../Assets/imgAbout/SQL.png";
const About = () => {
  return (
    <div className={style.Container}>
      <div className={style.AboutMe}>
        <div className={style.Img}>
          <img src={aboutImg} alt="" />
        </div>
        <div>
          <h1>About me</h1>
          <span>
            Hello! I'm Jairo Holgado. I am 18 years old and I am passionate
            about computing and programming. I like to work in a team and always
            find the solution to problems. I am empathic, positive, persevering
            and very curious. And, thanks to these virtues, I was achieving
            goals and developing various projects. I am willing to expand my
            knowledge and grow as a professional and as a person.
          </span>
        </div>
      </div>
      <div className={style.Techs}>
        <h1>Technologies</h1>
        <div className={style.TechsImg}>
          <div className={style.Back}>
            <img src={react} alt="" />
          </div>
          <div className={style.Back}>
            <img src={express} alt="" />
          </div>
          <div className={style.Back}>
            <img src={html} alt="" />
          </div>
          <div className={style.Back}>
            <img src={css} alt="" />
          </div>
          <div className={style.Back}>
            <img src={bootstrap} alt="" />
          </div>
          <div className={style.Back}>
            <img src={JavaScript} alt="" />
          </div>
          <div className={style.Back}>
            <img src={git} alt="" />
          </div>
          <div className={style.Back}>
            <img src={node} alt="" />
          </div>
          <div className={style.Back}>
            <img src={postGree} alt="" />
          </div>
          <div className={style.Back}>
            <img src={SQL} alt="" />
          </div>
          <div className={style.Back}>
            <img src={seq} alt="" />
          </div>
        </div>
      </div>
      <div className={style.Contact}>
        <h1>Contact Me</h1>
        <a target="blank" href="https://www.linkedin.com/in/jairo-david-holgado-a28589261">
          <div className={style.Back}>
            <img src={Linkedin} alt="" />
          </div>
        </a>
      </div>
      <div>
        <br />
      </div>
    </div>
  );
};
export default About;
