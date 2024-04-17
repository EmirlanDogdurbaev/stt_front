import classes from "./Courses.module.scss";
import Course from "../Course/Course";

const Courses = () => {
  return (
    <div className={classes.Courses}>
      <Course />
    </div>
  );
};

export default Courses;
