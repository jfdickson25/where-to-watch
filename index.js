const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')))

const routes = require('./routes');

app.set('view engine', 'ejs');
app.use('/', routes);

app.listen(PORT, () => {
    console.log("App listening on port 5000");
});