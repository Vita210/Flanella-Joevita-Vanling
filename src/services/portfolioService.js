/**
 * ============================================================
 *  SATU-SATUNYA tempat yang tahu dari mana data berasal.
 * ============================================================
 * Sekarang : mengembalikan data hardcoded dari src/data
 * Nanti    : isi VITE_API_URL di .env, maka semua fungsi di bawah
 *            otomatis memanggil endpoint API (lihat kolom `endpoint`).
 *
 * Semua fungsi SELALU async (return Promise) supaya komponen tidak perlu
 * diubah ketika sumber data pindah ke database.
 *
 * Kalau bentuk JSON dari API berbeda dengan bentuk di src/data,
 * tambahkan fungsi `map...` di sini — jangan ubah komponennya.
 */
import * as local from "../data";
import { API_URL, apiGet } from "./apiClient";

const byOrder = (a, b) => (a.order ?? 0) - (b.order ?? 0);

/** Ambil dari API kalau ada, kalau tidak pakai data lokal. */
async function load(endpoint, localData, transform = (d) => d) {
  if (API_URL) {
    return transform(await apiGet(endpoint));
  }
  return transform(localData);
}

export const getProfile = () => load("/api/profile", local.profile);

export const getSocialLinks = () =>
  load("/api/social-links", local.socialLinks, (d) => [...d].sort(byOrder));

export const getFocusAreas = () => load("/api/focus-areas", local.focusAreas);

export const getProcessSteps = () =>
  load("/api/process-steps", local.processSteps, (d) => [...d].sort(byOrder));

export const getEducation = () => load("/api/education", local.education);

/** @param {"internship" | "organization"} [type] */
export const getExperiences = (type) =>
  load("/api/experiences", local.experiences, (d) =>
    // Urutkan terbaru di atas
    [...d]
      .filter((e) => (type ? e.type === type : true))
      .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
  );

export const getSkillCategories = () =>
  load("/api/skill-categories", local.skillCategories, (d) => [...d].sort(byOrder));

export const getProjects = () =>
  load("/api/projects", local.projects, (d) => [...d].sort(byOrder));

export const getGraphicProfile = () =>
  load("/api/graphic-profile", local.graphicProfile);

export const getGraphicDesigns = () =>
  load("/api/graphic-designs", local.graphicDesigns, (d) => [...d].sort(byOrder));

export const getCertifications = () =>
  load("/api/certifications", local.certifications, (d) =>
    [...d].sort((a, b) => new Date(b.issuedAt) - new Date(a.issuedAt))
  );
