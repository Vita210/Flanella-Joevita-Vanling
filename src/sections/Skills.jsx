import { Badge, Card, Col, Row } from "react-bootstrap";
import { useSkillCategories } from "../hooks/usePortfolio";
import Section from "../components/common/Section";
import Reveal from "../components/common/Reveal";
import "./Skills.css";

export default function Skills() {
  const { data: categories } = useSkillCategories();

  return (
    <Section id="skills" label="SKILLS & TOOLS" title="What I Work With" className="skills">
      <Row className="g-4">
        {(categories ?? []).map((cat, i) => (
          <Col key={cat.id} md={4}>
            <Reveal as={Card} variant="up" delay={i * 140} className="skills__card h-100">
              <h3>{cat.title}</h3>
              <p>{cat.description}</p>
              <div className="d-flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  // Chip muncul satu per satu setelah kartunya muncul
                  <Badge key={skill} bg="" pill className="chip skills__chip" style={{ "--j": j }}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </Reveal>
          </Col>
        ))}
      </Row>
    </Section>
  );
}
