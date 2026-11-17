import { Card, Col, Row } from "react-bootstrap";
import { useProcessSteps } from "../hooks/usePortfolio";
import Section from "../components/common/Section";
import Reveal from "../components/common/Reveal";
import "./Process.css";

/** Ilustrasi mini di tiap kartu. Dipilih lewat field `preview` dari data. */
const PREVIEWS = {
  design: () => (
    <div className="pv pv--design">
      <div className="pv__sheet">
        <i className="pv__line pv__line--long" />
        <i className="pv__line" />
        <i className="pv__btn" />
      </div>
    </div>
  ),
  code: () => (
    <div className="pv pv--code">
      <div className="pv__editor">
        <i className="pv__bar pv__bar--a" />
        <i className="pv__bar pv__bar--b" />
        <i className="pv__bar pv__bar--c" />
      </div>
    </div>
  ),
  test: () => (
    <div className="pv pv--test">
      <p className="pv__bubble pv__bubble--in">The button was hard to find.</p>
      <p className="pv__bubble pv__bubble--out">Updated in v2.</p>
    </div>
  ),
};

export default function Process() {
  const { data: steps } = useProcessSteps();

  return (
    <Section id="process" label="HOW I WORK" title="From Idea to Interface" className="process">
      <Row className="g-4">
        {(steps ?? []).map((step, i) => {
          const Preview = PREVIEWS[step.preview];
          return (
            <Col key={step.id} md={4}>
              <Reveal variant="up" delay={i * 150} className="h-100">
                <Card className="process__card h-100">
                  <div className="process__window">
                    <span className="process__dots">
                      <i /><i /><i />
                    </span>
                    <span className="process__file">{step.fileName}</span>
                  </div>

                  <div className="process__preview">{Preview && <Preview />}</div>

                  <div className="process__body">
                    <span className="process__step">{step.stepLabel}</span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </Card>
              </Reveal>
            </Col>
          );
        })}
      </Row>
    </Section>
  );
}
