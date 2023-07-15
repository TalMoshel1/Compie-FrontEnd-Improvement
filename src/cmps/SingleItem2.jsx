import React, { useState } from 'react';

export default function SingleItem({ item }) {


  return (
<div className="chat">
      {item.comments.length > 0 ? (
        item.comments.map((comment, index) => (
          <div key={index} className="comment">
            <span className="user">{comment.user}:</span>
            <span className="text">{comment.comment}</span>
          </div>
        ))
      ) : (
        <div className="no-comments">No comments</div>
      )}
    </div>
  );
}
