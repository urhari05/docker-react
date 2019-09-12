import React, {Component} from 'react';

const Cockpit = (props) => (
    <div>
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={props.style} onClick={props.click}>Toggle Persons</button>
    </div>
);

export default Cockpit;