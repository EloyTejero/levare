import "../../CSS/style.css";
import { Link, NavLink } from "react-router-dom";
import Table2 from "./Table2";
import NavBar from "../NavBar/NavBar";
const Filtro = (props) => {
  return (
    <>
    <NavBar/>
      <div  className="paginaHistorial">
     
        <div className="cajaHistorial">
          <h1>Seguimiento academico</h1>
          <Table2 />
          <div className="botones"></div>
        </div>
      </div>
    </>
  );
};
export default Filtro;
