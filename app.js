const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

const contactRouter = require('./routes/contactRoutes');

app.use(cors());
app.options('*',cors());

app.use(express.json());
app.use(morgan('dev')); // Because of the colored console logs


app.get('/',(req, res) => {
	res.status(200).send('<h2>Welcome to my Server</h2>')
})

app.use('/api/contacts', contactRouter);

module.exports = app;