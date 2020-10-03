import React from "react";

function Notes(props){
    return (
    <div className="note">
        <h1>{props.Title}</h1>
        <p>{props.Content}</p>
    </div>
    );
}

export default Notes;