import { FocusCards } from "./photos";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Theme was reflection",
      src: "/reflection.jpeg",
    },
    {
      title: "Forest Adventure",
      src: "/forest.jpeg",
    },
    {
      title: "Mellow Sunset",
      src: "/sunset.jpeg",
    },
    {
      title: "Vintage Sitting",
      src: "/wintage.jpeg",

    },
    {
      title: "The Bonfire of Lohri",
      src: "/bonfire.jpeg",
    },
    {
      title: "Autobiogrphic Words",
      src: "/words.jpeg",
    },
  ];

  return <FocusCards cards={cards} />;
}
