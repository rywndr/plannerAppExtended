import React, { useState } from "react"

const styles = {
  notesContainer: {
    width: "400px",
    padding: "10px",
  },
  noteInput: {
    width: "100%",
    padding: "5px",
    marginBottom: "10px",
    background: "transparent",
    color: "white",
  },
  noteButton: {
    background: "none",
    border: "1px solid white", // Added border
    color: "white",
    fontSize: "15px",
    cursor: "pointer",
    marginRight: "5px",
    marginBottom: "5px",
    padding: "5px 10px", // Added padding
  },
  noteItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "5px",
  },
}

export default function NotesWidget() {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState("")

  const handleAddNote = () => {
    if (newNote.trim() !== "") {
      setNotes(prevNotes => [...prevNotes, newNote])
      setNewNote("")
    }
  }

  const handleDeleteNote = index => {
    setNotes(prevNotes => prevNotes.filter((_, i) => i !== index))
  }

  return (
    <div style={styles.notesContainer}>
      <h2>Notes</h2>
      <textarea
        style={styles.noteInput}
        placeholder="Add a note"
        value={newNote}
        onChange={e => setNewNote(e.target.value)}
      />
      <button style={styles.noteButton} onClick={handleAddNote}>
        Add
      </button>

      {notes.length > 0 && (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {notes.map((note, index) => (
            <li key={index} style={styles.noteItem}>
              {note}
              <button
                style={styles.noteButton}
                onClick={() => handleDeleteNote(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
