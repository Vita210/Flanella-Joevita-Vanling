import { useFocusAreas } from "../hooks/usePortfolio";
import "./Marquee.css";

/** Pita biru yang berjalan terus di bawah hero. */
export default function Marquee() {
  const { data: areas } = useFocusAreas();
  if (!areas) return null;

  // Digandakan agar loop terlihat mulus (animasi menggeser -50%)
  const track = [...areas, ...areas, ...areas, ...areas];

  return (
    <div className="marquee" aria-label="Focus areas">
      <div className="marquee__track">
        {track.map((area, i) => (
          <span className="marquee__item" key={`${area.id}-${i}`}>
            {area.label}
            <i className="marquee__dot" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
