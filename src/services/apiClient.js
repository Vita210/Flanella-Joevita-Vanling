/**
 * HTTP client tipis. Dipakai hanya kalau VITE_API_URL diisi.
 * Otomatis mengubah snake_case dari database menjadi camelCase untuk React.
 */
export const API_URL = import.meta.env.VITE_API_URL || "";

const toCamel = (key) => key.replace(/_([a-z])/g, (_, c) => c.toUpperCase());

export function camelizeKeys(value) {
  if (Array.isArray(value)) return value.map(camelizeKeys);
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [toCamel(k), camelizeKeys(v)])
    );
  }
  return value;
}

export async function apiGet(path) {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { Accept: "application/json" },
  });
  if (!res.ok) {
    throw new Error(`Request ${path} gagal (${res.status})`);
  }
  return camelizeKeys(await res.json());
}
