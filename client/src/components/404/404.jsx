import React from "react";
import ErrorImg from '../../img/error.png'
import { H1, TextError, ButtonError, Header } from "./404.elements";
import { Link } from "react-router-dom";


export default function Error404() {

    return (
        <div>
            <Header>
                <H1>4</H1><div className="gradient">🛇</div><H1>4</H1>
            </Header>
            <TextError>Something is wrong. The page you're looking for can't be found.</TextError>
            <Link to="/home">
                <ButtonError >Take me to Home Page</ButtonError>
            </Link>

        </div>
    )
}