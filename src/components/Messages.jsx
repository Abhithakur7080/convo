import React from 'react'
import Message from './Message'

const Messages = () => {
  return (
    <div className='messages'>
        <Message/>
        <Message className="owner"/>
        {/* <Message/> */}
    </div>
  )
}

export default Messages