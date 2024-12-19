import React from "react";
import ReactDOM from "react-dom/client";
/*  
    <div>
        <div>
            <h1>
*/

// let heading = React.createElement('h1', {id:"title"}, 'this is the title');

let heading = <h1> this is the title </h1>;

let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);