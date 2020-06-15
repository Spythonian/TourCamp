const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello TourCamp App'));

app.listen(port, () => console.log(`TourCamp Server is listening at http://localhost:${port}`))