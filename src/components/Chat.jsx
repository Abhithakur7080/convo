import React from 'react'
import { FaUserPlus, FaVideo } from 'react-icons/fa'
import { IoMdMore } from "react-icons/io";
import Messages from './Messages';
import Input2 from './Input2';

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740" alt="" />
        <span>John</span>
        <div className="chatIcons">
          <span><FaVideo/></span>
          <span><FaUserPlus/></span>
          <span><IoMdMore/></span>
        </div>
      </div>
      <Messages/>
      <Input2/>
    </div>
  )
}

export default Chat