import londonOffice from "../assets/images/LDN-office.png";
import berlinOffice from "../assets/images/BER-office.png";
import LAOffice from "../assets/images/LA-office.png";
import NYOffice from "../assets/images/NYC-office.png";
import sydneyOffice from "../assets/images/SYD-office.png";

export const careerSections = [
  {
    id: "current-openings",
    type: "section-two",
    subtitle: "Current Openings",
    title:
      "Our global, multi-disciplinary team spans Strategy, Design, Digital, Motion, Copywriting, Art Direction, Client Services, Operations and more.",
    columnText: "",
    filters: ["all", "location", "department"],
  },
  {
    id: "benefits",
    type: "section-three",
    subtitle: "Benefits",
    title:
      "We want our team to feel supported so we’ve thought carefully about the benefits they want and need.",
    columnText: "",
    filters: ["london", "berlin", "los angeles", "new york", "sydney"],
  },
  {
    id: "locations",
    type: "section-four",
    subtitle: "Locations",
    title:
      "We’ve chosen to make our home in places that are drivers of culture. You’ll find us in five studios across the world.",
    columnText: "",
    filters: [],
    locationSlides: [
      {
        locationImage: londonOffice,
        locationTitle: "London",
      },
      {
        locationImage: berlinOffice,
        locationTitle: "Berlin",
      },
      {
        locationImage: LAOffice,
        locationTitle: "Los Angeles",
      },
      {
        locationImage: NYOffice,
        locationTitle: "New York",
      },
      {
        locationImage: sydneyOffice,
        locationTitle: "Sydney",
      },
    ],
  },
  {
    id: "open-to-all",
    type: "section-five",
    subtitle: "Open to All",
    title: "",
    columnText: `Koto believes that different perspectives and experiences are part of our culture, 
        and we are committed to creating unique and diverse teams across all of our studios. 
        We welcome applications from everyone who shares our values, and commitment to optimism and creativity.`,
    filters: [],
  },
];
