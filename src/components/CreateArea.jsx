import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function getNote(event) {
    const { name, value } = event.target;
    return setNote((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }
  function submitNote(event) {
    setNote({
      title: "",
      content: ""
    });
    props.onAdd(note);
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={getNote}
          value={note.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={getNote}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
