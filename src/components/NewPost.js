import classes from "./NewPost.module.css";
import { useState } from "react";

function NewPost(props) {
  const [enteredText, setenteredText] = useState("");
  const [enteredAuthor, setenteredAuthor] = useState("");
  function changeTextHandeler(event) {
    setenteredText(event.target.value);
  }
  function changeAuthortHandeler(event) {
    setenteredAuthor(event.target.value);
  }
  function onFormSubmit(event) {
    event.preventDefault();
    const postData = {
      body: enteredText,
      author: enteredAuthor
    };
    props.onAddPost(postData);
    props.onCancelPost();
  }

  return (
    <form className={classes.form} onSubmit={onFormSubmit}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeTextHandeler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          required
          onChange={changeAuthortHandeler}
        />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={props.onCancelPost}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
