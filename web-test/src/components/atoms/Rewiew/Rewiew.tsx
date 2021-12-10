import React from "react";
import { Card, Col, Row } from "react-bootstrap";

interface IRewiew {
    nickname: string;
    text: string;
    date: string;
    average: number;
}

export const Rewiew: React.FC<IRewiew> = ({
    nickname,
    text,
    date,
    average,
}) => {
    return (
        <Card>
            <Card.Header>
                <strong>{nickname}</strong>
                <Row>
                    <Col className="me-auto"></Col>
                    <Col className="ms-auto"></Col>
                </Row>
            </Card.Header>
            <Card.Body></Card.Body>
        </Card>
    );
};
