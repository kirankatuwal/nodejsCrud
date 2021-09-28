const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// dotenv file for securing credential
dotenv.config({ path: 'config.env' });
const PORT = process.env.PORT || 8080;

// log request
app.use(morgan('tiny'));

// parse request to body-parser
app.use(bodyParser.urlencoded({ extended: true }))
// app.set("views",path.resolve(__dirname,"views/ejs"));

//load assets

// app.use('/css'.express.static(path.join(__dirname, "assets/css")));
// app.use('/img'.express.static(path.join(__dirname, "assets/img")));
// app.use('/js'.express.static(path.join(__dirname, "assets/js")));

app.use('/img', express.static(path.join(__dirname, 'assets/img')));
app.use('/js', express.static(path.join(__dirname, 'assets/js')));
app.use('/css', express.static(path.join(__dirname, 'assets/css')));

// set view engine
app.set('view engine', "ejs");

//  Loads router
app.use('/', require('./server/routes/router'));

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT} port`);
})


