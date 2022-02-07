import React from 'react';
import { Link } from 'react-router-dom';
import s from "./LandingPage.module.css";
import Logo from '../../img/INFINITE_mini.png'
// import { ButtStyl, H1Styl, H3Styl, LinkHome, Container, Background } from './LandigPage.elements';

const LandingPage = () => {
    return (
        <div className={s.backgrpund}>
            <img src={Logo} alt="Logo" className={s.logo} />
            <div className={s.container}>
                <h1 className={s.header}>A video games Database API</h1>
                <h3 className={s.paragraph} >Welcome to the guiding star in your world of gaming. We are gladly sharing over 500,000+ games. Experience what this database API can do!</h3>

                <Link className={s.links} to = '/home'>
                    <button className={s.box} >Explore</button>
                </Link>  


            </div>
        </div>
    )
}

export default LandingPage