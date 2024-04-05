import React from 'react'

const Message = ({className}) => {
  return (
    <div className={`message ${className}`}>
      <div className="messageInfo">
        <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740" alt="userImage" />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740" alt="messageImage" />
      </div>
    </div>
  )
}

export default Message