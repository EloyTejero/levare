import NavBar from "../NavBar/NavBar";
import image from "../../Image/dni (2).png";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const Alumno = () => {
  const { year } = useParams();
  return (
    <div>
      <div className="fondo-rec"></div>
      <NavBar />
      <div className="contenedor-dni">
        <div className="borde">
          <div className="contenido-dni">
            <h1>Ingrese el DNi del alumno</h1>
            <img src={image} alt="" />
            <div className="input">
              <input type="text" placeholder="Ingresa DNI" />
              <input type="text" placeholder="Ingresa el nombre" />
              <Link to="/SeleccionCurso">
                <button>Enviar</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Alumno;
