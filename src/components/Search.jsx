import React from 'react'
import Chats from './Chats'

const Search = () => {
  return (
    <div className="search">
        <div className="searchForm">
            <input type="text" placeholder='search friends here...'/>
        </div>
        <Chats/>
    </div>
  )
}

export default Search