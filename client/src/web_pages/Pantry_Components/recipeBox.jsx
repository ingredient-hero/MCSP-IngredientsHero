import React, { Component } from 'react';
import Recipe from './recipes/recipe.jsx';


const RecipeBox = (props) => {

    return props.recipes.recipes.map( recipe => {
            return (
                <div id='recipe' key={recipe.id}>
                    <Recipe id={recipe} title={recipe.title} cuisines={recipe.cuisines} image={recipe.image} 
                    preparationMinutes={recipe.preparationMinutes} cookingMinutes={recipe.cookingMinutes}
                    readyInMinutes={recipe.readyInMinutes} instructions={recipe.instructions} sourceUrl={recipe.sourceUrl}/>
                </div>
            )
        })
}

export default RecipeBox;