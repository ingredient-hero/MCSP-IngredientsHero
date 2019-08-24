import React from 'react';


const Recipe = (props) => {

        return (
            <div>
                <img src={props.image}></img>
                <h2>{props.title}</h2>
                <p>Cuisine: {props.cuisines}</p>
                <p>Prep Time: {props.preparationMinutes}</p>
                <p>Cooking Time: {props.cookingMinutes}</p>
                <p>Total Time: {props.readyInMinutes}</p>
                <p>Instructions: {props.instructions}</p>
                <a href={props.sourceUrl}>Click Here For More Information</a>
            </div>
        )
}

export default Recipe;
