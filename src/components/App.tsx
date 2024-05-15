import React from "react";
import './App.scss';
import {Link, Outlet} from "react-router-dom";
import imagePng from '@/assets/img.png';
import DiamondSvg from '@/assets/diamond.svg';


const App = () => {
    return (
        <>
            <div>
                <img src={imagePng} alt="img" width={400} height={400} />
                <DiamondSvg />
            </div>
            <Link to="/about">About</Link>
            <br />
            <Link to="/shop">Shop</Link>
            <h1>Hello world</h1>

            <Outlet />
        </>
    )
}

export default App;
