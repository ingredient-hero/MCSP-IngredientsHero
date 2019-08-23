import React from 'react';
import Recipe from './recipe.jsx';
import axios from 'axios';

export default class RecipeBox extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            count: 0,
        }
    }




    componentDidMount () {
        axios.get('https://api.spoonacular.com/recipes/random', `${process.env.SPOON_API_KEY}`)
        .then( res => {
            console.log(res)
        })
        .catch( err => {
            if (err) {
                console.error(err);
            }
        })
    }
    


    render () {
        while (this.state.count < 5) {
            this.state.count++;
            return (
                <Recipe />
            )
        }
    }
}
