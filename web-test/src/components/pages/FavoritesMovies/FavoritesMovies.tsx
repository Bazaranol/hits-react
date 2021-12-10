import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FavoriteCard } from "../../molecules/FavoriteCard/FavoriteCard";
import { MovieCard } from "../../molecules/MovieCard/MovieCard";

export const FavoritesMovies: React.FC = () => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            name: "Какой-то фильм",
            country: "США",
            date: 1999,
            genre: "драма",
            average: 9.0,
        },
        {
            id: 2,
            name: "Лев",
            country: "Россия",
            date: 1988,
            genre: "мультфильм",
            average: 10,
        },
        {
            id: 3,
            name: "Побег",
            country: "США",
            date: 1908,
            genre: "драма",
            average: 9.0,
        },
    ]);
    return (
        <Container>
            {movies.map((movie) => (
                <FavoriteCard
                    key={movie.id}
                    name={movie.name}
                    country={movie.country}
                    date={movie.date}
                    genre={movie.genre}
                    average={movie.average}
                />
            ))}
        </Container>
    );
};
