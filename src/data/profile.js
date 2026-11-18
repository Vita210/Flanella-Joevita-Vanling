/**
 * Tabel DB nantinya: `profile` (1 baris) + `social_links` (banyak baris)
 */
export const profile = {
  id: 1,
  fullName: "Flanella Joevita Vanling",
  displayName: "FLANELLA",
  roles: ["UI/UX Designer", "Frontend Developer"],
  heroSummary:
    "Fresh graduate in Informatics passionate about designing intuitive user experiences and building responsive web interfaces.",
  cvUrl: "https://drive.google.com/file/d/1s5LV35_7CZMsSlPTirYNmw4NVC2C2TCZ/view?usp=sharing",
  heroPhoto: "/images/profile-hero.jpg",
  aboutPhoto: "/images/profile-about.jpg",
  aboutHeadline: [
    { text: "I'm a fresh Informatics graduate who designs and builds digital products, with a love for " },
    { text: "UI/UX design", highlight: true },
    { text: " and " },
    { text: "front-end development", highlight: true },
    { text: "." },
  ],
  aboutBody:
    "I like turning complex problems into simple, usable experiences, and I code the front end myself so my designs stay realistic to build. I'm now looking for a UI/UX Designer or Front-end Developer role where I can learn fast and contribute from day one.",
};

export const socialLinks = [
  { id: 1, platform: "github", url: "https://github.com/Vita210", order: 1 },
  { id: 2, platform: "linkedin", url: "https://www.linkedin.com/in/flanella-joevita-vanling/", order: 2 },
  { id: 3, platform: "email", url: "mailto:flanellajoevitavanling11@gmail.com", order: 3 },
];

/** Teks berjalan di bawah hero. Tabel DB: `focus_areas` */
export const focusAreas = [
  { id: 1, label: "UI/UX Design" },
  { id: 2, label: "Web Design" },
  { id: 3, label: "App Design" },
  { id: 4, label: "Frontend Dev" },
  { id: 5, label: "Graphic Design" },
];
