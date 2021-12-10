import React from "react";
import {
    Card,
    Col,
    Container,
    Row,
    Image,
    Form,
    Button,
} from "react-bootstrap";
import profile from "../../../exampleImages/profile.png";

export const ProfilePage: React.FC = () => {
    return (
        <Container>
            <Card className="p-3">
                <Row>
                    <Col>
                        <Card style={{ width: "24rem" }}>
                            <Image src={profile}></Image>
                        </Card>
                    </Col>
                    <Col xs={7}>
                        <h1>ExampleNickname</h1>
                        <Form>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicPassword"
                            >
                                <Form.Label>
                                    <strong>Email</strong>
                                </Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="example@example.com"
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicPassword"
                            >
                                <Form.Label>
                                    <strong>Ссылка на аватар</strong>
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="avatar"
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicPassword"
                            >
                                <Form.Label>
                                    <strong>ФИО</strong>
                                </Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Joe Doe"
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label>
                                    <strong>Дата Рождения</strong>
                                </Form.Label>
                                <Form.Control
                                    type="date"
                                    placeholder="19.08.1993"
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicPassword"
                            >
                                <Form.Label>
                                    <strong>Пол</strong>
                                </Form.Label>
                                <Form.Select>
                                    <option>Муж</option>
                                    <option>Жен</option>
                                </Form.Select>
                            </Form.Group>
                            <Button
                                variant="warning"
                                type="button"
                                href="/registration"
                                className="me-2"
                            >
                                Редактировать
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
};
