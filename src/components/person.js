import React from 'react'
const person=(props)=>{
    return(
        <div>
        <h1 onClick={props.click}>My name is {props.name} and i am {props.age} years old</h1>
        <h2>{props.children}</h2>
        <input onChange={props.changed}/>
        </div>
    )
}

export default person