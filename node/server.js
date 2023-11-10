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
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

dbcall("readAllStoredProcedures", "")
.then(resp => {
  resp[0].forEach(r => {
    arrSP.push(r.Name);
  });
});

console.log(arrSP);

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

app.post("/call", (req, res) =>{

  const body = req.body;
    
  const spname = body.spname.toString();
  const args = body.args.toString();
  const uname = body.uname.toString();
  const upass = body.upass.toString();

  dbcall("chequeoUsuario", `'${uname}', '${upass}'`)
  .then((results1) => {
    console.log(results1[0]);
  })

  dbcall(spname, args)
  .then((results2) => {
    console.log(results2);
  })
  
});

app.post("/checklogin", (req, res) =>{
  try{
    dbcall("chequeoUsuario", `'${uname}', '${upass}'`)
    .then((id) => {
      dbcall("readRol", `${id[0][0].id}`)
      .then(resp => {
        console.log(resp[0][0].nombre);
      });
    });
  }
  catch(error){
    app.send("Error")
    console.log("Hubo un error en el intento de logueo");
  }
  
});


app.get("/", (req, res) =>{
  res.sendFile(__dirname + "/testing.html");
});

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`El server esta hosteado en http://localhost:${port}`);
});
  

