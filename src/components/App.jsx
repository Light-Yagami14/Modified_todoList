import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Notes from "./Notes";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addItem(item) {
    console.log(item);
    setNotes((prevValue) => {
      return [...prevValue, item];
    });
  }

  function deleteItem(id) {
    setNotes((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {notes.map((note, index) => {
        return (
          <Notes
            key={index}
            id={index}
            Title={note.title}
            Content={note.content}
            onDelete={deleteItem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
