import React from 'react';
import { CenterVSty, LiSty, ButtonSty } from './Pagination.elements';

export default function Pagination ({pageNow, allVideogamesfromState, vgPerPage}) {
    const pageNumbers = []

    for (let i = 1; i <=Math.ceil(allVideogamesfromState/vgPerPage); i++) {
        pageNumbers.push(i)
        }
    return (
        <nav>
            <CenterVSty> Pages: 
                { pageNumbers &&
                pageNumbers.map(num => {
                    return (
                    <LiSty key={num}>
                        <ButtonSty onClick={() => pageNow(num)}>{num}</ButtonSty>
                    </LiSty>
                    )
                })}
            </CenterVSty>
        </nav>
    )
}