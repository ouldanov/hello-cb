const http = require('http');
const mysql = require('mysql2');

const config =
{
  host: 'dbserver-cb.mysql.database.azure.com',
  user: 'Azure_SQL_Admin@dbserver-cb',
  password: 'skxkpr7YA',
  database: 'db_cb',
  port: 3306,
  ssl: true
};

const conn = new mysql.createConnection(config);

const server = http.createServer(function(request, response) {
  conn.connect(function (err) { 
    if (err) { 
      response.writeHead(200, {"Content-Type": "text/plain"});
      response.end("!!! Cannot connect !!! Error:");
      return;
    }
    else
    {
      response.writeHead(200, {"Content-Type": "text/plain"});
      response.end("Connection established.");
    }
    });
});

const port = process.env.PORT || 443;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
