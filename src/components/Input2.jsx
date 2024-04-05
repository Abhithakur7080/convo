import React from 'react'
import { LuImagePlus } from "react-icons/lu";
import { GrAttachment } from "react-icons/gr";

const Input2 = () => {
  return (
    <div className='input'>
      <div className='inputField'>
      <input type="text" placeholder='Type your messege here...'/>
      </div>
      <div className="send">
        <span><GrAttachment/></span>
        <input type="file" style={{display: "none"}} id='addFile1'/>
        <label htmlFor="addFile1"><span><LuImagePlus/></span></label>
        <button>send</button>
      </div>
    </div>
  )
}

export default Input2