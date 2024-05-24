const express = require('express');
const cors = require('cors');
const path = require('path');
const animalService = require('./backend/service/animal-service.js');
const env = {
    port: 3333,
}
const app = express();

app.use(cors({origin: true}));
app.use(express.json());
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.post('/api/report', (req, res) => {
    const responseMessage = animalService.reportMissing(req.body);
    res.send(`{ "responseMessage": "${responseMessage}" }`);
});

app.get("*", function (req, res) {
    res.sendFile(__dirname + "/frontend/static/index.html");
});

app.listen(env.port, () => {
    console.log(`Server listening on port ${env.port}`)
});