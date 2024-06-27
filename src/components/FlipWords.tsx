import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWord() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="">
      <div className=" mx-auto font-bold text-neutral-500 ">
        SBN <br />
        website are very <FlipWords words={words} />
      </div>
    </div>
  );
}
