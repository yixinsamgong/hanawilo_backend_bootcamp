const getSongs = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'Show me all the songs!' })
}

const createSong = (req, res, next) => {
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Create song: ${req.body.songName} 
    ` })
}

const deleteSongs = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'Deleting all the songs!' })
}

const getSong = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Show me the Song with cateogry Id of ${req.params.songId}` })
}

const putSong = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Update the Song with cateogry Id of ${req.params.SongId}` })
}

const deleteSong = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Delete the Song with cateogry Id of ${req.params.SongId}` })
}

module.exports = {
    createSong, 
    deleteSongs, 
    getSongs,
    getSong,
    putSong,
    deleteSong
}