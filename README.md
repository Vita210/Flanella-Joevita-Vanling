# Flanella Portfolio — Home Page (React + Vite)

## Menjalankan

```bash
npm install
npm run dev       # development
npm run build     # production build -> dist/
```

## Stack

React 18 + Vite, **react-bootstrap** (Container/Row/Col/Card/Button/Nav/Navbar/Badge) dan **react-router-dom**.

Route: `/` (Home) dan `/project` (daftar project). Link ke section memakai `/#about`, `/#projects`, dst.
Tombol memakai dua class dari `styles/global.css`: `btn-primary-custom` dan `btn-secondary`
(contoh: `<Button className="btn-secondary" as={Link} to="/project">`).

## Struktur Folder

> Tambahan: `src/pages/` berisi `Home.jsx` dan `ProjectsPage.jsx`.

```
portfolio/
├─ public/
│  ├─ cv/Flanella-CV.pdf          <- taruh CV kamu di sini
│  └─ images/
│     ├─ profile-hero.jpg         <- foto hero
│     ├─ profile-about.jpg        <- foto section About
│     ├─ projects/                <- screenshot project (stelluna-1.png, ...)
│     └─ graphic/                 <- 01.jpg ... 09.jpg + avatar.jpg
└─ src/
   ├─ data/                       <- DATA HARDCODED (1 file = 1 tabel database)
   │  ├─ profile.js               profile, socialLinks, focusAreas
   │  ├─ process.js
   │  ├─ education.js
   │  ├─ experiences.js
   │  ├─ skills.js
   │  ├─ projects.js
   │  ├─ graphicDesigns.js
   │  └─ certifications.js
   ├─ services/
   │  ├─ apiClient.js             fetch + konversi snake_case -> camelCase
   │  └─ portfolioService.js      <- SATU-SATUNYA tempat yang tahu sumber data
   ├─ hooks/
   │  ├─ useResource.js           hook generik (data, loading, error)
   │  ├─ usePortfolio.js          useProjects(), useExperiences(), dst.
   │  ├─ useTypewriter.js         efek ketik/hapus hero
   │  ├─ useInView.js             trigger animasi saat scroll
   │  └─ useActiveSection.js      scroll-spy navbar
   ├─ components/
   │  ├─ common/                  Reveal, Section, SmartImage, Icons
   │  └─ layout/                  Navbar
   ├─ sections/                   Hero, Marquee, About, Process, Education,
   │                              Experience, Skills, Projects, GraphicDesign,
   │                              Certifications  (masing-masing .jsx + .css)
   ├─ utils/formatDate.js
   ├─ styles/global.css           design tokens (warna, font) + util + reveal
   ├─ App.jsx
   └─ main.jsx
```

## Alur data

```
sections/*.jsx  ->  hooks/usePortfolio.js  ->  services/portfolioService.js  ->  data/*.js  (sekarang)
                                                                              ->  API/database (nanti)
```

Komponen **tidak pernah** import dari `src/data` secara langsung.

## Cara pindah ke database

1. Buat backend (Laravel / Express / Supabase / dll.) dengan endpoint yang sama
   seperti di `portfolioService.js`, misalnya:

   | Endpoint                   | Tabel                                  |
   | -------------------------- | -------------------------------------- |
   | `GET /api/profile`         | `profile`                              |
   | `GET /api/social-links`    | `social_links`                         |
   | `GET /api/focus-areas`     | `focus_areas`                          |
   | `GET /api/process-steps`   | `process_steps`                        |
   | `GET /api/education`       | `education`                            |
   | `GET /api/experiences`     | `experiences` (kolom `type`)           |
   | `GET /api/skill-categories`| `skill_categories` + `skills` (nested) |
   | `GET /api/projects`        | `projects` (+ `images`, `tools`)       |
   | `GET /api/graphic-profile` | `graphic_profile`                      |
   | `GET /api/graphic-designs` | `graphic_designs`                      |
   | `GET /api/certifications`  | `certifications`                       |

2. Salin `.env.example` jadi `.env`, isi `VITE_API_URL=https://url-backend-kamu`.
3. Selesai. Kalau `VITE_API_URL` kosong, otomatis pakai data hardcoded lagi.

Catatan:
- Nama kolom `snake_case` dari database otomatis menjadi `camelCase`
  (`start_date` -> `startDate`). Bentuk lain (misal nested) bisa disesuaikan lewat
  parameter `transform` di `portfolioService.js`, tanpa menyentuh komponen.
- Field `order` dipakai untuk urutan tampil. Experience diurutkan dari `startDate` terbaru.
- Tanggal memakai format ISO (`YYYY-MM-DD`), cocok dengan kolom `DATE`.

## Animasi

| Section        | Animasi                                                              |
| -------------- | -------------------------------------------------------------------- |
| Navbar         | turun saat load, pill aktif mengikuti scroll                         |
| Hero           | teks masuk berurutan, **typewriter** (UI/UX Designer ↔ Frontend Developer), foto melayang, ikon sosial muncul satu-satu |
| Marquee        | berjalan terus, berhenti saat di-hover                               |
| About          | foto dari kiri, kartu dari kanan, highlight "tersapu"                |
| Process        | kartu muncul berurutan, ilustrasi mini bergerak                      |
| Education/Exp. | kartu muncul berurutan, hover terangkat                              |
| Skills         | chip muncul satu per satu                                            |
| Projects       | ganti tab = panel & screenshot masuk ulang                           |
| Graphic Design | thumbnail muncul berurutan, klik = poster berganti dengan blur-fade  |
| Certification  | kartu masuk selang-seling kiri/kanan                                 |

Semua animasi otomatis dimatikan untuk pengguna dengan `prefers-reduced-motion`.

## Yang perlu kamu isi/cek

Cari komentar `TODO` di folder `src/data`:
- Deskripsi, tipe, role, tools project **Reuse Mart** & **Bid Plaza**.
- Tahun mulai Kelompok Studi Linux UAJY (di desain tertulis "August 2024 – June 2024").
- Credential ID sertifikat (dibaca dari gambar desain, mungkin kurang akurat).
- Link sosial media, CV, dan link detail project.
