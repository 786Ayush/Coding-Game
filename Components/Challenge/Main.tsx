"use client";
import { Navbar } from "../Common/Navbar";
import Code from "./Code";
import Problem from "./Problem";
import Split from "react-split";

export default function MainChallenge() {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <div className="w-full  flex h-[calc(100vh-4rem)]">
          <Split
            className="flex"
            sizes={[50, 50]}
            // minSize={[200, 300]}
            gutterSize={10}
            // direction="horizontal"
            // cursor="col-resize"

            gutterAlign="center "
            style={{ width: "100%" }}
          >
            <Problem />

            <Code />
          </Split>
        </div>
      </div>
    </>
  );
}
