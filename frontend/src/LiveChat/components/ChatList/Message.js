const Message = ({ user, text, currentUser }) => {
    let isSentByCurrentUser = false;
    if (user === currentUser) {
        isSentByCurrentUser = true;
    }
    return (
        isSentByCurrentUser
      ? (
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">You</p>
          <div className="messageBox ">
            <p className="messageText colorWhite backgroundBlue">{text}</p>
          </div>
        </div>
        )
        : (
          <div className="messageContainer justifyStart">
            <div className="messageBox ">
              <p className="messageText colorDark backgroundLight">{text}</p>
            </div>
            <p className="sentText pl-10 ">{user}</p>
          </div>
        )
    )
}
export default Message;