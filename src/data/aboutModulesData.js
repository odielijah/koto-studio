import Activision from "../assets/images/Activision.svg";
import AirBnB from "../assets/images/AirBnB.svg";
import Amazon from "../assets/images/Amazon.svg";
import CocaCola from "../assets/images/CocaCola.svg";
import Google from "../assets/images/Google.svg";
import Meta from "../assets/images/Meta.svg";
import Spotify from "../assets/images/Spotify.svg";
import Uber from "../assets/images/Uber.svg";

import screwNew from "../assets/images/screw-new.png";

const modules = [
  {
    number: "1.0",
    title: "Who are we?",
    largeText: true,
    heading: `We’re optimists building brand and digital for the most impactful companies of today and the founders defining tomorrow.`,
    hr: false,
  },

  {
    number: "2.0",
    title: "How?",
    heading: `We work how you work: adapting our process to meet yours—with co-creation non-negotiable.`,
    hr: true,
    skills: [
      {
        heading: "Strategy",
        description: `We author or evolve brand strategy that differentiates and dictates meaningful visual and verbal identities.`,
        slides: [
          { slideImage: screwNew, slideTitle: "Brand Idea" },
          { slideImage: "", slideTitle: "Strategic Framework" },
          { slideImage: "", slideTitle: "Brand Architecture" },
        ],
      },
      {
        heading: "Creative",
        description: `We uncover insights and align on a visual and verbal vision to build idea-driven world-class brands.`,
        slides: [
          { slideImage: "", slideTitle: "Brand Identity" },
          { slideImage: "", slideTitle: "Naming" },
          { slideImage: "", slideTitle: "Illustration" },
          { slideImage: "", slideTitle: "Art direction" },
          { slideImage: "", slideTitle: "Typography" },
        ],
      },
      {
        heading: "Execution",
        description: `We codify everything we craft—applying creative to any execution and working alongside you for whatever comes next.`,
        slides: [
          { slideImage: "", slideTitle: "Photography" },
          { slideImage: "", slideTitle: "Campaign" },
          { slideImage: "", slideTitle: "Website" },
          { slideImage: "", slideTitle: "Guidelines" },
        ],
      },
    ],
  },

  {
    number: "3.0",
    title: "Collaborators",
    heading: `We partner with businesses of any size or sector: from first round of funding to every subsequent stage of growth.`,
    hr: true,
    filters: [
      "Partners",
      "Beauty",
      "Biotech",
      "CPG",
      "Crypto",
      "EDTech",
      "Entertainment",
      "Fashion",
      "Fintech",
      "Future of Food",
      "Gaming",
      "Healthcare",
      "Marketplaces",
      "Saas",
      "Social",
      "Travel",
      "Venture Capital",
    ],
    partners: [
      { name: "Activision", category: "Gaming", image: Activision },
      { name: "AirBnB", category: "Travel", image: AirBnB },
      { name: "Amazon", category: "Fashion", image: Amazon },
      { name: "Coca-cola", category: "CPG", image: CocaCola },
      { name: "Google", category: "Fintech", image: Google },
      { name: "Meta", category: "Social", image: Meta },
      { name: "Spotify", category: "Entertainment", image: Spotify },
      { name: "Uber", category: "Travel", image: Uber },
    ],
  },

  {
    number: "4.0",
    title: "Team",
    heading: `We are a group of curious optimists building world-class brands.`,
    hr: true,
    teamSlides: [
      {
        slideImage: "",
        name: "Fred North",
        role: "Creative Director",
      },
      {
        slideImage: "",
        name: "Harrison Dew",
        role: "Designer Director",
      },
      {
        slideImage: "",
        name: "Ingrid Tagel",
        role: "Assistant Management Accountant",
      },
      {
        slideImage: "",
        name: "Jake Khan",
        role: "Strategist",
      },
      {
        slideImage: "",
        name: "Joe Ling",
        role: "Creative Director",
      },
      {
        slideImage: "",
        name: "Joshua Osborne",
        role: "Art Director",
      },
      {
        slideImage: "",
        name: "Katey Harvey",
        role: "Managing Director",
      },
      {
        slideImage: "",
        name: "Kyle Toukatley",
        role: "Senior Designer",
      },
      {
        slideImage: "",
        name: "Lily Dent",
        role: "Designer",
      },
      {
        slideImage: "",
        name: "Marius Trinkunas",
        role: "Designer",
      },
      {
        slideImage: "",
        name: "Phoebe Roberts",
        role: "Client Executive",
      },
    ],
    hr: true,
  },
];

export default modules;
