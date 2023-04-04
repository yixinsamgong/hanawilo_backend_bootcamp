const Song = require('../models/Song');
const getSongs = async (req, res, next) => {
     if (Object.keys(req.query).length) {
        const {
            songTitle,
            artist,
            genre
        } = req.query

        const filter = []

        if (songTitle) filter.push(songTitle)
        if (artist) filter.push(artist)
        if (genre) filter.push(genre)

        for (const query of filter){
            console.log(`Searching song by: ${query}`)
        }
    }
    try {
        const songs = await Song.find()
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(songs)
    } catch (err) {
        next(err)
    }
}

const createSong = async (req, res, next) => {
    try {
        const song = await Song.create(req.body)

        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(song)
    } catch (err) {
        next(err)
    }   
}

const deleteSongs = async (req, res, next) => {
    try{
        const deleteSongs = await Song.deleteMany()

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(deleteSongs)
        } catch (err) {
         next(err)
    }
}

const getSong = async (req, res, next) => {
    try {
        const song = await Song.findById(req.params.songId)
    res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(song)
    } catch (err) {
        next(err)
    }
}

const updateSong = async (req, res, next) => {
    try {
        const song = await Song.findByIdAndUpdate(req.params.songId, req.body, { new: true })
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(song)
        } catch (err) {
        next(err)
    }
}

const deleteSong = async(req, res, next) => {
    try {
        const deletedSong = await Song.findByIdAndDelete(req.params.songId)
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(deletedSong)
      } catch (err) {
        next(err)
    }
}

// For '/:songId/ratings' endpoint

const getSongRatings = async (req, res, next) => {
    try {
        const result = await Song.findById(req.params.songId)

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(result.ratings)
    } catch (err) {
        next(err);
    }
}

const postSongRating = async (req, res, next) => {
    try {
        const result = await Song.findById(req.params.songId)
        result.ratings.push(req.body)

        // saves new rating to the data base
        await result.save()

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(result.ratings)
    } catch (err) {
        next(err);
    }
}

const deleteSongRatings = async (req, res, next) => {
    try {
        const result = await Song.findById(req.params.songId);

        result.ratings = [];

        await result.save();

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(result.ratings)
    } catch (err) {
        next(err)
    }
}

// For '/:songId/ratings/:ratingId' endpoint
const getSongRating = async (req, res, next) => {
    try {
        const song = await Song.findById(req.params.songId);
        let rating = song.ratings.find(rating => (req.params.ratingId).equals(rating._id))

        if (!rating) rating = { msg: `No rating found with id: ${req.params.ratingId}` }

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(rating)
    } catch (err) {
        next(err)
    }
}

const updateSongRating = async (req, res, next) => {
    try {
        const song = await Song.findById(req.params.itemId); 
        let rating = song.ratings.find(rating => (req.params.ratingId).equals(rating._id))

        if (rating) {
            const ratingIndexPosition = song.ratings.indexOf(rating)
            song.ratings.splice(ratingIndexPosition, 1, req.body)
            rating = req.body
            await song.save(); 
        } else {
            rating = { msg: `No rating found with id: ${req.params.ratingId}` }
        }

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(rating)
    } catch (err) {
        next(err)
    }
}

const deleteSongRating = async (req, res, next) => {
    try {
        const song = await Song.findById(req.params.songId); 
        let rating = song.ratings.find(rating => (req.params.ratingId).equals(rating._id))

        if (rating) {
            const ratingIndexPosition = song.ratings.indexOf(rating); 
            song.ratings.splice(ratingIndexPosition, 1)
            rating = { msg: `Successfully deleted rating with id: ${req.params.ratingId}` }
            await song.save(); 
        } else {
            rating = { msg: `No rating found with id: ${req.params.ratingId}` }
        }

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(rating)
    } catch (err) {
        next(err)
    }
}


module.exports = {
    createSong, 
    deleteSongs, 
    getSongs,
    getSong,
    updateSong,
    deleteSong,
    getSongRatings,
    deleteSongRatings,
    postSongRating,
    getSongRating,
    updateSongRating,
    deleteSongRating
}