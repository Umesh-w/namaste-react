/*  
    <div>
        <div>
            <h1>
*/

const heading = React.createElement("div",{id:"parent"},
    [
        React.createElement("div",{id:"sub-parent"},
        [
            React.createElement("h2", {}, "this is sub heading in parent..."),
            React.createElement("h4", {}, "this is sub heading in parent...")
        ]
        ),
        React.createElement("div",{id:"sub-parent"},
        [
            React.createElement("h2", {}, "this is sub heading in parent..."),
            React.createElement("h4", {}, "this is sub heading in parent...")
        ]
        )
    ]
);
let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);