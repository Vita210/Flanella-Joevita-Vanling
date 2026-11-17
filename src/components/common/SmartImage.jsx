import { useState } from "react";

/** <img> dengan placeholder otomatis kalau file belum ada / gagal dimuat. */
export default function SmartImage({ src, alt = "", className = "", style, fallbackLabel }) {
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return (
      <div className={`img-placeholder ${className}`} style={style} role="img" aria-label={alt}>
        {fallbackLabel || alt || "Image"}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
