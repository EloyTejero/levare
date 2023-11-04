const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const port =  process.env.PORT || 3030;
require('dotenv').config();

const app = express();



var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'dblevare',
  password : process.env.PDB
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

function cargarUsuario(tipo, usuario, contra){
    connection.query(`CALL createUser(${tipo},${usuario}, ${contra})`, function (error, results, fields) {
        if (error) throw error;
        connection.end();
        console.log(results);
    });
}

function checkearUsuario(usuario, contra){
  connection.query(`CALL chequeoUsuario(${usuario}, ${contra})`, function (error, results, fields) {
      if (error) throw error;
      connection.end();
      console.log(results);
  });
}

function modificarUsuario(id, usu, contra){
  connection.query(`CALL updateUser(${id}, ${usuario}, ${contra})`, function (error, results, fields) {
      if (error) throw error;
      connection.end();
      console.log(results);
  });
}

function asignarCursoaUsuario(idCurso, idUsuario){
  connection.query(`CALL asignarCursoaUsuario(${idCurso}, ${idUsuario})`, function (error, results, fields) {
      if (error) throw error;
      connection.end();
      console.log(results);
  });
}

function readCursosofUsuario(idUsuario){
  connection.query(`CALL readCursosofUsuario(${idUsuario})`, function (error, results, fields) {
      if (error) throw error;
      connection.end();
      console.log(results);
  });
}
function verMaterias(){
  connection.query(`CALL readAllSubjects()`, function (error, results, fields) {
      if (error) throw error;
      connection.end();
      console.log(results);
  });
}

function verCursosdeunAlumno(idAlumno){
  connection.query(`CALL readCoursesofAlumno(${idAlumno})`, function (error, results, fields) {
      if (error) throw error;
      connection.end();
      console.log(results);
  });
}

function verAnosdeCurso(ano){
  connection.query(`CALL readCoursesofYear(${ano})`, function (error, results, fields) {
      if (error) throw error;
      connection.end();
      console.log(results);
  });
}

function cargarNota(idCursoAlumno ,  idMateria ,  idEtapa , idEstado ,  nota){
  connection.query(`CALL createNota(${idCursoAlumno}, ${idMateria}, ${idEtapa}, ${idEstado}, ${nota})`, function (error, results, fields) {
      if (error) throw error;
      connection.end();
      console.log(results);
  });
}

function crearDivision(nombre, idCiclo){
  connection.query(`CALL createDivision(${nombre}, ${idCiclo})`, function (error, results, fields) {
      if (error) throw error;
      connection.end();
      console.log(results);
  });
}

function crearCiclo(nombre){
  connection.query(`CALL createCycle(${nombre})`, function (error, results, fields) {
      if (error) throw error;
      connection.end();
      console.log(results);
  });
}

function crearEtapa(nombre){
  connection.query(`CALL createPhase(${nombre})`, function (error, results, fields) {
      if (error) throw error;
      connection.end();
      console.log(results);
  });
}

function cargarObservacion(idCursoAlumno, texto){
  connection.query(`CALL createObservacion(${idCursoAlumno}, ${texto})`, function (error, results, fields) {
      if (error) throw error;
      connection.end();
      console.log(results);
  });
}

function crearAlumno(dni, nombre, apellido){
  connection.query(`CALL createAlumno(${dni}, ${nombre}, ${apellido})`, function (error, results, fields) {
      if (error) throw error;
      connection.end();
      console.log(results);
  });
}

function leerAlumno(id){
  connection.query(`CALL readAlumno(${id})`, function (error, results, fields) {
      if (error) throw error;
      connection.end();
      console.log(results);
  });
}

function modificarAlumno(id, dni, nombre, apellido){
  connection.query(`CALL updateAlumno(${id}, ${dni}, ${nombre}, ${apellido} )`, function (error, results, fields) {
      if (error) throw error;
      connection.end();
      console.log(results);
  });
}

app.post("/cu", (req, res) =>{
  console.log(req.body);
  const { tipo, usu, contra } = req.body;
  cargarUsuario(tipo, usu , contra);
});

app.post("/checkuser", (req, res) =>{
  console.log(req.body);
  const { usu, contra } = req.body;
  checkearUsuario(usu, contra);
});

app.post("/modificarUsuario", (req, res) =>{
  console.log(req.body);
  const { id, usu, contra } = req.body;
  modificarUsuario(id, usu, contra);
});

app.post("/asignarCursoaUsuario", (req, res) =>{
  console.log(req.body);
  const { idCurso, idUsuario } = req.body;
  asignarCursoaUsuario(idCurso, idUsuario);
});

app.post("/readCursosofUsuario", (req, res) =>{
  console.log(req.body);
  const { idUsuario } = req.body;
  readCursosofUsuario(idUsuario);
});

app.post("/verMaterias", (req, res) =>{
  console.log(req.body);
  //const { } = req.body;
  verMaterias();
});

app.post("/verCursosdeunAlumno", (req, res) =>{
  console.log(req.body);
  const { idAlumno } = req.body;
  verCursosdeunAlumno(idAlumno);
});

app.post("/verAnosdeCurso", (req, res) =>{
  console.log(req.body);
  const { ano } = req.body;
  verAnosdeCurso(ano);
  
});

app.post("/cargarNota", (req, res) =>{
  console.log(req.body);
  const { idCursoAlumno ,  idMateria ,  idEtapa , idEstado ,  nota  } = req.body;
  cargarNota(idCursoAlumno ,  idMateria ,  idEtapa , idEstado ,  nota);
});

app.post("/crearDivision", (req, res) =>{
  console.log(req.body);
  const { nombre, idCiclo } = req.body;
  crearDivision(nombre, idCiclo);
});

app.post("/crearCiclo", (req, res) =>{
  console.log(req.body);
  const { nombre } = req.body;
  crearCiclo(nombre);
});

app.post("/crearEtapa", (req, res) =>{
  console.log(req.body);
  const { nombre } = req.body;
  crearEtapa(nombre);
});

app.post("/cargarObservacion", (req, res) =>{
  console.log(req.body);
  const { idCursoAlumno, texto } = req.body;
  cargarObservacion(idCursoAlumno, texto);
});

app.post("/crearAlumno", (req, res) =>{
  console.log(req.body);
  const { dni, nombre, apellido } = req.body;
  crearAlumno(dni, nombre, apellido);
});

app.post("/leerAlumno", (req, res) =>{
  console.log(req.body);
  const { id } = req.body;
  leerAlumno(id);
});

app.post("/modificarAlumno", (req, res) =>{
  console.log(req.body);
  const { id, dni, nombre, apellido } = req.body;
  modificarAlumno(id, dni, nombre, apellido);
});

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

