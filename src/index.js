import React from "react";
import ReactDOM from 'react-dom/client';

function Greeting() {
    // You dont need the parenthesis but it is recommended to use that way you can put your elements anywhere if not they have to be in the same line
    return (
    <React.Fragment>   
         {/* You can also use div or section instead of react.fragment   React fragment makes it so you dont have a div or section on your code*/}
         {/*  In react instead of using class="somevalue" it is going to be className now */}
    <div className="someValue">
    <h3> Hello People</h3>
    <ul>
        <li>
            <a href="#">Hello world</a>
        </li>
    </ul>
    </div>
    <h2> We need another div if you want to seperate it from the first</h2>
    {/* In react elements that dont have a closing tag like img and input now your suppose to close em */}
    <input type='text' name="" id="" />
    </React.Fragment>
    );
}


// function Greeting() {
//     return React.createElement('h2', {}, 'hello world');
// }

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting/>);