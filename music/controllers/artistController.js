const getArtists = (req, res, next) => {

      if (Object.keys(req.query).length) {
        const {
            firstName,
            lastName,
            genre
        } = req.query

        const filter = []

        if (firstName) filter.push(firstName)
        if (lastName) filter.push(lastName)
        if (genre) filter.push(genre)

        for (const query of filter){
            console.log(`Searching song by: ${query}`)
        }

    }
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'Show me all the artists!' })
}

const createArtist = (req, res, next) => {
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Create user: ${req.body. artistName} 
    ` })
}

const deleteArtist= (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'Deleting all the artists!' })
}

module.exports = {
    deleteArtist, 
    createArtist, 
    getArtists
}