/* 
  Main Keywords (Displayed on the page):
  - "use client"
  - React
  - antd
  - tailwind-merge
  - TracingBeam
  - InternshipItem
  - TracingBeamDemo
  - internshipContent
*/

"use client"; // Client-side directive

import React from "react"; // KEYWORD: React
import { Image } from "antd"; // KEYWORD: antd (Image component)
import { twMerge } from "tailwind-merge"; // KEYWORD: tailwind-merge
import { TracingBeam } from "./beam"; // KEYWORD: TracingBeam (custom component)

// Define the structure for each internship item
interface InternshipItem {
  title: string;
  description: JSX.Element;
  badge: string;
  image?: string; // Optional property for an image URL
}

// Main component that renders the internship content along with a keywords section
export function TracingBeamDemo() {
  // Array of main keywords to display
  const mainKeywords = [
    'Tradeons - 20 Bugs Fixed',
    "15+ features and 50,000 data records preprocessed",
    "Awareness of Cyber Attacks",
    "Youngets Employee",
    "Graphics Team Head",
    "Taught Mathematics and Science",
  ];

  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {/* Main Keywords Section */}
        <div className="mb-8 p-4 border rounded bg-gray-100">
          <h1 className="text-xl font-bold mb-2">Main Keywords</h1>
          <ul className="list-disc pl-5">
            {mainKeywords.map((keyword, idx) => (
              <li
                key={idx}
                className="bg-yellow-300 text-black font-bold inline-block px-1 rounded mr-2 mb-1"
              >
                {keyword}
              </li>
            ))}
          </ul>
        </div>

        {/* Internship Content */}
        {internshipContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            {/* Display the badge */}
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            {/* Display the title */}
            <p className={twMerge("text-xl mb-4")}>{item.title}</p>

            <div className="text-sm prose prose-sm dark:prose-invert">
              {/* Render the image if provided */}
              {item.image && (
                <Image
                  src={item.image}
                  alt={`${item.title} thumbnail`}
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {/* Render the description */}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

// Internship content details with dates highlighted using custom styling
const internshipContent: InternshipItem[] = [
  {
    title: "Facillima Software Private Limited",
    description: (
      <>
        <p>
          Ghaziabad, Uttar Pradesh |{" "}
          <span className="bg-yellow-300 text-black font-bold px-1 rounded">
            March 2024 – Sep 2024
          </span>
        </p>
        <p>
          ◦ Identified and corrected over 20 website bugs affecting user
          experience on Apple devices, improving the interface.
        </p>
        <p>
          ◦ Integrated backend API calls for Bhav Copy retrieval from NSE,
          automating stock price settlement workflows, for 1000+ customers.
        </p>
      </>
    ),
    badge: "Software Intern",
    image: "/tradeons.png", // Placeholder URL
  },
  {
    title: "Poly Infosoft",
    description: (
      <>
        <p>
          Noida, Uttar Pradesh |{" "}
          <span className="bg-yellow-300 text-black font-bold px-1 rounded">
            Nov 2019 – Feb 2020
          </span>
        </p>
        <p>
          ◦ Conducted data analysis and engineered 15+ features for a dataset of
          over 50,000 records, improving 7% accuracy.
        </p>
        <p>
          ◦ Gained hands-on experience with production-level coding by
          contributing to 2 Machine Learning projects.
        </p>
        <p>
          ◦ Deployed the project using Heroku, increasing access efficiency by
          15%.
        </p>
      </>
    ),
    badge: "Python ML Intern",
    image: "/poly.png", // Placeholder URL
  },
  {
    title: "Cyber Radix",
    description: (
      <>
        <p>
          <span className="bg-yellow-300 text-black font-bold px-1 rounded">
            05/2020 - 06/2020
          </span>
        </p>
        <p>
          ◦ Studied cyber crimes, various cyber attacks, and practiced anonymity
          and preventions.
        </p>
        <p>
          ◦ Delivered 3 talk shows with Mr. Ankur Chandrakant on "Shaming Virtual
          Reality - Online Bullying".
        </p>
      </>
    ),
    badge: "Cyber Security Intern",
    image: "security.jpg", // Placeholder URL
  },
  {
    title: "Cutloose Media",
    description: (
      <>
        <p>
          <span className="bg-yellow-300 text-black font-bold px-1 rounded">
            08/2020 - 11/2020
          </span>
        </p>
        <p>
          ◦ Written well-researched and authentic articles on daily happenings.
        </p>
        <p>
          ◦ Internship turned into a full time job, becoming the youngest
          employee.
        </p>
      </>
    ),
    badge: "Content Writer",
    image: "/cutloose.png", // Placeholder URL
  },
  {
    title: "Youth India Foundation",
    description: (
      <>
        <p>
          <span className="bg-yellow-300 text-black font-bold px-1 rounded">
            10/2020 - 01/2021
          </span>
        </p>
        <p>
          ◦ Designed posters for a fundraising event "Fitoor - A singing
          competition" to donate items to those in need.
        </p>
        <p>
          ◦ Worked in teams and was promoted to Graphic Team Head.
        </p>
      </>
    ),
    badge: "Graphic Team Head",
    image: "/yif.png", // Placeholder URL
  },
  {
    title: "Pratishtha Foundation",
    description: (
      <>
        <p>
          <span className="bg-yellow-300 text-black font-bold px-1 rounded">
            04/2020 - 07/2020
          </span>
        </p>
        <p>
          ◦ Taught children Mathematics and Sciences using analogies.
        </p>
      </>
    ),
    badge: "VOLUNTEER",
    image: "ngo.jpeg", // Placeholder URL
  },
];
