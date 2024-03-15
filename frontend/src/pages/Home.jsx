import React from 'react'
import { useEffect, useState } from 'react'

//z

export default function Home() {

  const [notes, setNotes] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch('api/notes');
      const json = await response.json();
      if (response.ok) {
        setNotes(json);
      }
    }
    fetchNotes();
  }, [])

  return (
    <div className='home'>
      <div className='notes'>
        {notes && notes.map((note)=>(
        <p key={note._id}>{note.title}</p>
        ))}
      </div>
    </div>
  )
}
