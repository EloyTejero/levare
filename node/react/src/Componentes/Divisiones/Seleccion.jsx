import "../../CSS/style.css";
import NavBar from "../NavBar/NavBar";
import CartaSeleccion from "./CartaSeleccion";
const Seleccion = () => {
    return (
      <>
      
    <NavBar/>
  
    <div className="cont-seleccion">
      <div className="caja-tablas">
      <h1>Selección de tablas</h1>
      <CartaSeleccion to="/HistorialAlumno" name="Seguimiento Academico"/>
      </div>
   
    </div>

   

   
      
      </>
    );
  };
  export default Seleccion;
  