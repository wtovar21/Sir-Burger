var mysql = require('mysql');

 var connection;


  connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'burgers_db',
        port: '8889',
     })


connection.connect(function(err) {
    
    if (err) {
        console.error(`Error connection: ${err.stack}`);
        return;
    }
    
    console.log(`Connected as id ${connection.threadId}`);
})

module.exports = connection;