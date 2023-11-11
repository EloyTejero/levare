import { Link, NavLink } from "react-router-dom";
const CartaH = (props) => {
    return (
      <>
        <Link to={props.to}>
         
            <div className="cartasH">{props.year}</div>
     
        </Link>
      </>
    );
  };
  export default CartaH;
  