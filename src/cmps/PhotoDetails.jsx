import React from "react"
import Chat from './Chat';
import '../style.css'
import { useState } from 'react';
import catImage from '../utilities/cat.webp'

const PhotoDetails = ({item}) => {

  return (
    <div className='photo-chat-container'>
            <section key={item._id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border:'black solid 5px', margin: '5px', minWidth: '303px', width: '20%', flex: 1}}>
        <img src={catImage} alt={item.name} style={{ maxWidth: '150px', minWidth: '50px' }} />
        <p className='item-name'>{item.name}</p>
        <p className='item-artistName'>{item.artistName}</p>
        <p className='item-describtion'>{item.describtion}</p>
      </section>

      <Chat comments={item.comments} id={item._id}></Chat>
      </div>
  )
};

export default PhotoDetails;
