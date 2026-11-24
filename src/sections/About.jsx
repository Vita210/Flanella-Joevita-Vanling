import { Link } from "react-router-dom";
import { Button, Card, Col, Row } from "react-bootstrap";
import {
  useCertifications,
  useExperiences,
  useProfile,
  useProjects,
} from "../hooks/usePortfolio";
import Section from "../components/common/Section";
import Reveal from "../components/common/Reveal";
import SmartImage from "../components/common/SmartImage";
import "./About.css";

export default function About() {
  const { data: profile } = useProfile();
  const { data: projects } = useProjects();
  const { data: internships } = useExperiences("internship");
  const { data: certs } = useCertifications();

  if (!profile) return <section id="about" />;

  // Jumlah dihitung dari data
  const stats = [
    { value: projects?.length ?? 0, label: "Projects" },
    { value: internships?.length ?? 0, label: "Internships" },
    { value: certs?.length ?? 0, label: "Certificates" },
  ];

  return (
    <Section id="about" label="ABOUT ME" className="about">
      <Row className="g-4">
        <Col lg={4}>
          <Reveal variant="left" className="about__photo h-100">
            <SmartImage src={profile.aboutPhoto} alt={profile.fullName} />
          </Reveal>
        </Col>

        <Col lg={8} className="d-flex flex-column gap-3">
          <Reveal as={Card} variant="right" delay={100} className="about__card flex-grow-1">
            <div className="about__top">
              <h2 className="about__hello">Hello!</h2>
              {profile.availability && (
                <span className="about__status">
                  <i aria-hidden="true" />
                  {profile.availability}
                </span>
              )}
            </div>

            <p className="about__headline">
              {profile.aboutHeadline.map((seg, i) =>
                seg.highlight ? (
                  <span key={i} className="about__mark">
                    {seg.text}
                  </span>
                ) : (
                  <span key={i}>{seg.text}</span>
                )
              )}
            </p>
            <p className="about__body">{profile.aboutBody}</p>

            <ul className="about__stats">
              {stats.map((s) => (
                <li key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal as={Card} variant="up" delay={250} className="about__cta">
            <p>Want to see what I&apos;ve built?</p>
            <Button as={Link} to="/project" className="btn-primary-custom">
              See My Project
            </Button>
          </Reveal>
        </Col>
      </Row>
    </Section>
  );
}