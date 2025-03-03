"use client";
import { Image } from "antd";
import React from "react";
import { Carousel, Card } from "./card-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Get to know me based on My Achievements.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = ({ text }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">{text}</span>
      </p>
    </div>
  );
};

const data = [
  {
    category: "Hackathon",
    title: "6th Position in Manthan 2022",
    src: "/WhatsApp Image 2025-02-25 at 21.06.43.jpeg",
    content: <DummyContent text="Secured 6th position in Manthan 2022, a national-level hackathon." />,
  },
  {
    category: "Open Source",
    title: "Merged 20+ PRs in BloxAI",
    src: "/git.png",
    content: <DummyContent text="Contributed significantly to BloxAI by merging 20+ pull requests." />,
  },
  {
    category: "Research",
    title: "Best Paper HUMAN’24",
    src: "/conf.jpg",
    content: <DummyContent text="Awarded Best Paper at HUMAN’24 for DeNome: A Decentralized Architecture for Genomic Data Privacy." />,
  },
  {
    category: "Academics",
    title: "Young Tech Scholars",
    src: "/yts.png",
    content: <DummyContent text="Selected among 61 students for a summer school in 2020, working on an ECG project under Dr. Ravi Jasuja of Harvard Med School." />,
  },
  {
    category: "Research",
    title: "Best Student Paper Award at SOCPROS 2025",
    src: "/WhatsApp Image 2025-02-28 at 22.00.24.jpeg",
    content: <DummyContent text="Won Best Student Paper Award at Socprod 2025 (IIT) for MediAI: A Specialized Medical LLM for Diagnosis & Clinical Documentation." />,
  },
  {
    category: "Competitions",
    title: "Rank 2nd at Robosoccer by IIT Ropar",
    src: "/iitrpr.jpg",
    content: <DummyContent text="Secured 2nd place at IIT Ropar's Robosoccer competition." />,
  },
  {
    category: "Workshops",
    title: "Workshops on Safe Cyber Practices",
    src: "/cyber.jpeg",
    content: <DummyContent text="Conducted workshops on cyber safety in collaboration with Mr. Ankur Chandrakant." />,
  },
  {
    category: "Coding Competitions",
    title: "3rd Position at Coding Conquest, Wynberg Allen",
    src: "/images.jpeg",
    content: <DummyContent text="Achieved 3rd position at Wynberg Allen's Coding Conquest competition." />,
  },
  {
    category: "Debate",
    title: "1st Position in Debate Competition",
    src: "/debate.png",
    content: <DummyContent text="Won 1st place in a debate competition." />,
  },
];
