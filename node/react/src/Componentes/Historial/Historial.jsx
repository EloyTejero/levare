import NavBar from "../NavBar/NavBar";
import "../../CSS/style.css";
import CartaH from "./CartasH";
import Año from "../Años/Año";
const Historial = () => {
  return (
    <>
    
      <NavBar />

      
      <div className="contenedor-historial">
    
      <h1>Historial</h1>
  
        <div className="contenedor-cartas">
        
          <CartaH to="/Ciclo_lectivo/2018" year="2018" />
          <CartaH to="/Ciclo_lectivo/2019" year="2019" />
          <CartaH to="/Ciclo_lectivo/2020" year="2020" />
          <CartaH to="/Ciclo_lectivo/2021" year="2021" />
          <CartaH to="/Ciclo_lectivo/2022" year="2022" />
       {/*     <CartaH to="/Ciclo_lectivo/2023" year="2023" />  */}
          
          
        </div>
      </div>
    </>
  );
};
export default Historial;
