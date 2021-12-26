import React, {useState} from 'react';

function ReduxApp (){

    const [input, setInput] = useState()

    const handleInput = (event) => {
        setInput(event.target.value)
    }
    return(
        <div>
            <input onClick={handleInput} />
            <h1>Redux App</h1>
        </div>
    )
}


export default ReduxApp