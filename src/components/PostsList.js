import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useState } from "react";

function PostsList({ isModalVisible, hideModalHandeler }) {
  const [posts, setPosts] = useState([]);
  function addPostData(postData) {
    setPosts((oldState) => [postData, ...oldState]);
  }
  return (
    <>
      {isModalVisible && (
        <Modal onClickBackdrop={hideModalHandeler}>
          <NewPost onCancelPost={hideModalHandeler} onAddPost={addPostData} />
        </Modal>
      )}

      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post, index) => {
            return (
              <Post author={post.author} body={post.body} key={index}></Post>
            );
          })}
        </ul>
      )}
      {/* If there is no post */}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "black" }}>
          <h2>No Posts Available</h2>
          <p>Add Some</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
