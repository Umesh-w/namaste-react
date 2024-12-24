import React, { Children } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestroMenu from "./components/RestroMenu";
import Error from "./components/Error";

import { createBrowserRouter,  Outlet,  RouterProvider } from 'react-router-dom';

const App = ()=>{
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    );
}

let appRoutes = createBrowserRouter([
    {
        path:'/',
        element:<App/>
        ,
        children : [
            {
                path:'/',
                element: <Body/>,
            },
            {
                path:'/about',
                element:<About/>,
            },
            {
                path:'/contact',
                element:<Contact/>,
            },
            {
                path:'/restromenu/:resId',
                element:<RestroMenu/>
            }
        ],
        errorElement: <Error/>
    }
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRoutes}/>);