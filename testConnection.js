require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://ahmadaliasghar:admin123@cluster0.utrz0qp.mongodb.net/calendertask?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
  }
};

connectDB();
