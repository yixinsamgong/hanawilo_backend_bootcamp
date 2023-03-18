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
            console.log(`Searching artist by: ${query}`)
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

const deleteArtists= (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'Deleting all the artists!' })
}

const getArtist = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Show me the artist with cateogry Id of ${req.params.artistId}` })
}

const updateArtist = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Update the artist with cateogry Id of ${req.params.artistId}` })
}

const deleteArtist = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Delete the artist with cateogry Id of ${req.params.artistId}` })
}

module.exports = {
    deleteArtists, 
    createArtist, 
    getArtists,
    deleteArtist,
    updateArtist,
    getArtist
}