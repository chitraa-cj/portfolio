"use client";
import React from "react";
import { StickyScroll } from "./scrool-reveal";
import { Image } from "antd";

const content = [
  {
    title: "Intelligent IoT-Enabled Healthcare Solutions Implementing Federated Meta-Learning with Blockchain",
    description:
      "Published in JIII with a Cite Score of 22.3 and Impact Factor of 10.4. This journal article explores the integration of blockchain and federated meta-learning for secure IoT-based healthcare solutions.",
    link: "#",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Journal Paper
      </div>
    ),
  },
  {
    title: "Toward a Trusted Smart City Ecosystem: IoE and Blockchain-Enabled Cognitive Frameworks for Shared Business Services",
    description:
      "Published as a book chapter in Oct 2024, this work delves into cognitive frameworks for IoE and blockchain-based smart city solutions.",
    link: "#",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Book Chapter
      </div>
    ),
  },
  {
    title: "DLIoT: A Deep Learning Approach for Enhancing Security in Industrial IoT",
    description:
      "A book chapter published in Oct 2024 focusing on deep learning techniques to improve IoT security.",
    link: "#",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Book Chapter
      </div>
    ),
  },
  {
    title: "Agri-Chain: A Blockchain-Empowered Smart Solution for Agricultural Industry",
    description:
      "Published in Aug 2024, this book chapter presents a blockchain-based solution for modern agriculture challenges.",
    link: "#",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Book Chapter
      </div>
    ),
  },
  {
    title: "DeNome: A Decentralized Architecture to Ensure Data Privacy in Sharing of Genomic Data",
    description:
      "Presented at the 2nd Doctoral Symposium on Human Centered Computing in March 2024, this conference paper discusses decentralized genomic data privacy solutions.",
    link: "#",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--purple-500))] flex items-center justify-center text-white">
        Conference Paper
      </div>
    ),
  },
  {
    title: "Enhancing Metaheuristics: The Role of Quantum-Inspired Soft Computing",
    description:
      "Accepted book chapter for Dec 2024, focusing on quantum-inspired soft computing in metaheuristics.",
    link: "#",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Book Chapter
      </div>
    ),
  },
  {
    title: "A Secure Blockchain-based Food Recommendation Framework Using QR Mechanism",
    description:
      "Presented at the International Conference on Data Science and Communication – 2024 in Nov 2024, this paper discusses blockchain-based food recommendation systems.",
    link: "#",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--purple-500))] flex items-center justify-center text-white">
        Conference Paper
      </div>
    ),
  },
  {
    title: "Blockchain-Based Skin Cancer Detection: Enhancing Accuracy and Security with DHETL",
    description:
      "Presented at the 3rd International Conference on Human-Centric Smart Computing in July 2024, this work discusses blockchain-based improvements in skin cancer detection.",
    link: "#",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--purple-500))] flex items-center justify-center text-white">
        Conference Paper
      </div>
    ),
  },
  {
    title: "HARVEST-AI: A UAV-based Artificial Intelligence System for Crop Health Monitoring",
    description:
      "Presented at the International Conference on Artificial Intelligence and Emerging Trends in Sept 2024, this work explores AI-driven UAV monitoring for crops.",
    link: "#",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--purple-500))] flex items-center justify-center text-white">
        Conference Paper
      </div>
    ),
  },
  {
    title: "Decentralized Parkinson’s Disease Detection Using Integrating Blockchain and Federated Learning for Healthcare",
    description:
      "Presented at Interdisciplinary Research in Technology Management 2024 in Dec 2024, this research focuses on privacy-preserving Parkinson’s disease detection.",
    link: "#",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--purple-500))] flex items-center justify-center text-white">
        Conference Paper
      </div>
    ),
  },
  {
    title: "Advancing Thalassemia Diagnosis: Integrating IoMT and Federated Learning for Enhanced Detection",
    description:
      "Presented at the 3rd International Conference on Advanced Communication and Intelligent Systems in May 2024, this research integrates IoMT and federated learning for Thalassemia diagnosis.",
    link: "#",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--purple-500))] flex items-center justify-center text-white">
        Conference Paper
      </div>
    ),
  },
  {
    title: "MediAI: A Specialized Medical LLM for Accurate Diagnosis and Clinical Documentation",
    description:
      "Presented at the 13th International Conference on Soft Computing for Problem Solving in Feb 2025, this work introduces a medical LLM for precise diagnosis and documentation.",
    link: "#",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--purple-500))] flex items-center justify-center text-white">
        Conference Paper
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}