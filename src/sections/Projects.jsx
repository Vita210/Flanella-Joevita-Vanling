import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Nav, Row } from "react-bootstrap";
import { useProjects } from "../hooks/usePortfolio";
import Section from "../components/common/Section";
import Reveal from "../components/common/Reveal";
import SmartImage from "../components/common/SmartImage";
import "./Projects.css";

const pad = (n) => String(n).padStart(2, "0");

export default function Projects() {
  const { data: projects } = useProjects();
  const [activeId, setActiveId] = useState(null);

  const list = (projects ?? []).filter((p) => p.featured);
  const active = list.find((p) => p.id === activeId) ?? list[0];
  const activeIndex = active ? list.indexOf(active) : 0;

  return (
    <Section id="projects" label="SELECTED PROJECT" title="Things I've Made" className="projects">
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
              {/* <Button href={active.detailUrl} className="btn-primary-custom">
                View Project Detail
              </Button> */}
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
    </Section>
  );
}
