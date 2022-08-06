import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { authenticate } from "./store/session";
import NavBar from "./components/Navbar/NavBar";
import Home from "./components/Home/Pages";
import FriendsPage from "./components/Friends/Pages/FriendsPage";
import UsersPage from "./components/Friends/Pages/UsersPage";
import RequestsPage from "./components/Friends/Pages/RequestsPage";
import ContactPage from "./components/Contact/pages/ContactPage";

function App() {
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            await dispatch(authenticate());
            setLoaded(true);
        })();
    }, [dispatch]);

    if (!loaded) {
        return null;
    }

    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path="/contact" exact={true}>
                    <ContactPage />
                </Route>
                <ProtectedRoute path="/friends" exact={true}>
                    <UsersPage />
                </ProtectedRoute>
                <ProtectedRoute path="/friends/requests" exact={true}>
                    <RequestsPage />
                </ProtectedRoute>
                <ProtectedRoute path="/friends/list" exact={true}>
                    <FriendsPage />
                </ProtectedRoute>
                <ProtectedRoute path="/profile/:id" exact={true}></ProtectedRoute>
                <Route path="/" exact={true}>
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
