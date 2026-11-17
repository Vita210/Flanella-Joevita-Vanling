import { useEffect, useState } from "react";

/**
 * Efek ketik -> tahan -> hapus -> kata berikutnya -> ulang terus.
 * useTypewriter(["UI/UX Designer", "Frontend Developer"])
 */
export function useTypewriter(
  words,
  { typeSpeed = 90, deleteSpeed = 45, holdTime = 1500, gapTime = 350 } = {}
) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const current = words[wordIndex % words.length];
    let delay;
    let next;

    if (!isDeleting && text === current) {
      // Selesai mengetik -> tahan sebentar lalu mulai menghapus
      delay = holdTime;
      next = () => setIsDeleting(true);
    } else if (isDeleting && text === "") {
      // Selesai menghapus -> pindah ke kata berikutnya
      delay = gapTime;
      next = () => {
        setIsDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      };
    } else if (isDeleting) {
      delay = deleteSpeed;
      next = () => setText(current.slice(0, text.length - 1));
    } else {
      delay = typeSpeed;
      next = () => setText(current.slice(0, text.length + 1));
    }

    const id = setTimeout(next, delay);
    return () => clearTimeout(id);
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, holdTime, gapTime]);

  return text;
}
