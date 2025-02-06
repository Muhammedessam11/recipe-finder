import React, { useState } from 'react';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const searchRecipes = async () => {
    const response = await fetch(`http://localhost:5000/search?query=${query}`);
    const data = await response.json();
    setRecipes(data.results || []);
  };

  const getRecipeDetails = async (id) => {
    const response = await fetch(`http://localhost:5000/recipe/${id}`);
    const data = await response.json();
    setSelectedRecipe(data);
  };

  return (
    <div className="App">
      <h1>Recipe Finder</h1>
      <div>
        <input
          type="text"
          placeholder="Search for recipes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchRecipes}>Search</button>
      </div>
      <div className="recipes">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe" onClick={() => getRecipeDetails(recipe.id)}>
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
          </div>
        ))}
      </div>
      {selectedRecipe && (
        <div className="recipe-details">
          <h2>{selectedRecipe.title}</h2>
          <p><strong>Ingredients:</strong></p>
          <ul>
            {selectedRecipe.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
          <p><strong>Instructions:</strong></p>
          <div dangerouslySetInnerHTML={{ __html: selectedRecipe.instructions }} />
        </div>
      )}
    </div>
  );
}

export default App;
