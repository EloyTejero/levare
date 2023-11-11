import "../../CSS/style.css";
import NavBar from "../NavBar/NavBar";
import CartaSeleccion2 from "./CartaSeleccion";

const SeleccionA = () => {

    return (
      <>
      
    <NavBar/>
  
    <div className="cont-seleccion">
      <div className="caja-tablas">
      <h1>Selección de tablas</h1>
      <CartaSeleccion2 to="/HistorialAlumno" name="Seguimiento Academico"/>
      </div>
   
    </div>

   

   
      
      </>
    );
  };
  export default SeleccionA;
  