import React, { useEffect, useState } from 'react';
import './navbar.css';

const Navbar = ({detail,input,listofnotes}) => {
    let searchEvent = () => {
        let inputValue = document.getElementById("search").value.toLowerCase();
        console.log(inputValue);
        let items = JSON.parse(localStorage.getItem('items'));
        Array.from(items).forEach((ele, index) => {
            let note = document.getElementById(index);
            if(!ele.desp.toLowerCase().includes(inputValue)){
                note.style.display = "none";
            }
            else{
                note.style.display = "flex";
            }
        })
    }
    
    const hideNavbar = () =>{
        const navbarToggle = document.querySelector('.navbar-toggle');
        navbarToggle.classList.toggle('open');

        const show = document.querySelector('.toggle-hidden');
        show.classList.toggle('show-toggle');

        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle('navbar-hidden');

        const notesection = document.querySelector('.allnotes');
        notesection.classList.toggle('notes-hidden-nav');
    }

    const shownavbar = () =>{
        const navbar = document.querySelector('.navbar');
        navbar.classList.remove('navbar-hidden');

        const show = document.querySelector('.toggle-hidden');
        show.classList.remove('show-toggle');

        const notesection = document.querySelector('.allnotes');
        notesection.classList.remove('notes-hidden-nav');
    }
    const noteColor = () =>{
        if(document.getElementById("title").value == "" && document.getElementById("description").value == ""){
            alert('empty fields');
            return;
        }
        else{
            document.getElementById('colorHighlight').style.display = "flex";
            return;
        }
    }

    const list = (c) =>{
        listofnotes(c);
    }

    return (
        <>
            <div className='toggle-hidden'>
                <span class="toggle-icon" onClick={shownavbar}><i class="fa-solid fa-bars"></i></span>
            </div>
            <div className='navbar' >
                <div className='heading'>
                    <div class="navbar-toggle" onClick={hideNavbar}>
                        <span class="toggle-icon"><i class="fa-solid fa-bars"></i></span>
                    </div>
                    <div className='subheading'>
                        <h1>Personal Diary</h1>
                    </div>
                </div>
                <div className='searchbar'>
                    <span><i class="fa-solid fa-magnifying-glass"></i></span><input type="search" name="search" id="search" onInput={searchEvent} placeholder='Search' ></input>
                </div>
                <div className='middlecont' id='inputCont'>
                    <div className="innerCont">
                        <label className="formLabel" >Title</label>
                        <input type="text" name='title' className="formControl" id="title" onChange={input} value={detail.title}/>
                    </div>
                    <div className="innerCont" >
                        <label className="formLabel" >Description</label>
                        <textarea className="formControl" name='desp' id="description" rows={5} onChange={input} value={detail.desp}/>
                    </div>
                    <div className="innerCont innerCont_btn" id='btn_highlight'>
                        <button type="button" id="addNote" onClick={noteColor} >Add note</button>
                        <div className='colorCode' id='colorHighlight'>
                            <i class="fa-solid fa-circle" onClick={()=>{list("#d0e17a")}} style={{color: "#d0e17a"}}></i>
                            <i class="fa-solid fa-circle" onClick={()=>{list("#ff9d48")}} style={{color: "#ff9d48"}}></i>
                            <i class="fa-solid fa-circle" onClick={()=>{list("#67c6c0")}} style={{color: "#67c6c0"}}></i>
                            <i class="fa-solid fa-circle" onClick={()=>{list("rgb(243 235 135")}} style={{color: "rgb(243 235 135)"}}></i>
                            <i class="fa-solid fa-circle" onClick={()=>{list("#ea94bb")}} style={{color: "#ea94bb"}}></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;