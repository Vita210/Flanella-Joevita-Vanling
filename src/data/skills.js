/**
 * Tabel DB: `skill_categories` (1) -> `skills` (banyak)
 * Di sini sudah di-nest supaya gampang dibaca; adapter di services bisa
 * menggabungkan dua tabel jadi bentuk ini.
 */
export const skillCategories = [
  {
    id: 1,
    order: 1,
    title: "Design",
    description: "Designing intuitive, user-centered experiences.",
    skills: [
      "User Research",
      "Usability Testing",
      "Wireframing",
      "Prototyping",
      "Design System",
      "User Flow Design",
      "Information Architecture",
    ],
  },
  {
    id: 2,
    order: 2,
    title: "Development",
    description: "Turning designs into responsive interfaces.",
    skills: [
      "HTML/CSS",
      "React.js",
      "PHP",
      "MySQL",
      "Dart",
      "Python",
      "Responsive Web Design",
    ],
  },
  {
    id: 3,
    order: 3,
    title: "Tools",
    description: "The software I use every day.",
    skills: ["Figma", "VS Code", "Laravel", "Git & GitHub", "Maze", "Canva", "Flutter SDK"],
  },
];
