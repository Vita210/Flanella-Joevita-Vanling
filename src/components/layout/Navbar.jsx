import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Nav, Navbar as BsNavbar } from "react-bootstrap";
import { useProfile } from "../../hooks/usePortfolio";
import { useActiveSection } from "../../hooks/useActiveSection";
import "./Navbar.css";

// Konfigurasi navigasi (bukan data konten, jadi boleh tetap di sini)
const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Project" },
  { id: "graphic-design", label: "Graphic Design" },
];

export default function Navbar() {
  const { data: profile } = useProfile();
  const { pathname } = useLocation();
  const active = useActiveSection(
    NAV_ITEMS.map((n) => n.id),
    pathname
  );
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <BsNavbar
      expand="md"
      sticky="top"
      expanded={expanded}
      onToggle={setExpanded}
      className={`site-navbar ${scrolled ? "site-navbar--scrolled" : ""}`}
    >
      <Container>
        <BsNavbar.Brand as={Link} to="/#home" className="site-navbar__brand">
          {profile?.fullName}
        </BsNavbar.Brand>

        <BsNavbar.Toggle aria-controls="main-nav" />

        <BsNavbar.Collapse id="main-nav" className="justify-content-end">
          <Nav className="gap-1">
            {NAV_ITEMS.map((item) => (
              <Nav.Link
                key={item.id}
                as={Link}
                to={`/#${item.id}`}
                active={pathname === "/" && active === item.id}
                className="site-navbar__link"
                onClick={() => setExpanded(false)}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}
