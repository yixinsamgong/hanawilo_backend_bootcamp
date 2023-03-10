const express = require('express'); 
const router = express.Router();

const {
    createSong, 
    deleteSongs, 
    getSongs
} = require('../controllers/songController');

router.route('/')
    .get(getSongs)
    .post(createSong)
    .delete(deleteSongs)

module.exports = router;