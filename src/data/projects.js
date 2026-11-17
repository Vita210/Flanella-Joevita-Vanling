/**
 * Tabel DB: `projects` (+ `project_categories` untuk `categories`, `project_tools` untuk `tools`)
 * featured: true -> tampil di tab section "Things I've Made" di Home
 * categories harus cocok dengan nama filter di ProjectsPage: "UI/UX" | "Web Dev" | "App Dev" | "Others"
 */
export const projects = [
  {
    id: 1,
    order: 1,
    slug: "stelluna",
    title: "Stelluna",
    subtitle: "Salon Booking App Design",
    categories: ["UI/UX"],
    type: "UI/UX",
    role: "UI/UX Designer",
    tools: ["Figma"],
    description:
      "A mobile salon booking app concept for an Interaction Design course, allowing users to browse services, book appointments, and manage bookings through an intuitive interface.",
    image: "/images/projects/stelluna.png",
    featured: true,
    detailUrl: "#",
  },
  // {
  //   id: 2,
  //   order: 2,
  //   slug: "monkland-cheese-dairy",
  //   title: "Monkland Cheese Dairy",
  //   subtitle: "UI/UX Redesign",
  //   categories: ["UI/UX"],
  //   type: "UI/UX",
  //   role: "UI/UX Designer", // TODO
  //   tools: ["Figma"], // TODO
  //   description:
  //     "This group project for an Interaction Design course analyzed the Monkland Cheese Dairy website using Gestalt principles.",
  //   image: "/images/projects/monkland.png",
  //   featured: false,
  //   detailUrl: "#",
  // },
  // {
  //   id: 3,
  //   order: 3,
  //   slug: "reservation-flow-design",
  //   title: "Reservation Flow Design",
  //   subtitle: "Court & Restaurant reservation web",
  //   categories: ["UI/UX"],
  //   type: "UI/UX",
  //   role: "UI/UX Designer", // TODO
  //   tools: ["Figma"],
  //   description:
  //     "A UI/UX technical test project where I designed a reusable reservation layout in Figma.",
  //   image: "/images/projects/reservation.png",
  //   featured: false,
  //   detailUrl: "#",
  // },
  // {
  //   id: 4,
  //   order: 4,
  //   slug: "meditalk",
  //   title: "MediTalk",
  //   subtitle: "Mobile Learning Platform for ESP",
  //   categories: ["UI/UX"],
  //   type: "UI/UX",
  //   role: "UI/UX Designer", // TODO
  //   tools: ["Figma"], // TODO
  //   description:
  //     "MediTalk is a group project created for a real client, where we designed a mobile learning app prototype based directly on their ESP education needs.",
  //   image: "/images/projects/meditalk.png",
  //   featured: false,
  //   detailUrl: "#",
  // },
  {
    id: 5,
    order: 5,
    slug: "reuse-mart",
    title: "Reuse Mart",
    subtitle: "Secondhand Goods Selling Platform",
    categories: ["UI/UX", "Web Dev", "App Dev"],
    type: "Web / App", // TODO
    role: "UI/UX Designer & Developer", // TODO
    tools: ["Figma"], // TODO
    description:
      "ReuseMart is a group project focused on building a secondhand goods marketplace system, developed in both web and mobile app formats. The platform enables users to buy, sell, and donate used items through a streamlined consignment-based process.",
    image: "/images/projects/reuse-mart.png",
    featured: true,
    detailUrl: "#",
  },
  {
    id: 6,
    order: 6,
    slug: "atma-travel",
    title: "Atma Travel",
    subtitle: "Travel Booking App",
    categories: ["UI/UX", "App Dev"],
    type: "UI/UX & App", // TODO
    role: "UI/UX Designer & Developer", // TODO
    tools: ["Figma", "Flutter SDK"], // TODO
    description:
      "This group project for the Pemrograman Berbasis Platform course involved building a mobile app to help Atma Travel manage bookings, reviews, and customer data.",
    image: "/images/projects/atma-travel.png",
    featured: false,
    detailUrl: "#",
  },
  {
    id: 7,
    order: 7,
    slug: "bid-plaza",
    title: "Bid Plaza",
    subtitle: "TODO subtitle",
    categories: ["UI/UX", "Web Dev"], // TODO
    type: "Web / App", // TODO
    role: "UI/UX Designer & Developer", // TODO
    tools: ["Figma"], // TODO
    description: "TODO: tulis deskripsi singkat project Bid Plaza di sini.",
    image: null,
    featured: false,
    detailUrl: "#",
  },
  {
    id: 8,
    order: 8,
    slug: "SMB-Ananda",
    title: "SMB Ananda",
    subtitle: "TODO subtitle",
    categories: ["UI/UX", "Web Dev"], // TODO
    type: "Web / App", // TODO
    role: "UI/UX Designer & Developer", // TODO
    tools: ["Figma", "React"], // TODO
    description: "TODO: tulis deskripsi singkat project Bid Plaza di sini.",
    image: null,
    featured: true,
    detailUrl: "#",
  },
];