import "../../CSS/style.css";
import { Link, NavLink } from "react-router-dom";
const CartaSeleccion = (props) => {
    return (
      <>
    <Link to={props.to}>
      
        <div className="cartas-seleccion">{props.name}</div>
     
      </Link>
    
     
      
      </>
    );
  };
  export default CartaSeleccion;