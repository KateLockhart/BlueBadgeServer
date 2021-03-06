//ENV
require('dotenv').config()

//EXPRESS
const express = require('express');
const app = express();

//CONTROLLERS
const opentrails = require('./controllers/opentrailscontroller');
const trails = require('./controllers/trailscontroller');
const user = require('./controllers/usercontroller');

//DATABASE
const sequelize = require('./db');
sequelize.sync();
app.use(express.json());
app.use(require('./middleware/headers'));

//LISTEN
app.listen(process.env.PORT, () => console.log(`app is listening on ${process.env.PORT}`));

//ROUTES
app.use('/user', user);
app.use(require('./middleware/validate-session'));
app.use('/trails', trails);
app.use('/opentrails', opentrails);