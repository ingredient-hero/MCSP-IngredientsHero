import React from 'react';


const Recipe = (props) => {

        return (
            <div >
                <div>
                    <img id='foodImage' src={props.image}></img>
                    <div id='recipeBasics'>
                        <h2 id='recipeTitle'>{props.title}</h2>
                        <p>Cuisine: <span className='cuisine'>{props.cuisines}</span></p>
                        <p>Prep Time: {props.preparationMinutes}</p>
                        <p>Cooking Time: {props.cookingMinutes}</p>
                        <p>Total Time: {props.readyInMinutes}</p>
                        <a className='recipeInst' href={props.sourceUrl} target="_blank">Click Here For Step-By-Step Instructions</a>
                    </div>
                </div>
                {/* <p className='recipeInst'>Instructions: {props.instructions}</p> */}
            </div>
        )
}

export default Recipe;
