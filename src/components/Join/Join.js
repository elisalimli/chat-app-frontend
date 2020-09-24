import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";
const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer"></div>
      <h1 className="heading">Join</h1>
      <input
        type="text"
        placeholder="Name"
        className="joinInput"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Room"
        className="joinInput mt-10"
        onChange={(e) => setRoom(e.target.value)}
      />
      <Link
        className="link-button"
        onClick={(e) => (!name || !room ? e.preventDefault() : null)}
        to={`/chat?name=${name}&room=${room}`}
      >
        <button type="submit" className="button mt-10">
          Sign in
        </button>
      </Link>
    </div>
  );
};
export default Join;
