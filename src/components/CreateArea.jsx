import React, { useState } from "react";
import PostAddIcon from '@material-ui/icons/PostAdd';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [isClicked,setIsClicked] = useState(false);
  const [fullNote, setFullNote] = useState({
    title: "",
    content: ""
  });

  function changeHandler(event) {
    const { name, value } = event.target;

    setFullNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function submitNote(event) {
    event.preventDefault();
    props.onAdd(fullNote);
    setFullNote({
      title: "",
      content: ""
    });
    setIsClicked(false);
  }

  return (
    <div>
      <form className="create-note">
        <input
         onClick={()=>{
            setIsClicked(true);
          }}
          onChange={changeHandler}
          name="title"
          placeholder={isClicked?"Title":"Take a note..."}
          value={fullNote.title}
        />
        {isClicked&&
        <textarea
          onChange={changeHandler}
          name="content"
          placeholder="Take a note..."
          rows={isClicked?"4":"1"}
          value={fullNote.content}
        />
        }
        <Zoom in={isClicked}>
        <Fab onClick={submitNote}>
          <PostAddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
