import NavBar from "../NavBar/NavBar";
import BotonHistorial from "./BotonHistorial";
import { Link, NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import Table from "./Table";
import Dropdown from "./Dropdown";
const HistorialAlumno = () => {
    const { name } = useParams();
    return (
      <>
      
    <NavBar/>
 
<div className="paginaHistorial">

    <div className="cajaHistorial">
        <Dropdown/>
    <h1>Seguimiento academico</h1>
    <Table/>
    <div className="botones">
    <BotonHistorial  name="Modificar"/>
    <BotonHistorial name="Cargar"/>
    </div>
    </div>
</div>

   

   
      
      </>
    );
  };
  export default HistorialAlumno;

