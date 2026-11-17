import { useEffect, useMemo, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useGraphicDesigns } from "../hooks/usePortfolio";
import PageHeader from "../components/common/PageHeader";
import Reveal from "../components/common/Reveal";
import SmartImage from "../components/common/SmartImage";
import "./ListingPage.css";

const FILTERS = ["All", "Logo & Branding", "Posters", "Banners", "Feeds", "Others"];

// Jumlah kolom mengikuti lebar layar: 3 (desktop), 2 (tablet), 1 (HP)
const getColumnCount = () => {
    if (window.matchMedia("(min-width: 992px)").matches) return 3;
    if (window.matchMedia("(min-width: 576px)").matches) return 2;
    return 1;
};

function useColumnCount() {
    const [count, setCount] = useState(getColumnCount);
    useEffect(() => {
        const onResize = () => setCount(getColumnCount());
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);
    return count;
}

export default function DesignsPage() {
    const { data: designs } = useGraphicDesigns();
    const [filter, setFilter] = useState("All");
    const count = useColumnCount();

    const columns = useMemo(() => {
        const visible = (designs ?? []).filter((d) => filter === "All" || d.category === filter);
        const cols = Array.from({ length: count }, () => []);
        visible.forEach((d, i) => cols[i % count].push(d));
        return cols;
    }, [designs, filter, count]);

    const isEmpty = columns.every((c) => c.length === 0);

    return (
        <div className="listing-page">
            <Container>
                <PageHeader
                    label="GRAPHIC DESIGN"
                    title="All Design"
                    filters={FILTERS}
                    active={filter}
                    onChange={setFilter}
                />

                <Row className="g-4" key={`${filter}-${count}`}>
                    {columns.map((col, ci) => (
                        <Col key={ci} xs={12 / count} className="d-flex flex-column gap-4">
                            {col.map((d, i) => (
                                <Reveal key={d.id} variant="up" delay={i * 90}>
                                    <Card className="design-card">
                                        <SmartImage src={d.image} alt={d.title} className="design-card__img" fallbackLabel={d.title} />
                                        <h3>{d.title}</h3>
                                    </Card>
                                </Reveal>
                            ))}
                        </Col>
                    ))}
                </Row>

                {isEmpty && <p className="listing-empty">Belum ada design di kategori ini.</p>}
            </Container>
        </div>
    );
}