import React from 'react';
import { Link } from 'react-router-dom';
import { ButtStyl, H1Styl, H3Styl, LinkHome, Container, Background } from './LandigPage.elements';

const LandingPage = () => {
    return (
        <Background>    
            <Container>
                <H1Styl>Videogames Database API</H1Styl>
                <H3Styl>Welcome to the guiding star in your world of gaming. We are gladly sharing over 500,000+ games. Experience what this database API can do!</H3Styl>

                <LinkHome to = '/home'>
                    <ButtStyl>Explore</ButtStyl>
                </LinkHome>  

                
            </Container>
        </Background>
    )
}

export default LandingPage