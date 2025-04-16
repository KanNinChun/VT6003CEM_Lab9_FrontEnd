import React from 'react';
const Hello = (props: any) => {
    //we expect props to have a property called name
    const greeting = `Hello ${props.name}`;
    if (props.name === null || props.name === undefined) {
        return <h1>Hello World</h1>;
    }
    else { 
        return <h1>{greeting}</h1>; 
    }
}
export default Hello;