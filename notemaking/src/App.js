import React, { useEffect, useState } from "react";
import './index.css';
import Navbar from "./Navbar";
import Notes from "./Notes";
import ShowNote from "./ShowNote";
function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
      const items = JSON.parse(localStorage.getItem('items'));
      if (items) {
        setItems(items);
      }
  }, []);

  useEffect(() => {
      localStorage.setItem('items',JSON.stringify(items));
  }, [items]);

  const [detail, setDetail] = useState({
    title: document.getElementById("title"),
    desp: document.getElementById("desp"),
    color: ""
  });

  const inputEvent = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setDetail((prev) => {
        return {
            ...prev,
            [name] : value
        }
    });
  }

  const listOfNotes = (c) =>{
    detail.color = c;
    if(document.getElementById("addNote").innerText === "Update Note"){
        let updateCard = document.querySelector('.card');
        let i = updateCard.getAttribute('index');
        setItems((prevItems) => {
            const updatedItems = [...prevItems];
            updatedItems[i] = { ...detail };
            return updatedItems;
        });
        document.getElementById("addNote").innerText = "Add Note";
    }
    else{
        setItems((old) => {
            return [...old,detail];
        })
    }
    setDetail("");
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById('colorHighlight').style.display = "none";
  }

  const editNote = (i) => {
    let title = document.getElementById("title");
    let desp = document.getElementById("description");
    title.value = items[i].title;
    desp.value = items[i].desp;
    setDetail({title: items[i].title, desp: items[i].desp})
    document.getElementById("addNote").innerText = "Update Note";
    let editCard = document.querySelector('.card');
    editCard.setAttribute('index', i)
  }

  const deleteNote = (i) => {
    setItems((prevItems) => {
        const updatedItems = [...prevItems];
        updatedItems.splice(i, 1);
        return updatedItems;
    });
  }

  return (
    <div className="App">
      <Navbar detail={detail} input = {inputEvent} listofnotes={listOfNotes}/>
      <Notes items = {items} edit = {editNote} del = {deleteNote} />
      <ShowNote />
    </div>
  );
}

export default App;
