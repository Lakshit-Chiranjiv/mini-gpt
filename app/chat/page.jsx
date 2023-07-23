import MacWindow from "../components/MacWindow";
import fetchGPTResponse from "../lib/fetchGPTResp";
import Link from "next/link";

const Chat = async({ searchParams }) => {

  const userInput = searchParams.userInput

  const gptResponse = await fetchGPTResponse(userInput)
  let gptResponseText = "Typing..."
  gptResponseText = gptResponse.choices[0]?.message.content

  return (
    <MacWindow>
      <div className="chat chat-start">
        <div className="chat-bubble">
          {userInput}
        </div>
      </div>
      <div className="chat chat-end mt-4">
        <div className="chat-bubble">{gptResponseText}</div>
      </div>
      <Link className="btn btn-accent btn-outline my-4 w-full" href='/'>
        Go to Home
      </Link>
    </MacWindow>
  );
};

export default Chat;
