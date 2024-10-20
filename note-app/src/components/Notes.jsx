import React from "react";

export default function Notes({ notes, clearNotes }) {
  return (
    <div className="notes-container">
      {notes.map((note, index) => (
        <div
          key={index}
          className="note"
          style={{ backgroundColor: note.color }} // Notun rengini uygula
        >
          {note.text.length > 15 ? `${note.text.slice(0, 15)}...` : note.text}{" "}
          {/* Kısa ise tamamını göster */}
        </div>
      ))}
      <button className="clear-button" onClick={clearNotes}>
        Clear All
      </button>
    </div>
  );
}
