const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const port =  process.env.PORT || 3030;

const app = express();

app.use(bodyParser.json());

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'dblevare',
  password :  'password'
});


let arrSP = [];
let arrSPTutor = [];
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});


armarTabla(3);

dbcall("readAllStoredProcedures", "")
.then(resp => {
  resp[0].forEach(r => {
    arrSP.push(r.ROUTINE_NAME);
    let primerasCuatroLetras = r.ROUTINE_NAME.substring(0, 3)
    if ( primerasCuatroLetras === "read" || primerasCuatroLetras === "update"){
      arrSPTutor.push(r.ROUTINE_NAME)
    }
  });
});

function armarColumna(alumno){
  
}

function armarTabla(idcurso){
  let tabla = [];
  dbcall("readAlumnosofCurso", idcurso)
  .then( resp =>{
    var itemProccesed = 0;
    resp[0].forEach((alumno, index, array) => {
      dbcall("readNota", alumno.id_curso_alumno)
      .then( listaNotas =>{
        let columna = {};
        let notas = [];
        columna.nombre = alumno.nombre + " " + alumno.apellido;
        listaNotas[0].forEach(nota => {
          nota = {materia: nota.materia,
          etapa: nota.etapa,
          nota: nota.nota,
          estado: nota.estado,
          fecha: nota.fecha}
          notas.push(nota);
        });
        console.log(notas);
        columna.notas = notas;
        tabla.push(columna)
        itemProccesed ++;
        if (itemProccesed === array.length){
          console.log(tabla);
          return tabla;
        }
      });
    });
  });
}

function desarmarTabla(idcurso){
  
}

function dbcall(spname, args) {
  return new Promise((resolve, reject) => {
    connection.query(`CALL ${spname}(${args})`, function (error, results, fields) {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

function getRolUsuario(nom, contra){
  dbcall("chequeoUsuario", `'${nom}', '${contra}'`)
  .then((id) => {
    dbcall("readRol", `${id[0][0].id}`)
    .then(resp => {
      app.send(resp[0][0].nombre);
    });
  });
}

function getRolPorSPName(spname){
  arrSPTutor.forEach(sp => {
    if(sp === spname){
      return "usuario"
    }
  });
  return "administrador"
} //duda

app.post("/call", (req, res) =>{

  const body = req.body;
    
  const spname = body.spname.toString();
  const args = body.args.toString();
  const uname = body.uname.toString();
  const upass = body.upass.toString();

  if (getRolUsuario(uname, upass) == getRolPorSPName(spname)){//agregue el parametro de spname
    dbcall(spname, args)
    .then((results2) => {
      app.send(results2[0]);
    })
  }
});

app.post("/checklogin", (req, res) =>{

  const body = req.body;

  const uname = body.uname.toString();
  const upass = body.upass.toString();

  try{
    app.send(getRolUsuario(uname, upass));
  }
  catch(error){
    app.send("Error")
    console.log("Hubo un error en el intento de logueo");
  }
  
});

app.post("/segAcademico", (req, res) =>{
  const { idcurso } = req.body;
  app.send(armarTabla( idcurso )); 
});

app.get("/", (req, res) =>{
  res.sendFile(__dirname + "/testing.html");
});

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`El server esta hosteado en http://localhost:${port}`);
});
  

