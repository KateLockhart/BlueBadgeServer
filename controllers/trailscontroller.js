const router = require('express').Router()

const Trails = require('../db').import('../models/trails');

//GET ALL REQUEST
router.get('/', (req, res) => {
    Trails.findAll({
        where: {
        }
    })
    .then(trails => res.status(200).json({
        trails: trails
    }))
    .catch(err => res.status(500).json({
        error: err
    }))
})

//GET INDIVIDUAL
router.get('/:id', (req, res) => {
    Trails.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(trails => res.status(200).json({
        trails: trails
    }))
    .catch(err => res.status(500).json({
        error: err
    }))
})

//GET INDIVIDUAL W/ NAME
router.get('/:trailname', (req, res) => {
    Trails.findOne({
        where: {
            trailname: req.params.trailname
        }
    })
    .then(trails => res.status(200).json({
        trails: trails
    }))
    .catch(err => res.status(500).json({
        error: err
    }))
})

module.exports = router;