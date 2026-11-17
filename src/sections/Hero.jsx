import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useProfile, useSocialLinks } from "../hooks/usePortfolio";
import { useTypewriter } from "../hooks/useTypewriter";
import { SOCIAL_ICONS } from "../components/common/Icons";
import SmartImage from "../components/common/SmartImage";
import "./Hero.css";

// Jeda animasi masuk berurutan (ms)
const delay = (i) => ({ animationDelay: `${i * 140 + 250}ms` });

export default function Hero() {
  const { data: profile } = useProfile();
  const { data: socials } = useSocialLinks();

  // Hook harus dipanggil tanpa syarat, jadi pakai array kosong saat data belum siap
  const typed = useTypewriter(profile?.roles ?? []);

  if (!profile) return <section id="home" className="hero" />;

  return (
    <section id="home" className="hero">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <h1 className="hero__title animate-up" style={delay(0)}>
              Hi! I'm <span>{profile.displayName}</span>
            </h1>

            {/* Kotak seleksi ala Figma berisi teks yang diketik */}
            <div className="hero__role animate-up" style={delay(1)} aria-label={profile.roles.join(" / ")}>
              <i className="hero__handle hero__handle--tl" />
              <i className="hero__handle hero__handle--tr" />
              <i className="hero__handle hero__handle--bl" />
              <i className="hero__handle hero__handle--br" />
              <span className="hero__typed">{typed}</span>
              <span className="hero__caret" aria-hidden="true" />
            </div>

            <p className="hero__summary animate-up" style={delay(2)}>
              {profile.heroSummary}
            </p>

            <div className="hero-buttons animate-up" style={delay(3)}>
              <Button
                className="btn-primary-custom me-3"
                href={profile.cvUrl}
                target="_blank"
                rel="noreferrer"
              >
                Download CV
              </Button>
              <Button className="btn-secondary" as={Link} to="/project">
                See My Project
              </Button>
            </div>
          </Col>

          <Col lg={6} className="order-first order-lg-last">
            <div className="hero__visual animate-up" style={delay(2)}>
              <div className="hero__photo">
                <SmartImage src={profile.heroPhoto} alt={profile.fullName} />
              </div>

              <ul className="hero__socials">
                {(socials ?? []).map((s, i) => {
                  const Icon = SOCIAL_ICONS[s.platform];
                  if (!Icon) return null;
                  return (
                    <li key={s.id} style={{ "--n": i }}>
                      <a href={s.url} target="_blank" rel="noreferrer" aria-label={s.platform}>
                        <Icon width={20} height={20} />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
