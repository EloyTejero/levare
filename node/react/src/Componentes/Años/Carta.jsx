import "../../CSS/style.css";
import { Link, NavLink } from "react-router-dom";
const Carta = (props) => {
  return (
    <>
      <Link to={props.to}>
        <div className="borde-carta">
          <div className="cartas">{props.year}</div>
        </div>
      </Link>
    </>
  );
};
export default Carta;
