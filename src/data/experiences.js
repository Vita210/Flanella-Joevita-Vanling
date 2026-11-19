/**
 * Tabel DB: `experiences`
 * type: "internship" | "organization"
 * Tanggal disimpan format ISO (YYYY-MM-DD) supaya gampang disimpan di kolom DATE.
 * endDate: null  -> ditampilkan hanya bulan mulai (atau "Present" jika isCurrent true)
 */
export const experiences = [
  // ===== Internship =====
  {
    id: 1,
    type: "internship",
    startDate: "2026-02-01",
    endDate: "2026-05-31",
    isCurrent: false,
    organization: "PT Hanjaya Dayari Raya (DXYARY)",
    role: "Web Developer Internship",
    description:
      "Built and integrated responsive e-commerce pages with backend APIs, and fixed bugs based on testing and feedback.",
  },
  {
    id: 2,
    type: "internship",
    startDate: "2025-10-01",
    endDate: "2026-01-31",
    isCurrent: false,
    organization: "PT Sinergi Insan Andalan",
    role: "UI/UX Designer Internship",
    description:
      "Designed admin dashboard and AI Assistant UI in Figma, from wireframes to high-fidelity prototypes, in collaboration with the team.",
  },
  {
    id: 3,
    type: "internship",
    startDate: "2025-05-01",
    endDate: "2025-10-31",
    isCurrent: false,
    organization: "Perpustakaan Universitas Atma Jaya Yogyakarta",
    role: "Publication Staff",
    description:
      "Managed the Instagram account, designing posters and feed content for events and campaigns and planning publication schedules with the team.",
  },
  {
    id: 4,
    type: "internship",
    startDate: "2024-01-01",
    endDate: "2024-03-31",
    isCurrent: false,
    organization: "SMB Ananda (Vihara Buddha Indonesia Lubuk Linggau)",
    role: "Web Developer",
    description:
      "Gathered requirements from vihara administrators, designed the website in Figma, and built and deployed it with React.js and Vercel.",
  },

  // ===== Organization =====
  {
    id: 5,
    type: "organization",
    startDate: "2025-12-01",
    endDate: "2026-01-31",
    isCurrent: false,
    organization: "PT Sinergi Insan Andalan",
    role: "Vice Lead Research Team",
    description:
      "Led Daily Scrum meetings, coordinated task rotations, and documented Scrum notes and attendance in Notion.",
  },
  {
    id: 6,
    type: "organization",
    // TODO: cek lagi tahun mulainya, di desain tertulis "August 2024 – June 2024"
    startDate: "2023-08-01",
    endDate: "2024-06-30",
    isCurrent: false,
    organization: "Kelompok Studi Linux UAJY",
    role: "Coordinator of Communication and Information Division",
    description:
      "Coordinated internal communication and information distribution to support organizational coordination and maintain effective communication among members.",
  },
  {
    id: 7,
    type: "organization",
    startDate: "2024-05-01",
    endDate: null,
    isCurrent: false,
    organization: "KSP X KSL Git & Github Workshop",
    role: "Member Multimedia and Documentation Division",
    description:
      "Supported the KSP x KSL Git & GitHub Workshop through multimedia and documentation activities.",
  },
];
