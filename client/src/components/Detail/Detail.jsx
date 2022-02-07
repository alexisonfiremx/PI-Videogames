import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getGameDetail, clearStateDetail } from "../../actions";
import { FullPageLoader } from "../FullPageLoader/FullPageLoader";
import { BackStyl, LinkBack, DivBackH1, Header1, SplitScreen, LeftContainer, CardLeft, CardRight, Image, Titles, Subtitles, SplitCard, MiniLeft, MiniRight } from "./Detail.elements";

export default function Detail (props) {
    console.log(props)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(clearStateDetail())
    }, [dispatch])
    
    useEffect(() => {
        dispatch(getGameDetail(props.match.params.id))
    }, [dispatch])


    const DetailFromState = useSelector(state => state.gameDetail)
    return (
        <div>
            <DivBackH1>
            <LinkBack to='/home'>
                <BackStyl>⮨</BackStyl>
            </LinkBack>
            </DivBackH1>
            {  DetailFromState.length > 0?
                <div>
                    <DivBackH1>
                        <Header1>{`Details of “${DetailFromState[0].name}”`}</Header1>
                    </DivBackH1>
                    <SplitScreen>
                        <LeftContainer>
                            {DetailFromState[0].image ? 
                            <Image src={DetailFromState[0].image} alt='Not found' width='100%' height='520px'/> :
                            <Image src='https://cdn.pixabay.com/photo/2021/05/06/14/51/gamepad-6233583_960_720.png' alt='Not found' width='100%' height='520px' />
                            
                        }
                        <CardLeft>
                            <SplitCard>
                                <MiniLeft>
                                    <Titles>Genres: </Titles>
                                    {DetailFromState[0].genres.length ?
                                    <Subtitles>{ DetailFromState[0].genres[0].name ?
                                            DetailFromState[0].genres.map(el => el.name).join(', ') :
                                            DetailFromState[0].genres.join(',  ') }
                                    </Subtitles> :
                                    <Subtitles>No Genres assigned to game</Subtitles>
                                    
                                }
                                </MiniLeft>
                                <MiniRight>
                                    <Titles>Platforms: </Titles>
                                    {DetailFromState[0].platforms.length ?
                                    <Subtitles>{ DetailFromState[0].platforms[0].name ?
                                            DetailFromState[0].platforms.map(platforms => platforms.name).join(', ') :
                                            DetailFromState[0].platforms.join(', ') }
                                    </Subtitles> : <Subtitles>No Platforms registered</Subtitles>
                                }
                                </MiniRight>
                            </SplitCard>
                        </CardLeft>
                        </LeftContainer>
                        <CardRight>
                            <Titles>About the game: </Titles>
                            <Subtitles>{DetailFromState[0].description.replace(/<\/?[^>]+>/gi, '').replace(/&#39;/g, "'")}</Subtitles>
                            <SplitCard>
                                <MiniLeft>
                                    <Titles>Released: </Titles>
                                    <Subtitles>{DetailFromState[0].released}</Subtitles>
                                </MiniLeft>
                                <MiniRight>
                                    <Titles>Rating: </Titles>
                                    <Subtitles>{`★ ${DetailFromState[0].rating}`}</Subtitles> 
                                </MiniRight>
                            </SplitCard>
                        </CardRight>
                    </SplitScreen>

                </div> : <FullPageLoader />
                
            }
            
        </div>
    )
}