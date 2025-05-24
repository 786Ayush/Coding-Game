import { Navbar } from "../Common/Navbar";
import Code from "./Code";
import Problem from "./Problem";

export default function MainChallenge() {
  return (
    <>
    <div className="h-screen">
      <Navbar />
      <div className="w-full  flex">
        <div className="w-1/2 bg-zinc-800 ">
          <Problem />
        </div>
        <div className="w-1/2  overflow-hidden">
          <Code />
        </div>
        </div>
      </div>
    </>
  );
}
