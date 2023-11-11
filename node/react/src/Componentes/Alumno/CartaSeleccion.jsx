import NavBar from "../NavBar/NavBar"
import { Link } from "react-router-dom";
const CartaSeleccion = (props) => {

    return (
        <>
            <Link to="/Filtro"><div className="cartaS">
        {props.year}
            </div></Link>
      
        </>
    )

}
export default CartaSeleccion;