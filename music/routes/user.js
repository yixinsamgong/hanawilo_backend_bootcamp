const express = require('express'); 
const router = express.Router();

const {
    deleteUser, 
    getUsers, 
    createUser
} = require('../controllers/userController');

router.route('/')
    .get(getUsers)
    .post(createUser)
    .delete(deleteUser)

module.exports = router;