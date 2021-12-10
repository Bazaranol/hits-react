import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const Header: React.FC = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand className="ms-4">Movies Catalog</Navbar.Brand>
            <Nav className="me-auto">
                <NavLink exact to="/" className="nav-link">
                    Фильмы
                </NavLink>
                <NavLink exact to="/favorites" className="nav-link">
                    Избранное
                </NavLink>
                <NavLink exact to="/profile" className="nav-link">
                    Мой профиль
                </NavLink>
            </Nav>
            <Nav className="ms-auto">
                <NavLink exact to="/login" className="nav-link">
                    Вход
                </NavLink>
                <NavLink exact to="/registration" className="nav-link">
                    Регистрация
                </NavLink>
            </Nav>
        </Navbar>
    );
};
