import React from "react";
import './App.scss';
import {Link, Outlet} from "react-router-dom";
import imagePng from '@/assets/img.png';
import DiamondSvg from '@/assets/diamond.svg';


const App = () => {

    // if (__PLATFORM__ === 'desktop') {
    //     return <h1>Hello desktop</h1>
    // }
    //
    // if (__PLATFORM__ === 'mobile') {
    //     return <h1>Hello mobile</h1>
    // }

    // if (__ENV__ === 'development') {
    //     return <h1>Hello development</h1>
    // }
    //
    // if (__ENV__ === 'production') {
    //     return <h1>Hello production</h1>
    // }

    return (
        <>
            <h1>PLATFORM: {__PLATFORM__}</h1>
            <div>
                <img src={imagePng} alt="img" width={400} height={400} />
                <DiamondSvg width={400} height={400} />
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
