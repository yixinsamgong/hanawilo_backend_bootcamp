const express = require('express'); 
const router = express.Router();

const {
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
} = require('../controllers/songController');

router.route('/')
    .get(getSongs)
    .post(createSong)
    .delete(deleteSongs)

router.route('/:songId')
    .get(getSong)
    .put(updateSong)
    .delete(deleteSong)

router.route('/:songId/ratings')
      .get(getSongRatings)
      .post(postSongRating)
      .delete(deleteSongRatings)

router.route('/:songId/ratings/:ratingId')
      .get(getSongRating)
      .put(updateSongRating)
      .delete(deleteSongRating2)

module.exports = router;2