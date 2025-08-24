import { useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteCard from "./components/NoteCard";

export default function App() {
    const [notes, setNotes] = useState([]);

    const addNote = (note) => {
        setNotes([note, ...notes]); // newest on top
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Notes App</h1>

            <NoteForm addNote={addNote} />

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {notes.map((note, index) => (
                    <NoteCard key={index} title={note.title} content={note.content} />
                ))}
            </div>
        </div>
    );
}
