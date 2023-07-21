import React, { useEffect, useState } from 'react';
import './note.css';
const Notes = ({items, edit,del}) => {

    const editNote = (i) => {
        edit(i);
    }

    const deleteNote = (i) => {
        del(i);
    }

    const showBtn = (i) => {
        document.getElementById('icon' + i).style.display = "flex";
    }

    const hideBtn = (i) => {
        document.getElementById('icon' + i).style.display = "none";
    }

    return (
        <>
            <div className='container'>
                {/* <div className='middlecont' id='inputCont'>
                    <div className="innerCont">
                        <label className="formLabel" >Title</label>
                        <input type="text" name='title' className="formControl" id="title" onChange={inputEvent} value={detail.title}/>
                    </div>
                    <div className="innerCont" >
                        <label className="formLabel" >Description</label>
                        <textarea className="formControl" name='desp' id="description" rows={5} onChange={inputEvent} value={detail.desp}/>
                    </div>
                    <div className="innerCont innerCont_btn" id='btn_highlight'>
                        <button type="button" id="addNote" onClick={noteColor} >Add note</button>
                        <div className='colorCode' id='colorHighlight'>
                            <i class="fa-solid fa-circle" onClick={()=>{listOfNotes("#d0e17a")}} style={{color: "#d0e17a"}}></i>
                            <i class="fa-solid fa-circle" onClick={()=>{listOfNotes("#ff9d48")}} style={{color: "#ff9d48"}}></i>
                            <i class="fa-solid fa-circle" onClick={()=>{listOfNotes("#67c6c0")}} style={{color: "#67c6c0"}}></i>
                            <i class="fa-solid fa-circle" onClick={()=>{listOfNotes("rgb(243 235 135")}} style={{color: "rgb(243 235 135)"}}></i>
                            <i class="fa-solid fa-circle" onClick={()=>{listOfNotes("#ea94bb")}} style={{color: "#ea94bb"}}></i>
                        </div>
                    </div>
                </div> */}
                <div className='middlecont allnotes' id='noteCont'>
                    <div className="innerCont">
                        <h2>Notes</h2>
                    </div>
                    <div className="innerCont">
                        <div id="note_container">
                            {items.map((itemval, index) => {
                                return (
                                    <>
                                    <div className='card' id={index} style={{background: itemval.color}}>
                                        <div className='card_body' onMouseEnter={() => {showBtn(index)}} onMouseLeave={() => {hideBtn(index)}}>
                                            <div className='card_content'>
                                                <h5 className='card_title'>{itemval.title} </h5>
                                                <p className='card_text'>{itemval.desp}</p>
                                            </div>
                                            <div className='btns' id={'icon' + index}>
                                                <button onClick={() => deleteNote(index)}><i class="fa-solid fa-trash-can"></i></button>
                                                <button onClick={() => editNote(index)}><i class="fa-sharp fa-solid fa-pen"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    </>
                                )
                            })}  
                        </div>
                    </div>
                </div> 
            </div>
        </>
    );
}

export default Notes;