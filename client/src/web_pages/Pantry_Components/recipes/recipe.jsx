import React from 'react';


const Recipe = (props) => {

        return (
            <div >
                <div>
                    <img id='foodImage' src={props.image}></img>
                    <div id='recipeBasics'>
                        <h2>{props.title}</h2>
                        <p>Cuisine: {props.cuisines}</p>
                        <p>Prep Time: {props.preparationMinutes}</p>
                        <p>Cooking Time: {props.cookingMinutes}</p>
                        <p>Total Time: {props.readyInMinutes}</p>
                    </div>
                </div>
                <p className='recipeInst'>Instructions: {props.instructions}</p>
                <a className='recipeInst' href={props.sourceUrl}>Click Here For More Information</a>
            </div>
        )
}

export default Recipe;
