import React from "react";

export default function Search({ onSearch }) {
  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        onChange={(e) => onSearch(e.target.value)} // Değişiklik olduğunda üst bileşene gönder
      />
    </div>
  );
}
