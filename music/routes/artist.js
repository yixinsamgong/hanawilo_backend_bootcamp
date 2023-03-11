const express = require('express'); 
const router = express.Router();

const {
    deleteArtist, 
    createArtist, 
    getArtists
} = require('../controllers/artistController');

router.route('/')
    .get(getArtists)
    .post(createArtist)
    .delete(deleteArtist)

module.exports = router;