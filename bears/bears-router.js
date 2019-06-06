const router = require('express').Router();
const Bears = require('./bears-model.js');

router.get("/", (req, res) => {
    Bears.find()
    .then(zoo => {
        res.status(200).json(zoo);
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

router.get("/:id", validateBearId, (req, res) => {   
        res.status(200).json(req.body.bear);

})

router.post("/", validateBearName, (req, res) => {
    const newBear = req.body.name
    Bears.add({ name: newBear })
        .then(bear => {
            res.status(200).json(bear);
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.put("/:id", validateBearId, validateBearName, (req, res) => {
    const changes = req.body;
    Bears.update(req.params.id, {name: changes.name})
    .then( bear => {
        res.status(200).json(bear)
    })
    .catch( error => {
        res.status(500).json(error)
    })
})

router.delete("/:id", validateBearId, (req, res) => {
    Bears.remove(req.params.id)
        .then(response => {
            res.status(200).json({message : `${response} bear deleted`});
        })
        .catch(error => {
            res.status(500).json(error)
        })
})


//middleware

function validateBearId(req, res, next) {
    Bears.findById(req.params.id)
        .then(bear => {
            if(bear) {
                req.body.bear = bear
                next();
            } else {
                res.status(404).json({ message : "bear not found"})
            } 
        })
        .catch(error => {
            res.status(500).json(error)
        })
}

function validateBearName(req, res, next) {
    if(!req.body.name) {
        res.status(500).json({ message : "Please provide a name for the bear"})
    } else {
        next();
    }
}

module.exports = router;