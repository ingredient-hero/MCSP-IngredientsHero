import React from 'react';
import Recipe from './recipe.jsx';
import axios from 'axios';
// import dotenv from 'dotenv';

const API_KEY = process.env._API_KEY;
export default class RecipeBox extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            count: 0,
            URL: '',
        }
    }




    componentDidMount () {
        console.log(process.env)
        // console.log(process.env.REACT_APP_API_KEY)
        axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.API_KEY}`)
        .then( res => {
            console.log(res.data)
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
