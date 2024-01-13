import React from 'react';

export const Recipe = ({ recipe }) => {
	console.log(recipe);
	return (
		<article>
			<h2>{recipe.name}</h2>
			<h3>Ingredients</h3>
			<ul>
				{recipe.ingredients.map(ingredient => (
					<li key={ingredient}>{ingredient}</li>
				))}
			</ul>
			<h3>Instructions</h3>
			<ul>
				{recipe.instructions.map(instructions => (
					<li key={instructions}>{instructions}</li>
				))}
			</ul>
			<img src={recipe.image} alt='' style={{ width: '50%' }} />
		</article>
	);
};

export default Recipe;
