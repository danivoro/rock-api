const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { v4: uuid } = require("uuid");

const app = express();

app.get("/music", (req, res) => {
    const type = ['Slow', 'Hard', 'Melodic'];
    const decade = ['60\'s', '70\'s', '80\'s'];
    const genre = ['Rock', 'Blues', 'Jazz'];

    res.json({
        type: _.sample(type),
        decade: _.sample(decade),
        genre: _.sample(genre)
    });

});

app.listen(3000, () => console.log('API Server is running...'));