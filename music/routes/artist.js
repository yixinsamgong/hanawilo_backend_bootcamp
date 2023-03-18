const express = require('express'); 
const router = express.Router();

const {
    deleteArtists, 
    createArtist, 
    getArtists,
    getArtist,
    updateArtist, 
    deleteArtist, 
} = require('../controllers/artistController');

router.route('/')
    .get(getArtists)
    .post(createArtist)
    .delete(deleteArtists)

router.route('/:artistId')
    .get(getArtist)
    .post(updateArtist)
    .delete(deleteArtist)

module.exports = router;