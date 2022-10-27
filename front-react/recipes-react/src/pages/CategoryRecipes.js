import React from "react";
import {Link, useParams} from "react-router-dom";
import Axios from "axios";

export function CategoryRecipes() {
    const params = useParams()
    let [recipes, setRecipes] = React.useState()
    if (!recipes) {
        Axios.get(`http://127.0.0.1:8000/category/${params.categoryName}`)
            .then(response => {
                setRecipes(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <>
            {recipes ? (
                <nav><ul>{recipes.map(recipe =>
                    <li className="text-decoration-none" key={recipe.id}>
                        <Link to={"/recipe/" + recipe.id} className="d-block btn-link btn text-black text-uppercase bg-info m-4">
                            {recipe.name}
                        </Link>

                    </li>)}
                    <Link className="btn btn-light bg-success" to="/">Home</Link>
                </ul></nav>) :
                (
                    <h1><Link to="/">Home</Link></h1>
                )
            }
        </>
    )
}