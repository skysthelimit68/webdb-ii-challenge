const router = require('express').Router();
const Zoos = require('./zoos-model.js');

/*const knex = require('knex');

const knexConfig = {
    client: 'sqlite3',
    connection: { // string or object
        filename: './data/lambda.db3' // from the root folder
    },
    useNullAsDefault: true,//only required when using sqlite3
    debug: true
}

const db = knex(knexConfig);
*/

router.get("/", (req, res) => {
    //db('zoos')
    Zoos.find()
    .then(zoo => {
        res.status(200).json(zoo);
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

router.get("/:id", (req, res) => {
    //db('zoos').where('id', req.params.id)
    Zoos.findById(req.params.id)
        .then(zoo => {
            res.status(200).json(zoo);
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.post("/", (req, res) => {
    //db('zoos').insert(req.body, 'name')
    Zoos.add(req.body)
        .then(zoo => {
            res.status(200).json(zoo);
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.put("/:id", (req, res) => {
    const changes = req.body;
    //db('zoos')
    //.where( {id : req.params.id})
    //.update(changes)
    Zoos.update(req.params.id, changes)
    .then( response => {
        if(response > 0) {
            res.status(200).json({message : `${response} record changed`})
        } else {
            res.status(404).json({ message : "zoo not found"})
        }
    })
    .catch( error => {
        res.status(500).json(error)
    })
})

router.delete("/:id", (req, res) => {
    //db('zoos')
    //    .where('id', req.params.id)
    //   .del()
    Zoos.remove(req.params.id)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(error => {
            res.status(500).json(error)
        })
})


//middleware

function validateZooId(req, res, next) {

}

module.exports = router;