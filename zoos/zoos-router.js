const router = require('express').Router();
const Zoos = require('./zoos-model.js');

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

router.get("/:id", validateZooId, (req, res) => {
    //db('zoos').where('id', req.params.id)
    
        res.status(200).json(req.body.zoo);

})

router.post("/", validateZooName, (req, res) => {
    //db('zoos').insert(req.body, 'name')
    Zoos.add(req.body)
        .then(zoo => {
            res.status(200).json(zoo);
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.put("/:id", validateZooId, validateZooName, (req, res) => {
    const changes = req.body;
   // db('zoos')
    //.where( {id : req.params.id})
    //.update(changes)
    Zoos.update(req.params.id, {name: changes.name})
    .then( zoo => {
        res.status(200).json(zoo)
    })
    .catch( error => {
        res.status(500).json(error)
    })
})

router.delete("/:id", validateZooId, (req, res) => {
    //db('zoos')
    //    .where('id', req.params.id)
    //   .del()
    Zoos.remove(req.params.id)
        .then(response => {
            res.status(200).json({message : `${response} record deleted`});
        })
        .catch(error => {
            res.status(500).json(error)
        })
})


//middleware

function validateZooId(req, res, next) {
    Zoos.findById(req.params.id)
        .then(zoo => {
            if(zoo) {
                req.body.zoo = zoo
                next();
            } else {
                res.status(404).json({ message : "zoo not found"})
            } 
        })
        .catch(error => {
            res.status(500).json(error)
        })
}

function validateZooName(req, res, next) {
    if(!req.body.name) {
        res.status(500).json({ message : "Please provide a name for the zoo"})
    } else {
        next();
    }
}

module.exports = router;