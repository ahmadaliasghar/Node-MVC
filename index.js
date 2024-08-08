const express = require('express');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth');

const bodyParser = require("body-parser");

const { default: mongoose } = require('mongoose');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());
// Connect Database
connectDB();

// Init Middleware
app.use(express.json());
app.use(cookieParser());

// Define Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
