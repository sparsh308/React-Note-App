import React,{useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'

const NotePage = ({ match, history }) => {
    let params = useParams();
     let noteId=(params.id);
     
 //let note=notes.find(note=>note.id===Number(params.id))
  //  console.log("NoteId",params.id)

  let [note, setNote] = useState(null)

  useEffect(() => {

    getNote()
}, [noteId])

let getNote = async () => {
    if (noteId === 'new') return
    let response = await fetch(`http://127.0.0.1:5000/notes/${noteId}`)
    let data = await response.json()
    setNote(data)
}

const createNote = async () => {


    await fetch(`http://127.0.0.1:5000/notes/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...note, 'updated': new Date() })
    })
}


const updateNote = async () => {
    await fetch(`http://127.0.0.1:5000/notes/${noteId}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...note, 'updated': new Date() })
    })
}

const deleteNote = async () => {
    await fetch(`http://127.0.0.1:5000/notes/${noteId}/`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    })
    //history.push('/')
}

let handleSubmit = () => {
    if (noteId !== "new" && !note.body) {
        deleteNote()
    } else if (noteId !== "new") {
        updateNote()
    } else if (noteId === 'new' && note !== null) {
        createNote()
    }

   // history.push('/')
}


return (
    <div className="note">
        <div className="note-header">
            <h3>
                <Link to={'/'}>
                    <ArrowLeft onClick={handleSubmit} />
                </Link>
            </h3>
            {noteId !== 'new' ? (
                    <Link to={'/'}> <button onClick={deleteNote}>Delete</button></Link>
               
            ) : (
                <Link to={'/'}>
                <button onClick={createNote}>Done</button>
                </Link>
            )}

        </div>
        <textarea onChange={(e) => { setNote({ ...note, 'body': e.target.value }) }} placeholder="Edit note" value={note?.body}></textarea>
    </div >
)
}

export default NotePage
