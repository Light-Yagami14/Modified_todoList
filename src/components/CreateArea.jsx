import React, { useState } from "react";

function CreateArea(props) {
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
  }

  return (
    <div>
      <form>
        <input
          onChange={changeHandler}
          name="title"
          placeholder="Title"
          value={fullNote.title}
        />
        <textarea
          onChange={changeHandler}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={fullNote.content}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
