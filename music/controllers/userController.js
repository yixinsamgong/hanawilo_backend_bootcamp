const getUsers = (req, res, next) => {
     if (Object.keys(req.query).length) {
        const {
            userName,
            gender
        } = req.query

        const filter = []

        if (userName) filter.push(userName)
        if (gender) filter.push(gender)

        for (const query of filter){
            console.log(`Searching user by: ${query}`)
        }
    }
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'Show me all the users!' })
}

const createUser = (req, res, next) => {
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Create user: ${req.body.userName} 
    ` })
}

const deleteUser = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'Deleting all the users!' })
}



module.exports = {
    deleteUser, 
    getUsers, 
    createUser
}