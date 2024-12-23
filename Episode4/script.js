import React from "react";
import ReactDOM from "react-dom/client";

const Header = ()=>{
    return(
        <div className="header">
            <div className="logo">
                <img alt="company logo" src="https://img.freepik.com/free-vector/delivery-logo-template_23-2147880956.jpg?t=st=1734672068~exp=1734675668~hmac=c8652c376641fd8480e582ade8e6d118bc970ba28433f4e46cc93911b7c2c3fe&w=740"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart Logo</li>
                </ul>
            </div>
        </div>
    );
}

const RestroCard = () =>{
    return(
        <div className="restro-card">
            <div>
            <img alt="restro-logo"/>
            <h2>Restro Name</h2>
            <div>
                <div>ratings 4.5 30-35 mins </div>
                <div>food item 1, food item 2 </div>
                Location.
            </div>
            </div>
        </div>   
    )
}

const Body = () =>{
    return (
        <>
            <RestroCard/>
            <RestroCard/>
            <RestroCard/>
            <RestroCard/>
            <RestroCard/>
            <RestroCard/>
        </>
    );
}

const Footer= () =>{
    return (
        <>
            this is footer....
        </>
    );
}

const App = ()=>{
    return (
        <div className="app">
            <Header/>
            <Body/>
            
        </div>
    );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);