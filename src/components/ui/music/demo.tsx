"use client";
import { Image } from "antd";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "./music";

export type Card = {
  description: string;
  title: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: () => React.ReactNode;
};

export function ExpandableCardDemo({ cards }: { cards: Card[] }) {
  const [active, setActive] = useState<Card | boolean | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    document.body.style.overflow =
      active && typeof active === "object" ? "hidden" : "auto";

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: { duration: 0.05 },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>
              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {active.content()}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div>
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

// Example usage with song info passed as props:
export const songs: Card[] = [
  {
    description: "U2",
    title: "With or Without You",
    src: "/worwithoutu.jpeg",
    ctaText: "Play",
    ctaLink: "https://open.spotify.com/track/4N0fzRX3T7QkOecp3pkWpp?si=abf2e7d555ef42f8",
    content: () => (
      <p>
        A timeless classic by U2 that captures the essence of love and longing.
      </p>
    ),
  },
  {
    description: "One Direction",
    title: "Perfect",
    src: "/perfect-1d.jpg",
    ctaText: "Play",
    ctaLink: "https://open.spotify.com/track/3NLnwwAQbbFKcEcV8hDItk?si=9b487685f5074469",
    content: () => (
      <p>
        A heartfelt ballad showcasing the band's signature harmonies and charm.
      </p>
    ),
  },
  {
    description: "Kishore Kumar",
    title: "Meri Samne Waali Khidki",
    src: "/kksong.jpg",
    ctaText: "Play",
    ctaLink: "https://open.spotify.com/track/5ZMuv6ESQmOHfXrm8FFncr?si=c8914d1cc28e4394",
    content: () => (
      <p>
        A classic hit that continues to enchant listeners with its nostalgic tune.
      </p>
    ),
  },
  {
    description: "Martin Garrix",
    title: "High on Life",
    src: "/High_on_Life_Martin_Garrix_song.jpg",
    ctaText: "Play",
    ctaLink: "https://open.spotify.com/track/4ut5G4rgB1ClpMTMfjoIuy?si=e9f4bcbe22a2439d",
    content: () => (
      <p>
        An energetic anthem that captures the euphoria of living life to the fullest.
      </p>
    ),
  },
  {
    description: "Taylor Swift",
    title: "Cruel Summer",
    src: "/creulsummer.jpeg",
    ctaText: "Play",
    ctaLink: "https://open.spotify.com/track/1BxfuPKGuaTgP7aM0Bbdwr?si=e8ca2ae18c5849ea",
    content: () => (
      <p>
        A pop masterpiece blending catchy melodies with bittersweet lyrics.
      </p>
    ),
  },
];

export const movies: Card[] = [
  {
    description: "A magical journey of a young wizard.",
    title: "Harry Potter Series",
    src: "/harry-potter.webp",
    ctaText: "Watch",
    ctaLink: "https://www.hotstar.com/in/movies/harry-potter-and-the-philosophers-stone/1971000398?utm_source=gwa",
    content: () => <p>One of the most iconic fantasy franchises of all time.</p>,
  },
  {
    description: "A sitcom about six friends living in New York.",
    title: "Friends",
    src: "/friends.webp",
    ctaText: "Watch",
    ctaLink: "hhttps://www.netflix.com/watch/70274028?source=35",
    content: () => <p>A heartwarming and hilarious series that remains timeless.</p>,
  },
  {
    description: "A story about a young ninja's journey.",
    title: "Naruto",
    src: "/naruto.avif",
    ctaText: "Watch",
    ctaLink: "https://www.netflix.com/title/70205012",
    content: () => <p>An epic anime full of action, friendship, and determination.</p>,
  },
  {
    description: "A sci-fi masterpiece about space and time.",
    title: "Interstellar",
    src: "/intesteller.webp",
    ctaText: "Watch",
    ctaLink: "https://www.primevideo.com/dp/amzn1.dv.gti.b4a9f7c6-5def-7e63-9aa7-df38a479333e?autoplay=0&ref_=atv_cf_strg_wb",
    content: () => <p>A visually stunning film that explores the boundaries of science.</p>,
  },
  {
    description: "An anime about a deadly school classroom.",
    title: "Assassination Classroom",
    src: "/assination.jpg",
    ctaText: "Watch",
    ctaLink: "https://www.primevideo.com/detail/Assassination-Classroom/0T1RQUZKWTURQ35CXIW1IM3C7S",
    content: () => <p>A thrilling and unique anime that blends action with comedy.</p>,
  },{
    description: "DreamWorks Animation",
    title: "Kung Fu Panda",
    src: "/kungfu.jpg",
    ctaText: "Watch",
    ctaLink: "https://www.netflix.com/watch/70075480?source=35",
    content: () => (
      <p>
        A legendary story of Po, a clumsy panda who discovers his destiny as the Dragon Warrior.
      </p>
    ),
  },
];