const IMG_API = "https://image.tmdb.org/t/p/w1280";

interface Imovie {
    title: string;
    poster_path: string;
    overview: string;
    vote_average: number;
}

const setVoteClass = (vote: number) => {
    if (vote >= 8) {
        return "green";
    } else if (vote >= 6) {
        return "orange";
    } else {
        return "red";
    }
};

const Movie = (movie: Imovie) => (
    <div className="movie">
        <img
            src={
                movie.poster_path
                    ? IMG_API + movie.poster_path
                    : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1040&q=80} alt={title}>"
            }
            alt={movie.title}
        />
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <span className={`tag ${setVoteClass(movie.vote_average)}`}>
                {movie.vote_average}
            </span>
        </div>
        <div className="movie-over">
            <h2>Overview</h2>
            <p>{movie.overview}</p>
        </div>
    </div>
);

export default Movie;
