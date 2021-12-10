import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./App.css"
import { Header } from "./components/atoms/Header/Header"
import { NotFound } from "./components/atoms/NotFound/NotFound"
import { FavoritesMovies } from "./components/pages/FavoritesMovies/FavoritesMovies"
import { LoginPage } from "./components/pages/LoginPage/LoginPage"
import { MoviePage } from "./components/pages/MoviePage/MoviePage"
import { MoviesPage } from "./components/pages/MoviesPage/MoviesPage"
import { ProfilePage } from "./components/pages/ProfilePage/ProfilePage"
import { RegisterPage } from "./components/pages/RegisterPage/RegisterPage"

export const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-3">
                        <Switch>
                            <Route
                                exact
                                path="/"
                                component={MoviesPage}
                            ></Route>
                            <Route
                                exact
                                path="/login"
                                component={LoginPage}
                            ></Route>
                            <Route
                                exact
                                path="/registration"
                                component={RegisterPage}
                            ></Route>
                            <Route
                                exact
                                path="/profile"
                                component={ProfilePage}
                            ></Route>
                            <Route
                                exact
                                path="/movie"
                                component={MoviePage}
                            ></Route>
                            <Route
                                exact
                                path="/favorites"
                                component={FavoritesMovies}
                            ></Route>
                            <Route path="*" component={NotFound}></Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    )
}
