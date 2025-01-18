const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path'); // Import the path module
const userRouter = require('./Routers/userRouter');
const adminRouter = require('./Routers/adminRouter');  

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect('mongodb+srv://chikubinoy:areeckal12@cluster0.haizr3t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Database is connected'))
    .catch((error) => console.error('Database connection error:', error));

// Routes for your API
app.use('/user', userRouter);
app.use('/admin', adminRouter);

// Serve static files from the dist folder
app.use(express.static(path.join(__dirname, 'dist')));

// Serve index.html for all unknown routes (important for React’s SPA routing)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

// Set the server to listen on a port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
