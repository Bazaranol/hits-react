import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import { Rewiew } from "../../atoms/Rewiew/Rewiew";
import { IMovieCard } from "../../molecules/MovieCard/MovieCard";
export const MoviePage: React.FC<IMovieCard> = ({
    name,
    country,
    date,
    genre,
    average,
}) => {
    // const [rewiew, setRewiew] = useState[({id:1, average:5}, {id:1, average: 2})];
    const [rewies, setRewies] = useState([
        {
            id: 1,
            nickname: "Побег из шоушенка",
            text: "США",
            date: 1999,
            genre: "драма",
            average: 9.0,
        },
        {
            id: 2,
            nickname: "Король Лев",
            text: "США",
            date: 1997,
            genre: "мультфильм",
            average: 10,
        },
    ]);
    return (
        <Container>
            <Card className="p-3">
                <h2>Отзывы и оценки</h2>
                {rewies.map((rewiew) => (
                    <Rewiew
                        key={rewiew.id}
                        nickname={rewiew.nickname}
                        text={rewiew.text}
                        date={rewiew.date}
                        average={rewiew.average}
                    />
                ))}
            </Card>
        </Container>
    );
};
