import React from 'react'

export default function NoteDetail({note}) {
  return (
    <div>
        <div className="note-detail">
            <h4>{note.title}</h4>
            <p>{note.comment}</p>
            <p>{note.createdAt}</p>
        </div>
    </div>
  )
}
