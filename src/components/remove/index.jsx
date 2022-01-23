import React from "react";

function Remove(props) {
    return (
        <button
            className="remove"
            onClick={() => {
                for (let i in props.array) {
                    let element = props.array[i].nameDrink;
                    if (element === props.nameDrink1) {
                        props.removeDrink(props.array, props.setArray, props.nameDrink1)
                    }
                }
            }}
        >
            Remove
        </button>
    );
}

export default Remove;
