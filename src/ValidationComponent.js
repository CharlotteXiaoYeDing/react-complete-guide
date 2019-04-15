import React from "react"

const validationComponent = (props) => {
    let output = null;
    if (props.textLength < 5) {
        output = "Text too short."
    } else {
        output = "Text long enough"
    }
    return <p>{output}</p>
}

export default validationComponent