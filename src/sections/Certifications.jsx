import { Button, Card, Col, Row } from "react-bootstrap";
import { useCertifications } from "../hooks/usePortfolio";
import Section from "../components/common/Section";
import Reveal from "../components/common/Reveal";
import { formatMonthYear } from "../utils/formatDate";
import "./Certifications.css";

export default function Certifications() {
  const { data: certs } = useCertifications();

  return (
    <Section id="certification" label="CERTIFICATION" title="Proof of Learning" className="cert">
      <Row className="g-3">
        {(certs ?? []).map((c, i) => (
          <Col key={c.id} md={6}>
            <Reveal
              variant={i % 2 === 0 ? "left" : "right"}
              delay={Math.floor(i / 2) * 120}
              className="h-100"
            >
              <Card className="cert__card h-100">
                <div>
                  <span className="cert__meta">
                    {c.issuer} | {formatMonthYear(c.issuedAt)}
                  </span>
                  <h3>{c.title}</h3>
                  <span className="cert__id">Credential ID {c.credentialId}</span>
                </div>
                <Button href={c.url} target="_blank" rel="noreferrer" className="btn-primary-custom cert__btn">
                  View
                </Button>
              </Card>
            </Reveal>
          </Col>
        ))}
      </Row>
    </Section>
  );
}
