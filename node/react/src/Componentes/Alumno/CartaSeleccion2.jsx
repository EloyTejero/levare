import "../../CSS/style.css";
import { Link, NavLink } from "react-router-dom";
const CartaSeleccion2 = (props) => {
    return (
      <>
    <Link to="/HistorialAlumno">
      
        <div className="cartas-seleccion">{props.name}</div>
     
      </Link>
    
     
      
      </>
    );
  };
  export default CartaSeleccion2;