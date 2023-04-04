const User = require('../models/User');

const getUsers  = async (req, res, next) => {
    const filter = {}
    const options = {}

     if (Object.keys(req.query).length) {
        const {
            userName,
            age,
            limit, 
            sortByAge
        } = req.query

        const filter = []

        if (userName) filter.push(userName)
        if (age) filter.push(age)

        if (limit) options.limit = limit
        if (sortByAge) options.sort = {
            age: sortByAge
        }

    }
      try {
        const users = await User.find()

        res
        .status(200) 
        .setHeader('Content-Type', 'application/json')
        .json(users)
          } catch (err) {
        next(err)
    }
}

const createUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body)
        sendTokenResponse(user, 201, res)
     } catch (err) {
        next(err)
    }
}

const deleteUsers =  async (req, res, next) => {
    try {
        const users = await User.deleteMany()
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json(users)
     } catch (err) {
        next(err)
    }
}

const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.userId)

    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json(user)
    } catch (err) {
        next(err)
    }

}

const updateUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true })
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json(user)
    } catch (err) {
        next(err)
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.userId)
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json(user)
    } catch (err) {
        next(err)
    }
}

const sendTokenResponse = (user, statusCode, next) => {\
    
    const token =  user.getSignedJwtToken(); 

    const options = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly = true
    }

    res
    .status(statusCode)
    .cookie('token', token, options)
    .json(token)
}

module.exports = {
    deleteUsers, 
    getUsers, 
    createUser,
    deleteUser,
    updateUser,
    getUser
}