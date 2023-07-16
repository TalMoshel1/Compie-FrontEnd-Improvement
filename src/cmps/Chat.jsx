import React, { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import { socket } from "../utilities/socket.js";

function Chat({ comments, id }) {
  const [newComment, setNewComment] = useState("");
  const inputRef = useRef();
  const [updatedComments, setUpdatedComments] = useState(comments);

  const handleAddComment = useCallback((e) => {
    e.preventDefault();
    const commentText = inputRef.current.value;
    if (commentText.trim() === "") {
      return;
    }


    const newComment = { user: "User", comment: commentText };
    const updatedComments = [...comments, newComment];
    setNewComment("");
    setUpdatedComments(updatedComments);
    inputRef.current.scrollIntoView({ behavior: "smooth" });

    putCommentInObjectDb(id, "User", commentText);

    socket.emit("add_comment", newComment);
  }, [comments, id]);

  const handleAddCommentRef = useRef(handleAddComment);

  useEffect(() => {
    handleAddCommentRef.current = handleAddComment;
  }, [handleAddComment]);

  function putCommentInObjectDb(_id, user, comment) {
    axios
      .put("http://localhost:3000/api/photo", {
        _id: _id,
        comment: comment,
        user: user,
      })
      .catch((error) => {
        return 
      });
  }

  useEffect(() => {
    socket.on("receive_comment", (postObj) => {
      setUpdatedComments((prevComments) => {
        const user = postObj.newComment.user;
        const comment = postObj.newComment.comment;
        return [...prevComments, { user: user, comment: comment }];
      });
    });
  }, []);

  return (
    <div className="chat">
      {updatedComments.length > 0 &&
        updatedComments.map((comment, index) => (
          <div key={index} className="comment">
            <span className="user"> {comment.user}:</span>
            <span className="text"> {comment.comment}</span>
          </div>
        ))}

      <form className="add-comment">
        <input
          type="text"
          ref={inputRef}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
        />
        <button type="submit" onClick={handleAddCommentRef.current}>
          Add
        </button>
      </form>
    </div>
  );
}

export default Chat;
