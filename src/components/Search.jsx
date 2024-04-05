import React from 'react'
import Chats from './Chats'
import { IoIosSearch } from "react-icons/io";

const Search = () => {
  return (
    <div className="search">
        <div className="searchForm">
            <input type="text" placeholder='search friends here...'/>
            <span><IoIosSearch/></span>
        </div>
        <Chats/>
    </div>
  )
}

export default Search