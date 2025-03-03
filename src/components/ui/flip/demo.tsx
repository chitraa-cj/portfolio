import React from "react";
import { FlipWords } from "./flip";

export function FlipWordsDemo() {
  const words = ["Chitra", "Coder","Researcher", "Writer", "Poet"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Get to me
        <FlipWords words={words} /> <br />
        and the things I work on
      </div>
    </div>
  );
}
