const express = require('express');
const database = require('./database/connection');

const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/index'));

app.listen(3000);
console.log('Server on por', 3000);
