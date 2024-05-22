const express = require('express');
const cors = require('cors');
const path = require('path');
const animalService = require('./backend/animal-service.js');

const app = express();
const port = 3333;

app.use(cors({origin: true}));
app.use(express.json());
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.post('/api/report', (req, res) => {
    const responseMessage = animalService.reportMissing(req.body);
    res.send(`{ "responseMessage": "${responseMessage}" }`);
});

app.get("*", function (req, res) {
    res.sendFile(__dirname + "/frontend/static/index.html")
  });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});