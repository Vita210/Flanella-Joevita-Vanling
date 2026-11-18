import { useState } from "react";
import { Button, Card, Carousel, Col, Modal, Row } from "react-bootstrap";
import { useCertifications } from "../hooks/usePortfolio";
import Section from "../components/common/Section";
import Reveal from "../components/common/Reveal";
import SmartImage from "../components/common/SmartImage";
import { formatMonthYear } from "../utils/formatDate";
import "./Certifications.css";

export default function Certifications() {
  const { data: certs } = useCertifications();
  const [selected, setSelected] = useState(null);
  const [show, setShow] = useState(false);

  const open = (cert) => {
    setSelected(cert);
    setShow(true);
  };

  const images = selected?.images ?? [];

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

                {/* Tombol hanya membuka modal */}
                <Button onClick={() => open(c)} className="btn-primary-custom cert__btn">
                  View
                </Button>
              </Card>
            </Reveal>
          </Col>
        ))}
      </Row>

      {/* `selected` baru dikosongkan setelah animasi tutup selesai, supaya isi modal tidak hilang mendadak */}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        onExited={() => setSelected(null)}
        centered
        size="lg"
        contentClassName="cert-modal"
      >
        {selected && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selected.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <div className="cert-modal__img">
                {images.length > 1 ? (
                  <Carousel interval={null} variant="dark" className="w-100">
                    {images.map((img, i) => (
                      <Carousel.Item key={i}>
                        <SmartImage
                          src={img}
                          alt={`${selected.title} ${i + 1}`}
                          fallbackLabel="Certificate"
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                ) : (
                  <SmartImage
                    src={images[0]}
                    alt={`Certificate: ${selected.title}`}
                    fallbackLabel="Certificate"
                  />
                )}
              </div>
              <p className="cert-modal__meta">
                {selected.issuer} | {formatMonthYear(selected.issuedAt)} | Credential ID{" "}
                {selected.credentialId}
              </p>
            </Modal.Body>

            {selected.credentialUrl && (
              <Modal.Footer>
                <Button
                  href={selected.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary-custom"
                >
                  Show Credential
                </Button>
              </Modal.Footer>
            )}
          </>
        )}
      </Modal>
    </Section>
  );
}