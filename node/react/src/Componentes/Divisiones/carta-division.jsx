import "../../CSS/style.css";
import { Link, NavLink } from "react-router-dom";
const Division = (props) => {
  return (
    <>
    <Link to={props.to}>
      <div className="carta-div">
        {props.year}
      </div>
      </Link>
    </>
  );
};
export default Division;
