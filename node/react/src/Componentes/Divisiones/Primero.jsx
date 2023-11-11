import NavBar from "../NavBar/NavBar";
import Carta from "../Años/Carta";
import "../../CSS/style.css"
import Division from "./carta-division";

const Primero = () => {
    return (
      <>
    <div className="fondo-div">
     
    </div>
    
     <NavBar />
    <div className="pagina-div">
      <h1>Primer Año</h1>
      <div className="contenedor-division">
      <Division to="/Seleccion" year="1º 1ª"/>
      <Division to="/Seleccion" year="1º 2ª"/>
      <Division year="1º 3ª"/>
      <Division year="1º 4ª"/>
      <Division year="1º 5ª"/>
      <Division year="1º 6ª"/>
      <Division year="1º 7ª"/>
      </div>
      </div>      
      
      </>
    );
  };
  export default Primero;
  