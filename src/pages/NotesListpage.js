
import  ListItem from '../components/ListItem'
import AddButton from '../components/AddButton'


import React, {useState,useEffect} from 'react'
const NotesListpage = () => {


    let[notes,setNotes]=useState([])

   useEffect(() => {
    
      getNotes()
   }, [])


   let getNotes= async () =>{

   let response= await fetch('http://localhost:5000/notes/')
   let data= await response.json()
   console.log("data : ", data)
   setNotes(data)
   }
    return (
       <div className="notes">
            <div className="notes-header">
                <h2 className="notes-title">&#9782; Notes</h2>
                <p className="notes-count">{notes.length}</p>
            </div>

            <div className="notes-list">
                {notes.map((note, index) => (
                    <ListItem key={index} note={note} />
                ))}
            </div>

            <AddButton />
        </div >
    )
}

export default NotesListpage
