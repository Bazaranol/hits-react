import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";

export const LoginPage: React.FC = () => {
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
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>
                            <strong>Пароль</strong>
                        </Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="me-2">
                        Войти
                    </Button>
                    <Button
                        variant="secondary"
                        type="button"
                        href="/registration"
                        className="me-2"
                    >
                        Зарегистрироваться
                    </Button>
                </Form>
            </Card>
        </Container>
    );
};
