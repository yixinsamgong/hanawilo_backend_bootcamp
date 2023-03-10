const express = require('express'); 
const router = express.Router();

const {
    deleteUsers, 
    getUsers, 
    createUsers
} = require('../controllers/userController');

router.route('/')
    .get(getUsers)
    .post(createUsers)
    .delete(deleteUsers)

module.exports = router;