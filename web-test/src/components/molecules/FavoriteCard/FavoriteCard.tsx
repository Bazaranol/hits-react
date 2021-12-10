import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { DeleteButton } from "../../atoms/DeleteButton/DeleteButton";
import { RatingMovie } from "../../atoms/RatingMovie/RatingMovie";
import { IMovieCard } from "../MovieCard/MovieCard";
export const FavoriteCard: React.FC<IMovieCard> = ({
    name,
    country,
    date,
    genre,
    average,
}) => {
    const history = useHistory();
    const routeChange = () => {
        const path = "/movie";
        history.push(path);
    };
    return (
        <Card className="p-3 movieCard" onClick={routeChange}>
            <Row>
                <Col className="me-auto">
                    <h3>{name}</h3>
                    <div>{date}</div>
                    <div>
                        {country} &middot; {genre}
                    </div>
                    <RatingMovie average={average} />
                </Col>
                <Col className="ms-auto justify-content-end">
                    <DeleteButton />
                </Col>
            </Row>
        </Card>
    );
};
