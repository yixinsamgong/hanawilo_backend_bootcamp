const express = require('express'); 
const router = express.Router();

const {
    deleteUser, 
    getUsers, 
    createUser,
    getUser,
    updateUser, 
    deleteUsers
} = require('../controllers/userController');

router.route('/')
    .get(getUsers)
    .post(createUser)
    .delete(deleteUsers)

router.route('/:userId')
    .get(getUser)
    .post(updateUser)
    .delete(deleteUser)

module.exports = router;