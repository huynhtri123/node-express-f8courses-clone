const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const path = require('path');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

//HTTP methods override
app.use(methodOverride('_method'));

//connect to DB
db.connect();

//body parser (use middleware)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static file
app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: 'hbs',
        helpers: {
            sum: (a,b) => a + b,
        }   
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Route init
route(app);

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});
