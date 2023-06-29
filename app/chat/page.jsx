import MacWindow from "../components/MacWindow";

const Chat = () => {
  return (
    <MacWindow>
      <div className="chat chat-start">
        <div className="chat-bubble">
          It's over Anakin, <br />I have the high ground.
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble">Typing...</div>
      </div>
    </MacWindow>
  );
};

export default Chat;
