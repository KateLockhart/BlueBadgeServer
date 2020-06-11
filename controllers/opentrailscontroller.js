const router = require('express').Router();

const OpenTrails = require('../db').import('../models/opentrails');


//GET ALL REQUEST
router.get('/', (req, res) => {
    OpenTrails.findAll({
        where: {
            owner_id: req.user.id
        }
    })
    .then(opentrails => res.status(200).json({
        opentrails: opentrails
    }))
    .catch(err => res.status(500).json({
        error: err
    }))
})

//POST REQUEST
router.post('/', (req, res) => {

    const opentrailsFromRequest = {
        trailname: req.body.trailname,
        location: req.body.location,
        length: req.body.length,
        difficulty: req.body.difficulty,
        comment: req.body.comment,
        owner_id: req.user.id
    }

    OpenTrails.create(opentrailsFromRequest)
        .then(opentrails => res.status(200).json({
            opentrails: opentrails
        }))
        .catch(err => res.status(500).json({
            error: err
        }))
})

//GET INDIVIDUAL
router.get('/:id', (req, res) => {
    OpenTrails.findOne({
        where: {
            owner_id: req.params.id
        }
    })
    .then(opentrails => res.status(200).json({
        opentrails: opentrails
    }))
    .catch(err => res.status(500).json({
        error: err
    }))
})

//GET INDIVIDUAL W/ NAME
router.get('/:trailname', (req, res) => {
    OpenTrails.findOne({
        where: {
            trailname: req.params.trailname
        }
    })
    .then(opentrails => res.status(200).json({
        opentrails: opentrails
    }))
    .catch(err => res.status(500).json({
        error: err
    }))
})

//UPDATE
router.put('/:id', (req, res) => {
    OpenTrails.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(opentrails => res.status(200).json({
        opentrails: opentrails
    }))
    .catch(err => res.status(500).json({
        error: err
    }))
})

//DELETE POST
router.delete('/:id', (req, res) => {
    OpenTrails.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(opentrails => res.status(200).json({
        opentrails: opentrails
    }))
    .catch(err => res.status(500).json({
        error: err
    }))
})

module.exports = router;