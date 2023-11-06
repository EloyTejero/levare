const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const port =  process.env.PORT || 3030;

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

async function dbcall(spname, args){
   await connection.query(`CALL ${spname}(${args})`, function (error, results, fields) {
      if (error) throw error;
      return(results);
  });
}

app.post("/call/:spname/:args", (req, res) =>{
  const spname = req.params.spname.toString();
  const args = req.params.args.toString();
  dbcall(spname, args)
  .then(resp =>{
    res.send(resp);
    console.log(resp); 
  });
});

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

