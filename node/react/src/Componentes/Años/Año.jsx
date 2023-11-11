import NavBar from "../NavBar/NavBar";
import "../../CSS/style.css";
import { Link, NavLink } from "react-router-dom";
import Carta from "./Carta";
import { useParams } from "react-router-dom";

const Año = () => {
  const { year } = useParams();
 
  return (
    <>

      <div className="circulo">
        <div className="circulo-2"></div>
      </div>
      <div className="circulo-3">

      </div>
      <div className="circulo-4">

      </div>
      <div className="circulo-5">

      </div>
      <NavBar  />
      {/* <Carta/> */}
      <div  className="contenedor-año">
        
      <h1 >{year}</h1>
     
        <div className="contenedor-cartas">
      
         
       <Carta  to="/Primero" year="1º Año"/>
              <Carta to="Segundo" year="2º Año"/>
              <Carta year="3º Año"/>
              <Carta year="4º Año"/>
              <Carta year="5º Año"/>
              <Carta year="6º Año"/>
         
        
       
         
       
        </div>
      </div>
      </>
      

  );
};
export default Año;
