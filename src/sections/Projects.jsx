import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Nav, Row } from "react-bootstrap";
import { getLinks } from "../utils/projectLinks";
import { useProjects } from "../hooks/usePortfolio";
import { useInView } from "../hooks/useInView";
import Section from "../components/common/Section";
import Reveal from "../components/common/Reveal";
import SmartImage from "../components/common/SmartImage";
import "./Projects.css";

const pad = (n) => String(n).padStart(2, "0");

// Lama tiap project tampil (ms)
const AUTOPLAY_MS = 5000;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function Projects() {
  const { data: projects } = useProjects();
  const [activeId, setActiveId] = useState(null);
  const [wrapRef, inView] = useInView({ once: false, threshold: 0.3 });

  const list = (projects ?? []).filter((p) => p.featured);
  const active = list.find((p) => p.id === activeId) ?? list[0];
  const activeIndex = active ? list.indexOf(active) : 0;
  const links = active ? getLinks(active) : [];

  // Auto-play hanya jalan saat section terlihat dan pengguna tidak memakai reduced motion
  const autoplay = list.length > 1 && inView && !prefersReducedMotion();

  const goNext = () => setActiveId(list[(activeIndex + 1) % list.length].id);

  return (
    <Section id="projects" label="SELECTED PROJECT" title="Things I've Made" className="projects">
      <div ref={wrapRef}>
        {/* Tab */}
        <Reveal variant="up">
          <Nav
            variant="tabs"
            className="projects__tabs"
            activeKey={active?.id}
            onSelect={(key) => setActiveId(Number(key))}
          >
            {list.map((p, i) => (
              <Nav.Item key={p.id}>
                <Nav.Link eventKey={p.id} className="projects__tab">
                  <span>{pad(i + 1)}</span> {p.title}

                  {/* Garis waktu: hanya di tab aktif. `key` memutar ulang animasinya tiap ganti tab */}
                  {autoplay && p.id === active?.id && (
                    <i
                      key={p.id}
                      className="projects__progress"
                      style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
                      onAnimationEnd={goNext}
                      aria-hidden="true"
                    />
                  )}
                </Nav.Link>
              </Nav.Item>
            ))}
            <Nav.Item>
              <Nav.Link as={Link} to="/project" className="projects__tab projects__tab--all">
                See All Project
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Reveal>

        {/* Panel — `key` membuat animasi diputar ulang tiap ganti project */}
        {active && (
          <Reveal variant="scale" delay={100} className="projects__panel">
            <Row className="projects__inner align-items-center g-4" key={active.id}>
              <Col lg={5}>
                <span className="projects__num">{pad(activeIndex + 1)}</span>
                <h3>{active.title}</h3>
                <dl>
                  <div><dt>Type</dt><dd> {active.type}</dd></div>
                  <div><dt>Role</dt><dd> {active.role}</dd></div>
                  <div><dt>Tools</dt><dd> {active.tools.join(", ")}</dd></div>
                </dl>
                <p className="projects__desc">{active.description}</p>
                {links.length > 0 && (
                  <div className="projects__links">
                    {links.map((l, i) => (
                      <Button
                        key={l.type}
                        href={l.url}
                        target="_blank"
                        rel="noreferrer"
                        className={i === 0 ? "btn-primary-custom" : "btn-secondary"}
                      >
                        {l.label}
                      </Button>
                    ))}
                  </div>
                )}
              </Col>

              <Col lg={7}>
                <div className="projects__shot">
                  <SmartImage
                    src={active.image}
                    alt={`${active.title} preview`}
                    fallbackLabel="Project preview"
                  />
                </div>
              </Col>
            </Row>
          </Reveal>
        )}
      </div>
    </Section>
  );
}