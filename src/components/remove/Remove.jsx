import React from 'react'

function Remove(props){
    return (
        <button 
            className = 'remove'
            onClick = {() =>
                props.removeDrink(props.array, props.array.nameDrink)
            }     
        >
            Remove
        </button>
    )
}

export default Remove