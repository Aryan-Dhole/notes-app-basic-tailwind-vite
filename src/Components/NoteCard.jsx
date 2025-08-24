export default function NoteCard({ title, content }) {
    return (
        <div className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition">
            {title && <h2 className="font-semibold text-lg mb-2">{title}</h2>}
            <p className="text-gray-700">{content}</p>
        </div>
    );
}
