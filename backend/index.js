const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const SPOONACULAR_API_KEY = 'your-spoonacular-api-key'; // Replace with your Spoonacular API key
const SPOONACULAR_URL = 'https://api.spoonacular.com/recipes';

// Search for recipes by ingredients
app.get('/search', async (req, res) => {
  const { query } = req.query;
  try {
    const response = await axios.get(`${SPOONACULAR_URL}/complexSearch`, {
      params: {
        apiKey: SPOONACULAR_API_KEY,
        query: query,
        number: 10, // Number of recipes to return
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from Spoonacular API' });
  }
});

// Get recipe details by ID
app.get('/recipe/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`${SPOONACULAR_URL}/${id}/information`, {
      params: {
        apiKey: SPOONACULAR_API_KEY,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch recipe details' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
