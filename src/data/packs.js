import amazonMusic from "../assets/images/amazon-music-seg.png";
import amazon from "../assets/images/amazon-seg.png";
import coke from "../assets/images/coke-seg.png";
import meta from "../assets/images/meta-seg.png";
import netflix from "../assets/images/netflix-seg.png";
import spotify from "../assets/images/spotify-seg.png";
import misfits from "../assets/images/misfits-seg.png";
import peloton from "../assets/images/peloton-seg.png";
import sonos from "../assets/images/sonos-seg.png";
import uberEats from "../assets/images/uber-eats-seg.png";
import venmo from "../assets/images/venmo-seg.png";

const dummyImage = "/images/dummy-image.jpg";
export const packs = [
  {
    id: "brand",
    segments: [
      {
        id: "0",
        images: [
          {
            id: "b0-1",
            src: dummyImage,
            style: { top: "30%", left: "0%" },
            orientation: "vertical-alt",
            desktopOrientation: "portrait",
            title: "whatsapp",
          },
          {
            id: "b0-2",
            src: dummyImage,
            style: { top: "0%", left: "35%" },
            orientation: "vertical-alt",
            desktopOrientation: "portrait",
            title: "zip",
            odd: true,
          },
          {
            id: "b0-3",
            src: dummyImage,
            style: { bottom: "10%", left: "50%" },
            orientation: "vertical-alt",
            desktopOrientation: "portrait",
            title: "netflix",
          },
          {
            id: "b0-4",
            src: amazonMusic,
            style: { top: "27%", right: "10%" },
            orientation: "horizontal",
            desktopOrientation: "landscape",
            title: "yubo",
            odd: true,
          },
        ],
      },
      {
        id: "1",
        images: [
          {
            id: "b1-1",
            src: "/images/brand-1-1.jpg",
            style: { top: "50%", left: "10%" },
            orientation: "horizontal",
            desktopOrientation: "landscape",
          },
          {
            id: "b1-2",
            src: "/images/brand-1-2.jpg",
            style: { top: "0%", left: "30%" },
            orientation: "horizontal",
            desktopOrientation: "landscape",
            odd: true,
          },
          {
            id: "b1-3",
            src: "/images/brand-1-3.jpg",
            style: { top: "40%", left: "50%" },
            orientation: "horizontal",
            desktopOrientation: "landscape",
          },
          {
            id: "b1-4",
            src: "/images/brand-1-4.jpg",
            style: { top: "0%", left: "70%" },
            orientation: "vertical-alt",
            desktopOrientation: "portrait",
            odd: true,
          },
        ],
      },
      {
        id: "2",
        images: [
          {
            id: "b2-1",
            src: dummyImage,
            style: { top: "5%", left: "0%" },
            orientation: "vertical-alt",
            desktopOrientation: "portrait",
          },
          {
            id: "b2-2",
            src: dummyImage,
            style: { top: "30%", left: "50%" },
            orientation: "horizontal",
            desktopOrientation: "landscape",
          },
          {
            id: "b2-3",
            src: dummyImage,
            style: { top: "10%", right: "0%" },
            orientation: "vertical",
            desktopOrientation: "portrait",
          },
          {
            id: "b2-4",
            src: dummyImage,
            style: { top: "50%", left: "25%" },
            orientation: "horizontal",
            desktopOrientation: "square",
            odd: true,
          },
        ],
      },
    ],
  },

  {
    id: "digital",
    segments: [
      {
        id: "0",
        images: [
          {
            id: "d0-1",
            src: "/images/digital-0-1.jpg",
            style: { top: "30%", left: "70%" },
            orientation: "vertical",
            desktopOrientation: "portrait",
          },
          {
            id: "d0-2",
            src: "/images/digital-0-2.jpg",
            style: { top: "50%", left: "0%" },
            orientation: "vertical-alt",
            desktopOrientation: "portrait",
            odd: true,
          },
          {
            id: "d0-3",
            src: "/images/digital-0-3.jpg",
            style: { top: "20%", left: "20%" },
            orientation: "horizontal",
            desktopOrientation: "landscape",
          },
          {
            id: "d0-4",
            src: "/images/digital-0-4.jpg",
            style: { top: "50%", left: "35%" },
            orientation: "horizontal",
            desktopOrientation: "landscape",
            odd: true,
          },
        ],
      },
      {
        id: "1",
        images: [
          {
            id: "d1-1",
            src: "/images/digital-1-1.jpg",
            style: { top: "60%", left: "40%" },
            orientation: "vertical",
            desktopOrientation: "portrait",
          },
          {
            id: "d1-2",
            src: "/images/digital-1-2.jpg",
            style: { top: "40%", right: "0%" },
            orientation: "vertical-alt",
            desktopOrientation: "portrait",
            odd: true,
          },
          {
            id: "d1-3",
            src: "/images/digital-1-3.jpg",
            style: { top: "30%", left: "12%" },
            orientation: "vertical",
            desktopOrientation: "portrait",
          },
          {
            id: "d1-4",
            src: "/images/digital-1-4.jpg",
            style: { top: "20%", left: "50%" },
            orientation: "horizontal-alt",
            desktopOrientation: "landscape",
            odd: true,
          },
        ],
      },
    ],
  },

  {
    id: "companies",
    segments: [
      {
        id: "0",
        images: [
          {
            id: "c0-1",
            src: netflix,
            style: { top: "40%", left: "20%" },
            orientation: "vertical",
            desktopOrientation: "portrait",
          },
          {
            id: "c0-2",
            src: spotify,
            style: { top: "30%", left: "60%" },
            orientation: "horizontal",
            desktopOrientation: "landscape",
            odd: true,
          },
          {
            id: "c0-3",
            src: amazon,
            style: { top: "5%", left: "40%" },
            orientation: "square",
            desktopOrientation: "square",
          },
          {
            id: "c0-4",
            src: peloton,
            style: { top: "10%", right: "0%" },
            orientation: "square",
            desktopOrientation: "square",
            odd: true,
          },
        ],
      },
      {
        id: "1",
        images: [
          {
            id: "c1-1",
            src: sonos,
            style: { top: "20%", right: "0%" },
            orientation: "horizontal",
            desktopOrientation: "landscape",
          },
          {
            id: "c1-2",
            src: spotify,
            style: { top: "20%", left: "30%" },
            orientation: "square",
            desktopOrientation: "square",
            odd: true,
          },
          {
            id: "c1-3",
            src: coke,
            style: { top: "60%", left: "10%" },
            orientation: "square",
            desktopOrientation: "square",
          },
          {
            id: "c1-4",
            src: meta,
            style: { top: "5%", left: "0%" },
            orientation: "vertical",
            desktopOrientation: "portrait",
            odd: true,
          },
        ],
      },
      {
        id: "2",
        images: [
          {
            id: "c2-1",
            src: venmo,
            style: { top: "40%", left: "20%" },
            orientation: "vertical",
            desktopOrientation: "portrait",
          },
          {
            id: "c2-2",
            src: misfits,
            style: { top: "30%", left: "50%" },
            orientation: "square",
            desktopOrientation: "square",
            odd: true,
          },
          {
            id: "c2-3",
            src: uberEats,
            style: { top: "70%", left: "0%" },
            orientation: "square",
            desktopOrientation: "square",
          },
          {
            id: "c2-4",
            src: peloton,
            style: { top: "10%", right: "0%" },
            orientation: "horizontal",
            desktopOrientation: "landscape",
            odd: true,
          },
        ],
      },
    ],
  },

  {
    id: "founders",
    segments: [
      {
        id: "0",
        images: [
          {
            id: "f0-1",
            src: "/images/founders-0-1.jpg",
            style: { top: "10%", left: "50%" },
            orientation: "vertical",
            desktopOrientation: "portrait",
          },
          {
            id: "f0-2",
            src: "/images/founders-0-2.jpg",
            style: { top: "40%", left: "30%" },
            orientation: "horizontal",
            desktopOrientation: "landscape",
            odd: true,
          },
          {
            id: "f0-3",
            src: "/images/founders-0-3.jpg",
            style: { top: "0%", right: "0%" },
            orientation: "horizontal",
            desktopOrientation: "landscape",
          },
          {
            id: "f0-4",
            src: "/images/founders-0-4.jpg",
            style: { top: "50%", left: "10%" },
            orientation: "vertical",
            desktopOrientation: "portrait",
            odd: true,
          },
        ],
      },
      {
        id: "1",
        images: [
          {
            id: "f1-1",
            src: "/images/founders-1-1.jpg",
            style: { top: "5%", left: "10%" },
            orientation: "horizontal",
            desktopOrientation: "landscape",
          },
          {
            id: "f1-2",
            src: "/images/founders-1-2.jpg",
            style: { top: "30%", right: "0%" },
            orientation: "vertical",
            desktopOrientation: "portrait",
            odd: true,
          },
          {
            id: "f1-3",
            src: "/images/founders-1-3.jpg",
            style: { top: "40%", left: "10%" },
            orientation: "square",
            desktopOrientation: "square",
          },
          {
            id: "f1-4",
            src: "/images/founders-1-4.jpg",
            style: { top: "50%", left: "50%" },
            orientation: "horizontal",
            desktopOrientation: "landscape",
            odd: true,
          },
        ],
      },
      {
        id: "2",
        images: [
          {
            id: "f2-1",
            src: "/images/founders-1-1.jpg",
            style: { top: "30%", left: "10%" },
            orientation: "horizontal",
            desktopOrientation: "landscape",
          },
          {
            id: "f2-2",
            src: "/images/founders-1-2.jpg",
            style: { top: "30%", right: "0%" },
            orientation: "vertical",
            desktopOrientation: "portrait",
            odd: true,
          },
          {
            id: "f2-3",
            src: "/images/founders-1-3.jpg",
            style: { top: "40%", left: "60%" },
            orientation: "square",
            desktopOrientation: "square",
          },
          {
            id: "f2-4",
            src: "/images/founders-1-4.jpg",
            style: { top: "0%", left: "50%" },
            orientation: "horizontal",
            desktopOrientation: "landscape",
            odd: true,
          },
        ],
      },
    ],
  },
];
