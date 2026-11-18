export const graphicProfile = {
  avatar: "/images/graphic/avatar.jpg",
  handle: "@Flanella_Joevita_Vanling",
  role: "Graphic Design",
  moreUrl: "/design",
};

/**
 * category: "Logo & Branding" | "Posters" | "Banners" | "Feeds" | "Others"
 * Urutan `order` = urutan kiri-ke-kanan, baris demi baris, di halaman /design
 */
export const graphicDesigns = [
  { id: 1, order: 1, featured: true, title: "Banner HUT KSL", category: "Banners", image: "/images/graphic/ksl-banner.png" },
  { id: 2, order: 2, featured: true, title: "Logo KSL", category: "Logo & Branding", image: "/images/graphic/ksl-logo.png" },
  { id: 3, order: 3, featured: false, title: "KSL Frame Story", category: "Others", image: "/images/graphic/ksl-frame-story.png" },
  { id: 4, order: 4, featured: false, title: "Korsa KSL", category: "Others", image: "/images/graphic/ksl-korsa.png" },
  { id: 5, order: 5, featured: true, title: "Sertifikat KSL", category: "Others", image: "/images/graphic/ksl-sertifikat.png" },
  { id: 6, order: 6, featured: true, title: "Poster Pemilihan Duta Literasi", category: "Posters", image: "/images/graphic/poster-duta-1.png" },
  { id: 7, order: 7, featured: false, title: "Poster Pemilihan Duta Literasi", category: "Posters", image: "/images/graphic/poster-duta-2.png" },
  { id: 8, order: 8, featured: true, title: "Poster Open PO Korsa KSL", category: "Posters", image: "/images/graphic/poster-korsa.png" },
  { id: 9, order: 9, featured: false, title: "Poster Open PO Makanan", category: "Posters", image: "/images/graphic/poster-makanan.png" },
  { id: 10, order: 10, featured: false, title: "Poster Pelatihan", category: "Posters", image: "/images/graphic/poster-pelatihan.png" },
  { id: 11, order: 11, featured: true, title: "Poster Workshop Git & Github", category: "Posters", image: "/images/graphic/poster-workshop.png" },
  { id: 12, order: 12, featured: false, title: "UAJY BAPER (BAgi buku PERbanyak ilmu)", category: "Feeds", image: "/images/graphic/uajy-baper.png" },
  { id: 13, order: 13, featured: true, title: "Bedah Buku", category: "Feeds", image: "/images/graphic/uajy-bedah-buku.png" },
  { id: 14, order: 14, featured: false, title: "Dies Natalis UAJY", category: "Feeds", image: "/images/graphic/uajy-dies.png" },
  { id: 15, order: 15, featured: false, title: "Koleksi Buku Baru Library UAJY", category: "Feeds", image: "/images/graphic/uajy-koleksi.png" },
  { id: 16, order: 16, featured: true, title: "Open Recruitment Student Staff Library UAJY", category: "Feeds", image: "/images/graphic/uajy-openrec.png" },
  { id: 17, order: 17, featured: true, title: "HUT Library UAJY", category: "Feeds", image: "/images/graphic/uajy-ultah.png" },
  { id: 18, order: 18, featured: true, title: "Tugu UAJY Reading Spot", category: "Others", image: "/images/graphic/uajy-reading-spot.png" },
];