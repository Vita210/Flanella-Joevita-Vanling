import { useMemo, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useProjects } from "../hooks/usePortfolio";
import PageHeader from "../components/common/PageHeader";
import Reveal from "../components/common/Reveal";
import SmartImage from "../components/common/SmartImage";
import "./ListingPage.css";

const FILTERS = ["All", "UI/UX", "Web Dev", "App Dev", "Others"];

export default function ProjectsPage() {
  const { data: projects } = useProjects();
  const [filter, setFilter] = useState("All");

  const visible = useMemo(
    () => (projects ?? []).filter((p) => filter === "All" || p.categories.includes(filter)),
    [projects, filter]
  );

  return (
    <div className="listing-page">
      <Container>
        <PageHeader
          label="PROJECT"
          title="All Project"
          filters={FILTERS}
          active={filter}
          onChange={setFilter}
        />

        {/* key=filter -> kartu dimuat ulang dengan animasi tiap ganti filter */}
        <Row className="g-4" key={filter}>
          {visible.map((p, i) => (
            <Col key={p.id} md={6} lg={4}>
              <Reveal variant="up" delay={(i % 3) * 100} className="h-100">
                <Card className="project-card h-100">
                  <div className="project-card__thumb">
                    <SmartImage src={p.image} alt={p.title} fallbackLabel={p.title} />
                  </div>

                  <div className="project-card__cats">
                    {p.categories.map((c) => (
                      <span key={c}>{c}</span>
                    ))}
                  </div>
                  <h2>{p.title}</h2>
                  <h3>{p.subtitle}</h3>
                  <p>{p.description}</p>
                </Card>
              </Reveal>
            </Col>
          ))}
        </Row>

        {visible.length === 0 && <p className="listing-empty">Belum ada project di kategori ini.</p>}
      </Container>
    </div>
  );
}