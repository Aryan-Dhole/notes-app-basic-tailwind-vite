import { useState } from "react";
import NoteForm from "./Components/NoteForm";
import NoteCard from "./Components/NoteCard";

export default function App() {
    const [notes, setNotes] = useState([]);

    const addNote = (note) => {
        setNotes([note, ...notes]); // newest on top
    };

    return (
        <div class="min-h-screen bg-gray-100 p-6">
            <h1 class="text-3xl font-bold text-center text-cyan-700 mb-12">🗒️Notes App</h1>

            <NoteForm addNote={addNote} />

            <div class="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {notes.map((note, index) => (
                    <NoteCard key={index} title={note.title} content={note.content} />
                ))}
            </div>
        </div>
    );
}
