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
<<<<<<< HEAD
=======
        // connected!
>>>>>>> 1546ec047191c5773892bb7b29c559b86d5d2a15
        connection.end();
        console.log(results);
    });
}

<<<<<<< HEAD
app.post("/cu", (req, res) =>{
  console.log(req.body);
  const { tipo, usu, contra } = req.body;
  cargarUsuario(tipo, usu , contra);
});
=======

>>>>>>> 1546ec047191c5773892bb7b29c559b86d5d2a15

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

