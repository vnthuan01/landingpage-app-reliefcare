"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const menuItems = [
  { label: "Giới thiệu", href: "#gioi-thieu" },
  { label: "Bản đồ SOS", href: "#ban-do-sos" },
  { label: "Đội cứu trợ", href: "#doi-cuu-tro" },
  { label: "Tình nguyện viên", href: "#tinh-nguyen-vien" },
  { label: "Liên hệ", href: "#lien-he" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className={styles.inner}>
        {/* Logo */}
        <a href="/" className={styles.logo} aria-label="ReliefCare Home">
          <span className={styles.logoIcon}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="13" stroke="#222" strokeWidth="2" />
              <path
                d="M14 6L14 16M14 16L9 12M14 16L19 12"
                stroke="#222"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="14" cy="22" r="1.5" fill="#ef4444" />
            </svg>
          </span>
          <span className={styles.logoText}>ReliefCare</span>
        </a>

        {/* Desktop Menu */}
        <ul className={styles.menu}>
          {menuItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className={styles.menuLink}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a href="https://drive.google.com/file/d/1IRUa3gxwL_fJxvoX3j--q29urNsRmLtj/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className={styles.cta}>
          <span className={styles.ctaText}>Tải ứng dụng</span>
          <span className={styles.ctaArrow}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 11L11 3M11 3H5M11 3V9"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>

        {/* Mobile Toggle */}
        <button
          className={`${styles.mobileToggle} ${mobileOpen ? styles.mobileOpen : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ""}`}>
        <ul>
          {menuItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={styles.mobileLink}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="https://drive.google.com/file/d/1IRUa3gxwL_fJxvoX3j--q29urNsRmLtj/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className={styles.mobileCta} onClick={() => setMobileOpen(false)}>
          Tải ứng dụng
        </a>
      </div>
    </nav>
  );
}
