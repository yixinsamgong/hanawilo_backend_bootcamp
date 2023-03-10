const express = require('express'); 
const router = express.Router();

const {
    deleteArtists, 
    createArtist, 
    getArtists
} = require('../controllers/artistController');

router.route('/')
    .get(getArtists)
    .post(createArtist)
    .delete(deleteArtists)

module.exports = router;