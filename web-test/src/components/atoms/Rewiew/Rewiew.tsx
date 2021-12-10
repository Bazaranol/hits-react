import React from "react";
import { Badge, Card, Col, Row } from "react-bootstrap";

interface IRewiew {
    nickname: string;
    text: string;
    date: number;
    average: number;
}

export const Rewiew: React.FC<IRewiew> = ({
    nickname,
    text,
    date,
    average,
}) => {
    return (
        <Card className="p-2">
            <Card.Header>
                <strong>{nickname}</strong>
                <Row>
                    <Col className="me-auto">
                        <strong>{nickname}</strong>
                    </Col>
                    <Col className="ms-auto">
                        Оценка: <Badge>{average}</Badge>
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body>{text}</Card.Body>
        </Card>
    );
};
