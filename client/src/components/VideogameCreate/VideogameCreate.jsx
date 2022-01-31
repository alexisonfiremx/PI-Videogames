import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllGenres, postNewGame, getAllPlatforms } from "../../actions";
import { BackStyl, LinkBack, Header1, Form, LabelStyle, InputForm, InputDesc, SelectorForm, InputShort, ContainerofTwo, ContainerofOne, SecondaryButton, Container3, Container4, Container5, Container6, MiniButton, AlertStyl, BackgroundImg } from './VideogameCreate.elements'


const isValidUrl = (url) => {
    try {
        new URL(url);
    } catch (e) {
        console.error(e);
        return false;
    }
    return true;
    };

function validateInput(input) {
    var errors = {};
    if(!input.name){
        errors.name = 'Name is required';
    } else if (input.name.length > 100 ){
        errors.name = "Name is too long (Max = 100 characters)"
    }
    if(!input.description) {
        errors.description = 'Description is required';
    } else if (input.description.length > 1500) {
        errors.description = 'Description is too long. (Max = 1500 characters)'
    }
    if(!input.rating){
        errors.rating = 'Rating is required'
    } else if (input.rating > 5 || input.rating < 0) {
        errors.rating = "Rating must range between 0 to 5"
    }
    if(!input.released) {
        errors.released = "Date of release is required"
    } if(!input.image) {
        errors.image = "Image URL is required"
    } else if (!isValidUrl(input.image)){
        errors.image = "Not validated as URL"
    } if(!input.genres[0]){
        errors.genres = "Minimun one Genre is required "
    } if (!input.platforms[0]){
        errors.platforms = 'Minimun one Platform is required' 
    }
    

    return errors;
}


export default function CreateGame() {
    const dispatch = useDispatch();
    const allGenres = useSelector(state => state.genres) // almacena todo lo que se encuentra en el estado de 'genres'
    const allPlatforms = useSelector(state => state.platforms)
    const history = useHistory();
    const [errors, setErrors] = useState({})

    // useSelector sustituye a mapStateToProps.
    const [input, setInput] = useState({
        name: '',
        description: '',
        released: '',
        rating: '',
        image:'',
        genres: [],
        platforms: []
    })

    useEffect(()=> {
        dispatch(getAllGenres());
    }, [])

    useEffect(()=> {
        dispatch(getAllPlatforms())
    },[])


    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErrors(validateInput({
            ...input,
            [e.target.name] : e.target.value
        }));
        console.log(input)
    }

    function handleSelect(e) {
        setInput({
            ...input,
            [e.target.name]: [...input[e.target.name], e.target.value ]
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(input);
        dispatch(postNewGame(input))
        alert('Video game created successfully!')
        setInput({
            name: '',
            description: '',
            released: '',
            rating: '',
            image:'',
            genres: [],
            platforms: []
        })
        history.push('/home')
    }

    function handleDeletePlatforms(el) {
        
        setInput({
            ...input,
            platforms: input.platforms.filter(param => param !== el)
        })
    }
    function handleDeleteGenres(el) {
        setInput({
            ...input,
            genres: input.genres.filter(param => param !== el)
        })
    }

    return (
        <div>
            <Container3>
                <Container4>
                    <LinkBack to='/home'><BackStyl>⮨</BackStyl></LinkBack>
                </Container4>
                <Container4>
            <Header1> Create Video Game</Header1>
                </Container4>
            </Container3>
            <Container3>
                <Form onSubmit={ e => handleSubmit(e)}>
                    <LabelStyle>Name:</LabelStyle>
                    <InputForm className={errors.name && 'danger'} type='text' value={input.name} name='name' onChange={e => handleChange(e)}/>
                    {errors.name && ( <AlertStyl>{errors.name}</AlertStyl> )}
                    <LabelStyle>Description:</LabelStyle>
                    <InputDesc className={errors.description && 'danger'} type='text' value={input.description} name='description' onChange={e => handleChange(e)}/>
                    {errors.description && ( <AlertStyl>{errors.description}</AlertStyl> )}
                    <ContainerofTwo>
                        <ContainerofOne>
                            <LabelStyle>Rating: (From 0 to 5)</LabelStyle>
                            <InputShort className={errors.rating && 'danger'} type='number' step="0.1" value={input.rating} name='rating'  onChange={e => handleChange(e)}/>
                            {errors.rating && ( <AlertStyl>{errors.rating}</AlertStyl> )}
                        </ContainerofOne>
                        <ContainerofOne>
                            <LabelStyle>Released:</LabelStyle>
                            <InputShort className={errors.released && 'danger'} type='date' value={input.released} name='released'  onChange={e => handleChange(e)}/>
                            {errors.released && ( <AlertStyl>{errors.released}</AlertStyl> )}
                        </ContainerofOne>
                    
                    </ContainerofTwo>
                    <LabelStyle>Image URL:</LabelStyle>
                    <InputForm type='text' className={errors.image && 'danger'} value={input.image} name='image'  onChange={e => handleChange(e)}/>
                    {errors.image && ( <AlertStyl>{errors.image}</AlertStyl> )}
                    
                        <LabelStyle>Genres: </LabelStyle>
                        <SelectorForm className={errors.genres && 'danger'} name='genres' onChange={e => handleSelect(e)}>
                            <option hidden value='selected'>Select</option>
                            { allGenres?.map(el => (
                                <option key={el.id} value={el.name}>{el.name}</option>
                                )
                            )} 
                        </SelectorForm>
                            <div>{errors.genres && ( <AlertStyl>{errors.genres}</AlertStyl> )}</div>
                    <Container5>
                        {input.genres.map(el => 
                            <Container6 key={el}>
                                <div>{el}</div>
                                <MiniButton onClick={() => handleDeleteGenres(el)}>X</MiniButton>
                            </Container6>
                        )}
                    </Container5>
                    
                        <LabelStyle>Platforms: </LabelStyle>
                        <SelectorForm className={errors.platforms && 'danger'} name='platforms' onChange={e => handleSelect(e)}>
                            <option hidden value='selected'>Select</option>
                            {   allPlatforms?.map(el => (
                                    <option key={el.id} value={el.name}>{el.name}</option>
                                )
                            )}
                        </SelectorForm>
                        <div>{errors.platforms && ( <AlertStyl>{errors.platforms}</AlertStyl> )}</div>
                    
                    <Container5>
                        {input.platforms.map(el => 
                            <Container6 key={el}>
                                <div>{el}</div>
                                <MiniButton onClick={() => handleDeletePlatforms(el)}>✖</MiniButton>
                                </Container6>
                        )}
                    </Container5>
                    

                <SecondaryButton disabled={input.name === '' || errors.name || 
                                            input.description === '' || errors.description ||
                                            input.rating === '' || errors.rating ||
                                            input.genres[0] === '' || errors.genres ||
                                            input.platforms[0] === '' || errors.platforms
                                            } type='submit'>Create Video Game</SecondaryButton>
                </Form>
                
                    <BackgroundImg></BackgroundImg>
                </Container3>
        </div>
    )
}

