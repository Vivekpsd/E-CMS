const express = require('express');
const connectDB = require('./config/db');

const app = express();
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('App Running!');
});

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/course', require('./routes/api/course'));

app.listen(PORT, () => console.log(`Server Running on port ${PORT}!`));
