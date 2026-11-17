import { useEffect, useState } from "react";

export function useActiveSection(ids, refreshKey, offset = 140) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const update = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) current = id;
      }
      setActive(current);
    };

    update();
    // hitung ulang sebentar lagi, saat section sudah terisi data
    const t = setTimeout(update, 400);

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join("|"), refreshKey, offset]);

  return active;
}