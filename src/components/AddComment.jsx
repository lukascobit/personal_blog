import React, {useParams, useState} from "react";


function AddComment() {
  
  const serverDomain = "https://lukas-backend.herokuapp.com/";
  const { id } = useParams();
  const [body, setBody] = useState("");
  const [errorCode, setErrorCode] = useState("");

  async function postComment() {
    if (!body) {
      setErrorCode("Komentář i přezdívka jsou povinná!");
      return;
    } else if (body.length > 10000) {
      setErrorCode("Komentář je moc dlouhý!");
      return;
    }
    await fetch(serverDomain + "blogs/" + id, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: body,
      }),
    });
    window.location = `/blog/${id}`;
  }

  return (
    <div className="content">
      <title>Přidat komentář</title>
      <h1>Přidat komentář</h1>
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
