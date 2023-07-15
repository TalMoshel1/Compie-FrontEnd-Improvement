import React, { useState } from 'react';

export default function SingleItem({ photo, onComment }) {
  const [user, setUser] = useState('');
  const [comment, setComment] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onComment(photo._id, user, comment);
    setUser('');
    setComment('');
  };

  return (
    <div className="single-item">
      <img src={photo.img} alt={photo.name} />
      <h3>{photo.artistName}</h3>
      <p>Lorem ipsum description</p>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Your Name"
          required
        />
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Your Comment"
          required
        />
        <button type="submit">Submit Comment</button>
      </form>
      <div className="comments">
        {photo.comments.map((comment, index) => (
          <div key={index}>
            <strong>{comment.user}</strong>: {comment.comment}
          </div>
        ))}
      </div>
    </div>
  );
}
