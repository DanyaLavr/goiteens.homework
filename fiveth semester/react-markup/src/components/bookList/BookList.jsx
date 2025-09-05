import React from "react";
import "./styles.css";
export default function BookList() {
  const books = [
    { id: "id-1", name: "JS for beginners" },
    { id: "id-2", name: "HTML for beginners" },
    { id: "id-3", name: "CSS for beginners" },
    { id: "id-4", name: "REACT for beginners" },
    { id: "id-5", name: "GIT for beginners" },
    { id: "id-6", name: "SCSS for beginners" },
    { id: "id-7", name: "TAILWIND for beginners" },
    { id: "id-8", name: "JS for beginners" },
    { id: "id-9", name: "JS for beginners" },
  ];
  return (
    <ul className="books-list">
      {books.map((elem) => (
        <li key={elem.id}>{elem.name}</li>
      ))}
    </ul>
  );
}
