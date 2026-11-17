/** Tabel DB: `process_steps` */
export const processSteps = [
  {
    id: 1,
    order: 1,
    fileName: "research.fig",
    stepLabel: "STEP 01",
    title: "Research & Design",
    description:
      "I start with the user, then sketch wireframes and build interactive prototypes.",
    preview: "design", // dipakai Process.jsx untuk memilih ilustrasi mini
  },
  {
    id: 2,
    order: 2,
    fileName: "index.html",
    stepLabel: "STEP 02",
    title: "Deliver",
    description:
      "I finalize designs and, when needed, build them into working code.",
    preview: "code",
  },
  {
    id: 3,
    order: 3,
    fileName: "feedback.md",
    stepLabel: "STEP 03",
    title: "Test & Iterate",
    description:
      "I gather feedback and keep refining until the experience feels right.",
    preview: "test",
  },
];
