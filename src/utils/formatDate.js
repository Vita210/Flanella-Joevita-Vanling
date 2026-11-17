const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const parse = (iso) => {
  const [y, m] = iso.split("-").map(Number);
  return { year: y, month: m - 1 };
};

/** "2026-05-01" -> "May 2026" */
export function formatMonthYear(iso) {
  if (!iso) return "";
  const { year, month } = parse(iso);
  return `${MONTHS[month]} ${year}`;
}

/**
 * ("2026-02-01", "2026-05-31")  -> "February - May 2026"
 * ("2025-10-01", "2026-01-31")  -> "October 2025 - January 2026"
 * ("2024-05-01", null)          -> "May 2024"
 * ("2024-05-01", null, true)    -> "May 2024 - Present"
 */
export function formatDateRange(startIso, endIso, isCurrent = false) {
  const start = parse(startIso);

  if (isCurrent) return `${formatMonthYear(startIso)} - Present`;
  if (!endIso) return formatMonthYear(startIso);

  const end = parse(endIso);
  if (start.year === end.year && start.month === end.month) return formatMonthYear(startIso);
  if (start.year === end.year) return `${MONTHS[start.month]} - ${MONTHS[end.month]} ${end.year}`;
  return `${formatMonthYear(startIso)} - ${formatMonthYear(endIso)}`;
}
