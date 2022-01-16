import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react/cjs/react.development";

function AddComment() {
  const serverDomain = "https://lukas-backend.herokuapp.com/";
  const { id } = useParams();
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const [body, setBody] = useState("");
  const [errorCode, setErrorCode] = useState("");
  async function postComment() {
    if (!username || !body) {
      setErrorCode("Komentář i přezdívka jsou povinná!");
      return;
    } else if (body.length > 10000) {
      setErrorCode("Komentář je moc dlouhý!");
      return;
    }
    localStorage.setItem("username", username);
    await fetch(serverDomain + "blogs/" + id, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        body: body,
      }),
    });
    window.location = `/blog/${id}`;
  }

  return (
    <div className="content">
      <title>Přidat komentář</title>
      <h1>Přidat komentář</h1>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="username"
        type="text"
        placeholder="Vaše přezdívka..."
        autoFocus={true}
      />
      <br />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Váš komentář..."
        name="comment"
        id="commentTextarea"
        cols="30"
        rows="10"
      ></textarea>
      <button onClick={postComment} className="plusComment">
        poslat
      </button>
      <button className="cancel">zrušit</button>
      <h3 className="error">{errorCode}</h3>
    </div>
  );
}

export default AddComment;
