const express = require('express');
const cors = require('cors');
const path = require('path');
const animalService = require('./service/animal-service.js');
const env = {
    port: 3333,
}
const app = express();

app.use(cors({origin: true}));
app.use(express.json());
app.use("/static", express.static(path.join(__dirname, "..", "frontend", "static")));

app.post('/api/report', (req, res) => {
    const responseMessage = animalService.reportMissing(req.body);
    res.send(`{ "responseMessage": "${responseMessage}" }`);
});
app.get('/api/animals', (req, res) => {
    const data = animalService.getAll();
    res.send(`{ "data": ${JSON.stringify(data)} }`);
});
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "frontend", "static", "index.html"));
});

app.listen(env.port, () => {
    console.log(`Server listening on port ${env.port}`)
});