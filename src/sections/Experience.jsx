import { Card, Col, Row } from "react-bootstrap";
import { useExperiences } from "../hooks/usePortfolio";
import Section from "../components/common/Section";
import Reveal from "../components/common/Reveal";
import { CodeIcon, UsersIcon } from "../components/common/Icons";
import { formatDateRange } from "../utils/formatDate";
import "./Experience.css";

function ExperienceColumn({ type, title, icon: Icon, fromVariant }) {
  const { data: items } = useExperiences(type);

  return (
    <>
      <Reveal variant={fromVariant} className="exp__heading">
        <span className="exp__icon">
          <Icon width={20} height={20} />
        </span>
        <h3>{title}</h3>
      </Reveal>

      <div className="d-flex flex-column gap-3">
        {(items ?? []).map((item, i) => (
          <Reveal key={item.id} variant="up" delay={i * 110}>
            <Card className="exp__card">
              <time className="exp__date">
                {formatDateRange(item.startDate, item.endDate, item.isCurrent)}
              </time>
              <h4>{item.organization}</h4>
              <span className="exp__role">{item.role}</span>
              <p>{item.description}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </>
  );
}

export default function Experience() {
  return (
    <Section id="experience" label="EXPERIENCE" title="Where I've Learned" className="exp">
      <Row className="g-4">
        <Col lg={6}>
          <ExperienceColumn type="internship" title="Internship" icon={CodeIcon} fromVariant="left" />
        </Col>
        <Col lg={6}>
          <ExperienceColumn type="organization" title="Organization" icon={UsersIcon} fromVariant="right" />
        </Col>
      </Row>
    </Section>
  );
}
