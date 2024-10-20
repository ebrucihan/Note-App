import React, { useState } from "react";
import Notes from "./Notes"; // Notes bileşenini içe aktar
import Search from "./Search"; // Search bileşenini içe aktar

export default function TextArea() {
  const [note, setNote] = useState(""); // Notun metni
  const [color, setColor] = useState("rgb(255, 20, 147)"); // Varsayılan renk
  const [notes, setNotes] = useState([]); // Tüm notlar
  const [searchTerm, setSearchTerm] = useState(""); // Arama metni

  const addNote = () => {
    if (note.trim()) {
      setNotes([...notes, { text: note, color }]); // Not ve rengi ekle
      setNote(""); // Not metnini temizle
    }
  };

  const clearNotes = () => {
    setNotes([]); // Tüm notları temizle
  };

  // Notları arama terimine göre filtrele
  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Search onSearch={setSearchTerm} /> {/* Arama bileşenini ekle */}
      <div className="textarea-container">
        <textarea
          className="note-input"
          placeholder="Enter your note here..."
          value={note}
          onChange={(e) => setNote(e.target.value)} // Not metnini güncelle
        ></textarea>
        <button className="add-button" onClick={addNote}>
          Add
        </button>
        <div className="color-options">
          {[
            "rgb(255, 20, 147)",
            "rgb(255, 105, 180)",
            "rgb(255, 181, 197)",
            "rgb(205, 104, 137)",
            "rgb(139, 10, 80)",
          ].map((colorOption) => (
            <div
              key={colorOption}
              className="color-option"
              style={{ backgroundColor: colorOption }}
              onClick={() => setColor(colorOption)} // Renk seçimini güncelle
            >
              {color === colorOption && ( // Eğer bu renk seçiliyse işaret ekle
                <span
                  style={{
                    position: "absolute",
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "3px",
                    marginTop: "2px",
                    color: "white", // İşaretin rengi beyaz
                  }}
                >
                  &#10003; {/* İşaret (tik) */}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      <Notes notes={filteredNotes} clearNotes={clearNotes} />{" "}
      {/* Filtrelenmiş notları göster */}
    </div>
  );
}
