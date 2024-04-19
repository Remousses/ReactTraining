import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "./Movie";
import styled from "@emotion/styled";
import Loader from "./Loader";
import Errors from "./Errors";

const FlexWrapper = styled.div(({ background }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    background,
    margin: 'auto',
    gap: 10
}))

function Ajax() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(false);

    useEffect(() => {
        setLoading(true)
        axios.get('https://api.vueflix.boxydev.com/movies')
            .then((response) => setMovies(response.data))
            .catch((errors) => {
                setErrors(errors)
            }).finally(() => {
                setLoading(false)
            })
    },[])

    if (loading) {
        return <Loader />
    }

    if (errors) {
        return <Errors />
    }

    return (
        <>
            <h2>Ajax</h2>

            <FlexWrapper background="white">
                {movies.map((movie) => <Movie key={movie.id} movie={movie}/>)}
            </FlexWrapper>
            
        </>
    );
}

export default Ajax;