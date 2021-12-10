import React, { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import showshank from "../../../exampleImages/shawshank.jpg";
import { RatingMovie } from "../../atoms/RatingMovie/RatingMovie";
import { MoviePage } from "../../pages/MoviePage/MoviePage";
import "./movieCard.css";

export interface IMovieCard {
    name: string;
    country: string;
    date: number;
    genre: string;
    average: number;
}

export const MovieCard: React.FC<IMovieCard> = ({
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
                </Col>
                <Col className="ms-auto justify-content-end">
                    <RatingMovie average={average} />
                </Col>
            </Row>
        </Card>
    );
};
