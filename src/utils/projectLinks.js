// Label tombol per jenis link. Tambah jenis baru cukup di sini.
export const LINK_LABELS = {
  live: "Live Site",
  design: "View Design",
  prototype: "View Prototype",
  code: "View Code",
};

// Urutan tampil di halaman /project
const ORDER = ["live", "design", "prototype", "code"];

/** Semua link project yang URL-nya terisi, urut sesuai ORDER. */
export function getLinks(project) {
  return (project.links ?? [])
    .filter((l) => l.url)
    .map((l) => ({ ...l, label: l.label ?? LINK_LABELS[l.type] ?? "View" }))
    .sort((a, b) => ORDER.indexOf(a.type) - ORDER.indexOf(b.type));
}

/** Link utama untuk Home. Kalau tidak ada, hasilnya null dan tidak ada tombol. */
export function getPrimaryLink(project) {
  return getLinks(project).find((l) => l.primary) ?? null;
}