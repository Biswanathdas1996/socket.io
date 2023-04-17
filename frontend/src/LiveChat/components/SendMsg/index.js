import React, { useState } from 'react'

const SendMsg = ({ sendMsg }) => {
    const [msg, setMsg] = useState("");
    const send = (e) => {
        e.preventDefault();
        if (msg !== null && msg.trim()) {
            sendMsg(msg);
            setMsg("");
        }
    }
    return (
        <form onSubmit={(e) => send(e)} className="form-inline">
            <input
                type="text"
                className="sendMsgInput"
                onChange={(e) => setMsg(e.target.value)}
                value={msg} />
            <button className={'sendButton'} type="submit" onClick={(e) => send(e)}>Send</button>
        </form>
    )
}

export default SendMsg;