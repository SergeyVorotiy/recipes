import React from "react";
import {Link, useParams} from "react-router-dom";
import Axios from "axios";


export function Recipe() {
    const params = useParams()
    let [recipe, setRecipe] = React.useState()
    if (!recipe) {
        Axios.get(`http://127.0.0.1:8000/recipe/${params.recipeID}`)
            .then(response => {
                setRecipe(response.data)
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            {recipe ?
                (
                    <div>
                        {recipe.preview ?
                            <img className="img-fluid" src={'http://127.0.0.1:8000' + recipe.preview} alt="recipe preview"/>: ""}
                        <h1>{recipe.name}</h1>
                        <div>
                            <h2>ingredients:</h2>
                            <ul>
                                {recipe.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
                            </ul>
                        </div>
                        <p>Preparation: {recipe.preparation}</p>
                        <Link className="btn btn-light bg-success" to={`/recipes-from-category/${recipe.category}`}>Back</Link>
                    </div>

                ) :
                "Loading..."
            }

        </>
    )
}