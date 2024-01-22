const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

const ratings = {};

app.get('/api/ratings/:vehicleId', (req, res) => {
  const { vehicleId } = req.params;
  const rating = ratings[vehicleId] || 0;
  res.json({ rating });
});


app.post('/api/ratings/:vehicleId', (req, res) => {
  const { vehicleId } = req.params;
  const { rating } = req.body;

  if (typeof rating !== 'number' || rating < 1 || rating > 5) {
    return res.status(400).json({ error: 'Invalid rating' });
  }
  ratings[vehicleId] = rating;
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Le serveur s'est lancé sur le port ${PORT}`);
});



