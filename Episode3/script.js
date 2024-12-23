import React from "react";
import ReactDOM from "react-dom/client";
/*  
    <div>
        <div>
            <h1>
*/

// let heading1 = React.createElement('h1', {id:"title"}, 'this is the title');

// let heading = <h1> this is the title </h1>;
// console.log(heading);


//functional component...
const Title = () =>(
        <h1>This is the title</h1>
);


const Heading = ()=>{
    return (
        <div>
            <Title/>
            <Title></Title>
            {Title()}
            <h2>this is the heading</h2>
        </div>
    );
};

let root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Heading />);




// assignments
/* Create a Nested header Element using React.createElement(h1,h2,h3 inside a
div with class “title”) */

const divTitle = React.createElement('div',{className:"title"},[
    React.createElement('h1',{},'this is heading 1'),
    React.createElement('h2',{},"this is heading 2"),
    React.createElement('h3',{},"this is heading 3"),
])
// root.render(divTitle);

const divTitle2 = <div className="title">
    <h1>this is heading from JSX 1</h1>
    <h2>this is heading from JSX 2</h2>
    <h3>this is heading from JSX 3</h3>
</div>

// root.render(divTitle2);

const DivTitle3 = ()=>{
    return (
        <div className="title">
            <h1>this is heading from JSX using functional compo 1</h1>
            <h2>this is heading from JSX using functional compo 2</h2>
            <h3>this is heading from JSX using functional compo 3</h3>
        </div>
    )
}

const H1 = () => (
    <h1>this the h1 functional compo</h1>
)
const H2 = () => (
    <h2>this the h1 functional compo</h2>
)
const H3 = () => (
    <h3>this the h1 functional compo</h3>
)

const Divtitle4 = () =>{
    return(
        <div className="title">
            {/* component composition */}
            <H1/>
            <H2/>
            <H3/>
        </div>
    )
}

root.render(<Divtitle4/>);