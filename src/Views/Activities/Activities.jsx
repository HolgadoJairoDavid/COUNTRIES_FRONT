import { useSelector } from "react-redux";
import Activity from "../../Components/Activity/Activity";
import style from "./activities.module.css"

const Activities = (props) => {
  const allActivities = useSelector((state) => state.allActivities);

  if(!allActivities.length){
    return (
        <div>
            NO ACTIVITIES YET...
        </div>
    )
  }
  return (
    <div className={style.Activities}>
      <h1 className={style.Title}>Activities</h1>
      <div className={style.Container}>
      {allActivities &&
        allActivities.sort((a,b) => a.name > b.name ? 1 : -1).map((activity) => {
          return (
            <Activity
              key={activity.id}
              id={activity.id}
              name={activity.name}
              difficulty={activity.difficulty}
              duration={activity.duration}
              season={activity.season}
              image={activity.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Activities;
