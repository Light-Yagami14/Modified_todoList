import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Notes from "./Notes";
import {notes} from "../notes";

function App(){
    return (
        <div>
            <Header />
            {notes.map( note =>{
                return (
                <Notes
                    key = {note.key}
                    Title = {note.title}
                    Content = {note.content}
                />
                );
            })}
            <Footer />
        </div>
    );
}

export default App; 