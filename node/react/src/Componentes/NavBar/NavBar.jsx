import "boxicons";
import "../../CSS/style.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
// import "../../js/script"
const NavBar = () => {

  const [slider, setSlider] = useState(true);

  useEffect(() => {
    return () => {};
  }, []);

  const sumarContador = () => {
    setSlider(!slider);
  };
  return (
    <>
    
      <nav className="siderbar close">
        
        <header style={{ paddingLeft: slider ? "5px" : "300px" }}>
          <div className="icon__menu" onClick={sumarContador}>
            <box-icon id="btn_open" color="#000000" name="menu"></box-icon>
           
          </div>
         
        </header>

        <div
          className={`menu__side ${slider? "hidden" :  ""}`}
          id="menu_side"
          
        >
          <div style={{ textAlign: "center" }} className="namePage">
            <h1>Levare</h1>
        
          </div>

          <a href="#" className="selected">
          <NavLink to="/"><div className="option">
          <box-icon
                name="home"
                id="icon"
                type="solid"
                color="#FFFFFF"
              ></box-icon>
              <h2>Años</h2>
            </div></NavLink>
          </a>
         
          <a href="#" className="selected">
            <NavLink to="/Historial"> <div className="option">
              
              <box-icon  id="icon" name="spreadsheet" color="#FFFFFF"></box-icon>
              <h2>Historial</h2>
            </div>
            </NavLink>
          </a>
          <a href="#" className="selected">
          <NavLink to="/Alumno"> <div className="option">
              <box-icon  id="icon" name="group" color="#FFFFFF"></box-icon>
              <h2>Alumno</h2>
            </div> </NavLink>
          </a>
          <a href="#" className="selected">
          <NavLink to="/Login"><div className="option">
              <box-icon id="icon" name="undo" color="#FFFFFF"></box-icon>
              <h2>LogOut</h2>
            </div></NavLink>
          </a>
          
        </div>
      
      </nav>
    </>
  );
};
export default NavBar;
