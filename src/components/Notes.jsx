import React from "react";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Note(props) {
  return (
    <div className="note">
      <h1>{props.Title}</h1>
      <p>{props.Content}</p>
      <button onClick={()=>{
          props.onDelete(props.id);
      }}><DeleteForeverIcon /></button>
    </div>
  );
}

export default Note;
