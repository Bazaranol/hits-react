import React from "react";
import { IMovieCard } from "../../molecules/MovieCard/MovieCard";
export const MoviePage: React.FC<IMovieCard> = ({
    name,
    country,
    date,
    genre,
    average,
}) => {
    return (
        <div>
            movie
            {name}
            {country}
            {date}
            {genre}
            {average}
        </div>
    );
};
