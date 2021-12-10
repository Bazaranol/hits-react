import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

export const RegisterPage: React.FC = () => {
    return (
        <Container>
            <Card className="p-3">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>
                            <strong>Логин</strong>
                        </Form.Label>
                        <Form.Control type="name" />
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>
                                <strong>Пароль</strong>
                            </Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>
                                <strong>Подтверждение пароля</strong>
                            </Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>
                                <strong>Email</strong>
                            </Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>
                                <strong>ФИО</strong>
                            </Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>
                                <strong>Дата Рождения</strong>
                            </Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>
                                <strong>Пол</strong>
                            </Form.Label>
                            <Form.Select>
                                <option>Муж</option>
                                <option>Жен</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Button variant="primary" type="submit">
                        Зарегистрироваться
                    </Button>
                </Form>
            </Card>
        </Container>
    );
};
