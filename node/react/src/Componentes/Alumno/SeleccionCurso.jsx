import NavBar from "../NavBar/NavBar"
import CartaSeleccion from "./CartaSeleccion";
const SeleccionCurso = () => {

    return (
        <>
        <NavBar />
        <div className="SeleccionAlumno">
            <div className="fondoF"> 

            </div>
            <div className="fondoF2"> 

            </div>
            <div className="contenedorS">
                <h1>Selección de curso</h1>
                <div className="ContCartas">
                <CartaSeleccion year="1º 4ª"/>
                <CartaSeleccion year="2º 4ª"/>
                <CartaSeleccion year="3º 3ª"/>
                <CartaSeleccion year="4º 3ª"/>
                <CartaSeleccion year="5º 3ª"/>
                <CartaSeleccion  year="6º 4ª"/>
                </div>
            </div>
     
        </div>
        </>
    )

}
export default SeleccionCurso;