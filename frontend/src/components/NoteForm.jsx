import { useState } from "react";
import React from 'react'

export default function NoteForm() {

    const [title,setTitle]=useState('');
    const [comment,setComment]=useState('');
    const [err,setErr]=useState(null);

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const note={title,comment};
        // console.log(note);
        const response=await fetch('/api/notes',{
            method:'POST',
            body:JSON.stringify(note),
            headers:{'Content-Type':'application/json'}
        })

        const json=await response.json();
        
        if(!response.ok){
            setErr(json.error || 'An error occurred');
        }
        if(response.ok){
            setErr(null);
            setTitle('');
            setComment('');
            window.location.reload();
        }
    }



  return (
    <>
        <form onSubmit={handleSubmit} className="create">
            <h3>Create Note!</h3>
            <div className="create-group">
                <div>
                    <label>Title</label>
                    <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" />
                </div>
                <div>
                    <label>Comment</label>
                    <input onChange={(e)=>setComment(e.target.value)} value={comment} type="text" />
                </div>
            </div>
            <button type="submit">ADD</button>
            {err && <div className="error">{err}</div>}
        </form>
    </>
  )
}
