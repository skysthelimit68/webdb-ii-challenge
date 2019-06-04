//const express = require('express');
//const knex = require('knex');
//const helmet = require('helmet');

const server = require('./api/server.js');

/*const knexConfig = {
  client: 'sqlite3',
  connection: { // string or object
    filename: './data/lambda.db3' // from the root folder
  },
  useNullAsDefault: true ,//only required when using sqlite3
  debug: true
}*/

//const db = knex(knexConfig);
//const server = express();

//server.use(express.json());
//server.use(helmet());

// endpoints here
/*
server.get("/api/zoos", (req, res) => {
  db('zoos')
  .then( zoo => {
    res.status(200).json(zoo);
  } )
  .catch(error => {
    res.status(500).json(error)
  })
})

server.get("/api/zoos/:id", (req, res) => {
  db('zoos').where('id', req.params.id)
  .then( zoo => {
    res.status(200).json(zoo);
  } )
  .catch(error => {
    res.status(500).json(error)
  })
})

server.post("/api/zoos", (req, res) => {
  db('zoos').insert(req.body, 'name')
  .then( zoo => {
    res.status(200).json(zoo);
  } )
  .catch(error => {
    res.status(500).json(error)
  })
})

server.put("/api/zoos/:id", (req, res) => {
//update zoos set field = new value where id is :id
})

server.delete("/api/zoos/:id", (req, res) => {
//delete from zoos where id is :id
  db('zoos')
  .where('id', req.params.id)
  .del()
  .then( response => {
    res.status(200).json(response);
  } )
  .catch(error => {
    res.status(500).json(error)
  })

})

function validateZooId(req, res, next) {

}
*/
const port = 3500;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
