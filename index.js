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
	.listen(3005);