import { useState } from "react";

export default function NoteForm({ addNote }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() && !content.trim()) return;
        addNote({ title, content });
        setTitle("");
        setContent("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white shadow p-4 rounded-2xl max-w-md mx-auto"
        >
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border rounded px-3 py-2 mb-3"
            />
            <textarea
                placeholder="Write your note..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full border rounded px-3 py-2 mb-3"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Add Note
            </button>
        </form>
    );
}
