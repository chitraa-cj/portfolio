"use client";

import { Image } from "antd";
import { Tabs } from "./tabs";
import { ExpandableCardDemo, songs,movies } from "../music/demo";
import { FocusCardsDemo } from "../photos/demo";

export function TabsDemo() {
  const tabs = [
    {
      title: "PhotoGraphy",
      value: "PhotoGraphy",
      content: (
        <div className="w-full overflow-auto relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>PhotoGraphy</p>
          <FocusCardsDemo/>
        </div>
      ),
    },
    {
      title: "Music",
      value: "Music",
      content: (
        <div className="w-full overflow-auto relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Music</p>
          {/* Removed "return" and now correctly rendering the ExpandableCardDemo */}
          <ExpandableCardDemo cards={songs} />
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Watching Movies/Anime",
      value: "Watching Movies/Anime",
      content: (
        <div className="w-full overflow-auto relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Watching Movies/Anime</p>
          <ExpandableCardDemo cards={movies} />
          <DummyContent />
        </div>
      ),
    },
    // {
    //   title: "Creating Vector Art",
    //   value: "Creating Vector Art",
    //   content: (
    //     <div className="w-full overflow-auto relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
    //       <p>Creating Vector Art</p>
    //       <DummyContent />
    //     </div>
    //   ),
    // },
    // {
    //   title: "Exploring Food and Cities",
    //   value: "Exploring Food and Cities",
    //   content: (
    //     <div className="w-full overflow-auto relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
    //       <p>Exploring Food and Cities</p>
    //       <DummyContent />
    //     </div>
    //   ),
    // },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
