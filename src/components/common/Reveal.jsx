import { useInView } from "../../hooks/useInView";

/**
 * Bungkus elemen apa pun untuk animasi muncul saat di-scroll.
 * variant: "up" | "down" | "left" | "right" | "scale" | "fade"
 * delay  : ms (untuk efek berurutan / stagger)
 */
export default function Reveal({
  as: Tag = "div",
  variant = "up",
  delay = 0,
  once = true,
  className = "",
  style,
  children,
  ...rest
}) {
  const [ref, inView] = useInView({ once });

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant} ${inView ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
