import { Link, NavLink } from "react-router-dom";

const BotonHistorial = (props) => {
   
   
    return (
        
      <>
      <Link  >
      <div className="botonHistorial">
      {props.name}
      </div>
      </Link>
   

   


   

   
      
      </>
    );
  };
  export default BotonHistorial;