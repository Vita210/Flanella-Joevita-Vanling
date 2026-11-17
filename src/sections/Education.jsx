import { Card } from "react-bootstrap";
import { useEducation } from "../hooks/usePortfolio";
import Section from "../components/common/Section";
import Reveal from "../components/common/Reveal";
import "./Education.css";

export default function Education() {
  const { data: items } = useEducation();

  return (
    <Section id="education" label="EDUCATION" title="Academic Path" className="education">
      <div className="d-flex flex-column gap-3">
        {(items ?? []).map((edu, i) => (
          <Reveal key={edu.id} variant="left" delay={i * 120}>
            <Card className="education__item">
              <div>
                <h3>{edu.institution}</h3>
                <p>{edu.major}</p>
              </div>
              <span className="education__year">
                {edu.startYear} - {edu.endYear}
              </span>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
