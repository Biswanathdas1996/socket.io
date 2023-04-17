
import React, { useState } from 'react'

const JoinChat = ({ joinChat }) => {
  const [name, setName] = useState("");
  const join = (e) => {
    e.preventDefault();
    if (name !== null && name.trim()) {
      joinChat(name);
    }
  }
  return (
      <form onSubmit={(e) => join(e)} className="mt-2">
        <input
          placeholder="Name"
          className="joinInput"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button className={'button mt-20'} type="submit" onClick={(e) => join(e)}>Join</button>
      </form>
  )
}
export default JoinChat;
