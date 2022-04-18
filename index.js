const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./router');

const app = express();

app
	.use(morgan('dev'))
	.use(cors())
	.use(express.json())
	.use(router)
  .get('/', (_, res) => { res.status(200).send('Hello, stranger!'); })
  .get('*', (_, res) => { res.status(404).send('Sorry, not found 😞'); })
	.listen(3005);