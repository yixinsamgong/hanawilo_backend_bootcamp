const bodyParser = require('body-parser'); 
const express = require('express'); 
const dotenv = require('dotenv');
const cors = require('cors');
const artist = require('./routes/artist');
const user = require('./routes/user');
const song = require('./routes/song');

dotenv.config({ path: './config/config.env' }); 

const app = express(); 

// parse application/json
app.use(bodyParser.json());

app.use('/song', song); 
app.use('/user', user); 
app.use('/artist', artist);

app.use(cors({
    origin: '*'
}));

const PORT = process.env.PORT || 5001

const server = app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})
