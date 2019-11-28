const express = require('express')
const router = express.Router()
const Movie = require('../models/movie')

// Display/GET all movies
router.get('/', (req, res) => {
    Movie.find()
        .then((data) => res.json(data))
        .catch(err => res.json({message: err}))
    
})

// Add New Movie
router.post('/', (req, res) => {
    const { title, year, rating, image } = req.body
    const newMovie = new Movie({
        title,
        year,
        rating,
        image
    })
    newMovie.save()
        .then(() => res.json(newMovie))
        .catch((err) => res.json({message: err}))
})

// Delete Movie
router.delete('/:id', (req, res) => {
    Movie.findByIdAndRemove(req.params.id)
        .then(() => res.json({message: 'Movie Deleted'}))
        .catch(err => res.json({message: err}))
})

// Edit Movie
router.put('/:id', (req, res) => {
    const information = req.body
    Movie.findByIdAndUpdate({_id: req.params.id}, {$set: {...information}})
        .then(() => res.json({message: 'Movie Updated'}))
        .catch(err => res.json({message: err}))
})


module.exports = router