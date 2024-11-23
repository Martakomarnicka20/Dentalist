
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const axios = require('axios');
const mongoose = require('mongoose'); // Corrected typo
const port = process.env.PORT || 3001;

mongoose.connect('mongodb+srv://root:VD4CFWo28MCZWfGO@cluster0.gr0o3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
}).then(() => {
    console.log('connected to db')
}).catch((err) => {
    console.log(err)
});

const Feetback = mongoose.model('Feetback', { // Corrected typo
    name: String,
    feetback: String, // Corrected typo
    rating: Number
});

app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.post('/feetback', (req, res) => { // Corrected typo
    console.log(req.body);
    const feetback = new Feetback(req.body); // Corrected typo
    feetback.save()
        .then(() => res.sendStatus(200))
        .catch((err) => res.status(500).send(err));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
