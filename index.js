const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')))

const routes = require('./routes');

app.set('view engine', 'ejs');
app.use('/', routes);

app.listen(5000, () => {
    console.log("App listening on port 5000");
});