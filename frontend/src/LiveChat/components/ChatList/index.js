import React, { useEffect } from 'react'
import Message from './Message';
const messagesEndRef = React.createRef();

const ChatList = ({ msgs, name }) => {
    
    // As a new msg recieved the compount will rerender and the screen is scrolled to buttom
    useEffect(() => {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }, [msgs])

    return (
        <React.Fragment>
            {msgs && msgs.length > 0 ? msgs.map((data, index) => (
                <React.Fragment key={data.id}>
                    <Message user={data.name} text={data.msg} currentUser={name} />
                </React.Fragment>
            )) : null}
            <div ref={messagesEndRef} />
        </React.Fragment>
    )
}

export default ChatList;