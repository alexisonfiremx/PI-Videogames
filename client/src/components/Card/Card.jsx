import React from "react";
import { Link } from "react-router-dom";
import { FrameSty, H2Sty, H5Sty, H5Sty2, LinkSty, ImageSty, CenterSty } from "./Card.elements";

export default function Card({name, image, genres, rating, id}) {
    return (
        <FrameSty>
            {image ? 
                <ImageSty src={image} alt='Not found' width='350px' height='200px' /> :
                <ImageSty src='https://cdn.pixabay.com/photo/2021/05/06/14/51/gamepad-6233583_960_720.png' alt='Not found' width='350px' height='200px' />
            }
            <CenterSty>
            {genres.length ?
            <H5Sty>{ genres[0].name ?
            genres.map(genre => genre.name).join(', ') :
            genres.join(', ') }</H5Sty> : <H5Sty>No Genres assigned to game</H5Sty>
            
        }
            <LinkSty to={`/videogame/${id}`}>
            <H2Sty>{name}</H2Sty>
            </LinkSty>  
            <H5Sty2>{`★ ${rating}`}</H5Sty2>
            </CenterSty>
        </FrameSty>
    )
}