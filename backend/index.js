require('dotenv').config()
const express = require("express");
const mongoose = require('mongoose')
const bycrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authRoutes = require('./routes/authRoutes')
const eventRoutes = require('./routes/eventRoutes')

const cors = require('cors')

const app = express();
const port = 3000;

app.use(express.json())

app.use(cors())
app.use('/', authRoutes); 
app.use('/event/', eventRoutes); 

app.listen(3000, () => console.log("Conectado"))
