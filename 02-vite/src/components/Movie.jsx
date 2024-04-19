import { css } from "@emotion/react";

const style = css({
    backgroundColor: 'transparent',
    border: '1px solid grey',
    width: '23%',
    borderRadius: '20px'
})

function Movie({ movie }) {
    return (
        <div css={style}>
            <h2>{movie.title}</h2>
            <img src={movie.poster_path} height='300px' />
        </div>
     );
}

export default Movie;