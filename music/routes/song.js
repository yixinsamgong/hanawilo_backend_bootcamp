const express = require('express'); 
const router = express.Router();

const {
    createSong, 
    deleteSong, 
    getSongs
} = require('../controllers/songController');

router.route('/')
    .get(getSongs)
    .post(createSong)
    .delete(deleteSong)

module.exports = router;