import React from "react";
import {Link} from "react-router-dom";

import './Navigation.css'


export function Navigation() {
    return (
        <nav className="nav bg-light flex-row justify-content-between align-items-center p-3">
            <h3>LookRecipes</h3>
            <span className="text-uppercase">
                <Link className="m-3 btn-link btn text-decoration-none text-black border-1 border-dark nav-bar-home-button" to="/">Home</Link>
                <a href="http://127.0.0.1:8000/swagger-ui/" target="_blank" rel="noreferrer">API swagger</a>
            </span>
        </nav>
    )
}