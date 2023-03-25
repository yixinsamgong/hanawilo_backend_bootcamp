const express = require('express'); 
const router = express.Router();

const {
    createSong, 
    deleteSongs, 
    getSongs,
    getSong,
    updateSong, 
    deleteSong, 
} = require('../controllers/songController');

router.route('/')
    .get(getSongs)
    .post(createSong)
    .delete(deleteSongs)

router.route('/:songId')
    .get(getSong)
    .put(updateSong)
    .delete(deleteSong)

module.exports = router;