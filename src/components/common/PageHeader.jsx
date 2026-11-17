import { Button } from "react-bootstrap";
import Reveal from "./Reveal";

/** Judul halaman + garis label + tombol filter. CSS-nya ada di pages/ListingPage.css */
export default function PageHeader({ label, title, filters, active, onChange }) {
    return (
        <header className="page-header">
            <Reveal variant="down" className="page-header__label">
                <i />
                <span>{label}</span>
                <i />
            </Reveal>

            <Reveal as="h1" delay={100} className="page-header__title">
                {title}
            </Reveal>

            <Reveal delay={200} className="page-header__filters" role="tablist">
                {filters.map((f) => (
                    <Button
                        key={f}
                        role="tab"
                        aria-selected={f === active}
                        className={`filter-pill ${f === active ? "is-active" : ""}`}
                        onClick={() => onChange(f)}
                    >
                        {f}
                    </Button>
                ))}
            </Reveal>
        </header>
    );
}