import React from "react";
import './App.scss';
import {Link, Outlet} from "react-router-dom";


const App = () => {
    return (
        <>
            <Link to="/about">About</Link>
            <br />
            <Link to="/shop">Shop</Link>
            <h1>Hello world</h1>

            <Outlet />
        </>
    )
}

export default App;
