import React from "react";
import { Link } from "react-router-dom";
import { FrameSty, H2Sty, H5Sty, H5Sty2, LinkSty, ImageSty, CenterSty } from "./Card.elements";

export default function Card({name, image, genres, rating, id}) {
    return (
        <FrameSty>
            <ImageSty src={image} alt='Not found' width='350px' height='200px' />
            <CenterSty>
            <H5Sty>{ genres[0].name ?
            genres.map(genre => genre.name).join(', ') :
            genres.join(', ') }</H5Sty>
            <LinkSty to={`/videogame/${id}`}>
            <H2Sty>{name}</H2Sty>
            </LinkSty>  
            <H5Sty2>{`★ ${rating}`}</H5Sty2>
            </CenterSty>
        </FrameSty>
    )
}