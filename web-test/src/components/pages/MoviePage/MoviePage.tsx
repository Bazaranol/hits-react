import React from "react";
import { Card, Container } from "react-bootstrap";
import { IMovieCard } from "../../molecules/MovieCard/MovieCard";
export const MoviePage: React.FC<IMovieCard> = ({
    name,
    country,
    date,
    genre,
    average,
}) => {
    const [rewiew, setRewiew] = useState[({}, {})];
    return (
        <Container>
            <Card className="p-3">
                <h2>Отзывы и оценки</h2>
            </Card>
        </Container>
    );
};
