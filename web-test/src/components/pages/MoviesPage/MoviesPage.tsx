import React, { useState } from "react";
import { Container, Pagination } from "react-bootstrap";
import { MovieCard } from "../../molecules/MovieCard/MovieCard";

export const MoviesPage: React.FC = () => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            name: "Побег из шоушенка",
            country: "США",
            date: 1999,
            genre: "драма",
            average: 9.0,
        },
        {
            id: 2,
            name: "Король Лев",
            country: "США",
            date: 1997,
            genre: "мультфильм",
            average: 10,
        },
        {
            id: 3,
            name: "Побег из шоушенка",
            country: "США",
            date: 1998,
            genre: "драма",
            average: 9.0,
        },
    ]);
    return (
        <Container>
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    name={movie.name}
                    country={movie.country}
                    date={movie.date}
                    genre={movie.genre}
                    average={movie.average}
                />
            ))}
            <Pagination className="mt-3">
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Next />
            </Pagination>
        </Container>
    );
};
