import React, {useState} from "react";
import Axios from "axios";
import {Link} from "react-router-dom";


export function HomePage(){
    const [data, setData] = useState([])
    if (data.length < 1){
        Axios.get('http://127.0.0.1:8000/categories/')
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <>
            <h1 className="text-uppercase text-center">Categories</h1>
            <nav className="d-block">
            { data.length < 1 ?
                "Loading..." :
                data.map(category =>
                    <Link className="d-block btn-link btn text-black text-uppercase bg-info m-4"
                          key={category[0]}
                          to={"recipes-from-category/" + category[0]}
                    >
                        {category[1]}
                    </Link>)
            }
            </nav>
        </>
    )

}