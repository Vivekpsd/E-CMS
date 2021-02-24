const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('App Running!');
});

app.listen(PORT, () => console.log(`Server Running on port ${PORT}!`));
