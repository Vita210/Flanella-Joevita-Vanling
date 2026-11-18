import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useGraphicDesigns, useGraphicProfile } from "../hooks/usePortfolio";
import { useInView } from "../hooks/useInView";
import Section from "../components/common/Section";
import Reveal from "../components/common/Reveal";
import SmartImage from "../components/common/SmartImage";
import "./GraphicDesign.css";

const pad = (n) => String(n).padStart(2, "0");

// Lama tiap poster tampil (ms)
const AUTOPLAY_MS = 4000;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function GraphicDesign() {
  const { data: profile } = useGraphicProfile();
  const { data: designs } = useGraphicDesigns();
  const [activeId, setActiveId] = useState(null);
  const [wrapRef, inView] = useInView({ once: false, threshold: 0.3 });

  const list = (designs ?? []).filter((d) => d.featured);
  const featured = list.find((d) => d.id === activeId) ?? list[0];
  const featuredIndex = featured ? list.indexOf(featured) : 0;

  // Auto-play hanya jalan saat section terlihat dan pengguna tidak memakai reduced motion
  const autoplay = list.length > 1 && inView && !prefersReducedMotion();

  const goNext = () => setActiveId(list[(featuredIndex + 1) % list.length].id);

  return (
    <Section id="graphic-design" label="GRAPHIC DESIGN" title="Visuals I've Crafted" className="gd">
      <div ref={wrapRef}>
        <Row className="g-4 align-items-start">
          {/* Kiri: profil + thumbnail */}
          <Col lg={6}>
            <Reveal as={Card} variant="left" className="gd__side">
              {profile && (
                <div className="gd__profile">
                  <div className="gd__avatar">
                    <SmartImage src={profile.avatar} alt={profile.handle} fallbackLabel="" />
                  </div>
                  <div>
                    <strong>{profile.handle}</strong>
                    <span>{profile.role}</span>
                  </div>
                </div>
              )}

              {profile && (
                <Button as={Link} to={profile.moreUrl} className="btn-secondary gd__more">
                  See All Design
                </Button>
              )}

              <Row xs={3} className="g-2">
                {list.map((d, i) => (
                  <Col key={d.id} className="gd__thumbcol" style={{ "--t": i }}>
                    <button
                      type="button"
                      className={`gd__thumb ${d.id === featured?.id ? "is-active" : ""}`}
                      onClick={() => setActiveId(d.id)}
                      aria-label={d.title}
                    >
                      <SmartImage src={d.image} alt={d.title} fallbackLabel={pad(i + 1)} />
                    </button>
                  </Col>
                ))}
              </Row>
            </Reveal>
          </Col>

          {/* Kanan: poster pilihan */}
          {featured && (
            <Col lg={6}>
              <Reveal variant="right" delay={150}>
                <div className="gd__frame">
                  <div className="gd__poster" key={featured.id}>
                    <SmartImage src={featured.image} alt={featured.title} />
                  </div>
                </div>

                {/* Garis waktu auto-play. `key` memutar ulang animasinya tiap ganti poster */}
                <div className="gd__timer" aria-hidden="true">
                  {autoplay && (
                    <i
                      key={featured.id}
                      className="gd__progress"
                      style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
                      onAnimationEnd={goNext}
                    />
                  )}
                </div>

                <div className="gd__caption">
                  <strong>{featured.title}</strong>
                  <span>
                    {pad(featuredIndex + 1)}/{pad(list.length)}
                  </span>
                </div>
              </Reveal>
            </Col>
          )}
        </Row>
      </div>
    </Section>
  );
}