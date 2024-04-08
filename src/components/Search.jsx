import React, { useState, lazy, Suspense } from "react";
import { IoIosSearch } from "react-icons/io";
import { useFirestore } from "../config/Build/firestore";
import { useAuthContext } from "../config/AuthContext";
import {useDispatch} from 'react-redux'
import { searchUsers } from "../redux/userSlice";

const Users = lazy(() => import("./Users"));

const Search = () => {
  const [query, setQuery] = useState("");
  const [searchedUser, setSearchedUser] = useState(null);
  const user = useAuthContext();
  const store = useFirestore();
  const dispatch = useDispatch()

  const handleKey = (e) => {
    return new Promise((resolve, reject) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (!username) {
          setSearchedUser(null);
          return;
        }
        store
          .getMultipleDocsFromFirestore("users", "displayName", username)
          .then((data) => data.filter((u) => u.uid !== user.uid))
          .then((data) => {
            setSearchedUser(data);
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      } else {
        resolve();
      }
    });
  };

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="search friends here..."
          onChange={(e)=> dispatch(searchUsers(e.target.value))}
        />
        <span>
          <IoIosSearch />
        </span>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Users />
      </Suspense>
    </div>
  );
};

export default Search;
