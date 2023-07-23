'use client';
import MacWindow from "./components/MacWindow";
import { useState } from "react";
import Link from "next/link";

export default function Home() {

  const [userInput, setUserInput] = useState('')

  return (
    <MacWindow>
      <textarea
        placeholder="What you wanna know about?"
        className="input input-bordered input-lg w-full h-36"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      ></textarea>

      <Link className="btn btn-success btn-outline my-4 w-full" href={{
        pathname: '/chat',
        query: { userInput }
      }}>
        Submit
      </Link>
    </MacWindow>
  );
}
