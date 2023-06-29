import MacWindow from "./components/MacWindow";

export default function Home() {
  return (
    <MacWindow>
      <textarea
        placeholder="Lets Discuss..."
        className="input input-bordered input-lg w-full"
      ></textarea>

      <button className="btn btn-success btn-outline my-4 w-full">
        Submit
      </button>
    </MacWindow>
  );
}
