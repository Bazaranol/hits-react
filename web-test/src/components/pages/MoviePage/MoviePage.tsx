import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import { IMovieCard } from "../../molecules/MovieCard/MovieCard";
export const MoviePage: React.FC<IMovieCard> = ({
    name,
    country,
    date,
    genre,
    average,
}) => {
    // const [rewiew, setRewiew] = useState[({id:1, average:5}, {id:1, average: 2})];
    return (
        <Container>
            <Card className="p-3">
                <h2>Отзывы и оценки</h2>
            </Card>
        </Container>
    );
};
