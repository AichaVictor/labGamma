import { useState, useEffect } from "react";

function MoviesPage() {
    const [movies, setMovies] = useState([]);
    useEffect(async () => {
        const response = await fetch("api/movies");
        const movies = await response.json();
        setMovies(movies);
    }, []);
    return (
        <div>
            <h1>Movies List</h1>
            <ul>
                {movies.map(movie => {
                    return (
                        <li key={movie.id}>
                            {movie.title} - {movie.releaseYar}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
export default MoviesPage;