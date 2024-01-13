import React, { useEffect, useState } from 'react';
import { Recipe } from './Recipe';
import ClipLoader from 'react-spinners/ClipLoader';

export const Recipes = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [recipes, setRecipes] = useState([]);
	/**
	 * Pobranie danych
	 */
	useEffect(() => {
		fetch('https://dummyjson.com/recipes')
			.then(response => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error('Coś poszło nie tak');
				}
			})
			.then(data => {
				setRecipes(data.recipes);
			})
			.catch(error => {
				/**
				 * Obsługa błedów
				 */
				console.error(error);
			})
			.finally(() => {
				setIsLoading();
			});
	}, []);

	if (isLoading) {
		return (
			<div style={{ display: 'flex', justifyContent: 'center', marginTop: '10vh' }}>
				<ClipLoader color='white' size={150} />
			</div>
		);
	}

	return (
		<div>
			{recipes.map(recipe => (
				<Recipe key={recipe.id} recipe={recipe} />
			))}
		</div>
	);
};
