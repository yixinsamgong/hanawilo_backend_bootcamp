const Artist = require('../models/Artist');
const getArtists = async (req, res, next) => {

    const filter = {}; 
    const options = {};

      if (Object.keys(req.query).length) {
        const {
            firstName,
            lastName,
            genre,
            sortByGenre,
            limit
        } = req.query

        const filter = []

        if (firstName) filter.firstName = true
        if (lastName) filter.lastName = true
        if (genre) filter.genre = true
        
        if (limit) options.limit = limit
        if (sortByGenre) options.sort = {
            genre: sortByGenre
        }


    }
    try {
        const artists = await Artist.find()
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json(artists)
    } catch (err) {
        next(err)
    }
}

const createArtist = async (req, res, next) => {
    try {
         const artist = await Artist.create(req.body)
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json(artist)
    } catch (err) {
        next(err)
    }
}

const deleteArtists= async (req, res, next) => {
    try {
        const deletedArtists = await Artist.deleteMany()
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json(deletedArtists)
    } catch (err) {
        next(err)
    }
}

const getArtist = async (req, res, next) => {
    try {
        const artist = await Artist.findById(req.params.artistId)
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json(artist)
    } catch (err) {
        next(err)
    }
}


const updateArtist = async (req, res, next) => {
    try {
        const artist = await Artist.findByIdAndUpdate(req.params.artistId, req.body, { new: true })
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(artist)
    } catch (err) {
        next(err)
    }
}

const deleteArtist = async (req, res, next) => {
     try {
        const deletedArtist = await Artist.findByIdAndDelete(req.params.artistId)
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
      .json(deletedArtist)
    } catch (err) {
        next(err)
    }
}

module.exports = {
    deleteArtists, 
    createArtist, 
    getArtists,
    deleteArtist,
    updateArtist,
    getArtist
}