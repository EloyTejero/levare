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

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

