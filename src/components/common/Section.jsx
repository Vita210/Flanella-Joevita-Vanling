import { Container } from "react-bootstrap";
import { useInView } from "../../hooks/useInView";
import Reveal from "./Reveal";

/**
 * Pembungkus section: id (untuk navbar), label vertikal, dan judul.
 */
export default function Section({ id, label, title, className = "", children }) {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id={id} className={`section ${className}`}>
      <Container>
        <div className="section__inner" ref={ref}>
          {label && (
            <div className={`side-label ${inView ? "is-visible" : ""}`} aria-hidden="true">
              <span className="side-label__line" />
              <span className="side-label__text">{label}</span>
              <span className="side-label__line" />
            </div>
          )}
          {title && (
            <Reveal as="h2" className="section-title">
              {title}
            </Reveal>
          )}
          {children}
        </div>
      </Container>
    </section>
  );
}
