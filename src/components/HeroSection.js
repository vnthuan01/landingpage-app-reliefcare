"use client";

import {useEffect, useRef, useState} from "react";
import styles from "./HeroSection.module.css";

/* Floating indicator data */
const floatingCards = [
  {
    id: "sos",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="8" stroke="#ef4444" strokeWidth="1.5" />
        <path
          d="M9 5V10"
          stroke="#ef4444"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="9" cy="13" r="1" fill="#ef4444" />
      </svg>
    ),
    label: "Tín hiệu SOS mới",
    value: "12 tín hiệu",
    color: "danger",
    position: "topLeft",
  },
  {
    id: "rescue",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M9 2L11.5 7H15L12 10L13.5 15L9 12L4.5 15L6 10L3 7H6.5L9 2Z"
          stroke="#10b981"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Đội cứu hộ gần nhất",
    value: "3 đội • 2.4 km",
    color: "success",
    position: "topRight",
  },
  {
    id: "danger",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M8.13 2.5a1 1 0 011.74 0l6.46 11.2a1 1 0 01-.87 1.5H2.54a1 1 0 01-.87-1.5L8.13 2.5z"
          stroke="#f59e0b"
          strokeWidth="1.5"
        />
        <path
          d="M9 7V11"
          stroke="#f59e0b"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="9" cy="13.5" r="0.75" fill="#f59e0b" />
      </svg>
    ),
    label: "Khu vực nguy hiểm",
    value: "Cấp độ 4",
    color: "warning",
    position: "bottomLeft",
  },
  {
    id: "weather",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M4 13a4 4 0 014-4 4.5 4.5 0 018.5 1.5A3 3 0 0115 16H5a3 3 0 01-1-3z"
          stroke="#3b82f6"
          strokeWidth="1.5"
        />
        <path
          d="M7 16v2M10 16v2M13 16v2"
          stroke="#3b82f6"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    label: "Bão đang tiến vào",
    value: "Gió 120 km/h",
    color: "info",
    position: "bottomRight",
  },
];

export default function HeroSection() {
  const videoRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        /* autoplay blocked — silent fail */
      });
    }
  }, []);

  return (
    <section className={styles.hero} id="hero">
      {/* Video Background */}
      <div className={styles.videoBg}>
        <video
          ref={videoRef}
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster=""
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260228_065522_522e2295-ba22-457e-8fdb-fbcd68109c73.mp4"
            type="video/mp4"
          />
        </video>
        {/* Very subtle bottom gradient only for text readability - no color overlay */}
        <div className={styles.videoGradient} />
      </div>

      {/* Floating UI Indicators */}
      <div
        className={`${styles.floatingCards} ${loaded ? styles.cardsVisible : ""}`}
      >
        {floatingCards.map((card) => (
          <div
            key={card.id}
            className={`${styles.floatingCard} ${styles[card.position]} ${styles[card.color]}`}
          >
            <div className={styles.cardPulse} />
            <div className={styles.cardIcon}>{card.icon}</div>
            <div className={styles.cardContent}>
              <span className={styles.cardLabel}>{card.label}</span>
              <span className={styles.cardValue}>{card.value}</span>
            </div>
          </div>
        ))}

        {/* SOS Pulse Markers */}
        <div className={`${styles.sosPulse} ${styles.sosPulse1}`}>
          <span />
          <span />
        </div>
        <div className={`${styles.sosPulse} ${styles.sosPulse2}`}>
          <span />
          <span />
        </div>
        <div className={`${styles.sosPulse} ${styles.sosPulse3}`}>
          <span />
          <span />
        </div>
      </div>

      {/* Hero Content */}
      <div
        className={`${styles.content} ${loaded ? styles.contentVisible : ""}`}
      >
        <h1 className={styles.headline}>
          <span className={styles.line1}>
            Nền tảng hỗ trợ cứu trợ thiên tai
          </span>
          <span className={styles.line2}>
            kết nối SOS & cứu hộ theo thời gian thực
          </span>
        </h1>

        <p className={styles.subtext}>
          Theo dõi bão lũ, gửi tín hiệu SOS, kết nối đội cứu hộ và tình nguyện
          viên trên bản đồ trực tiếp
        </p>

        <div className={styles.ctaGroup}>
          <a
            href="https://drive.google.com/file/d/1BwkzzHrzjaqlvnFXBlQloL4jVyeoG4IG/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryCta}
          >
            <span className={styles.ctaLabel}>Tải ứng dụng ngay</span>
            <span className={styles.ctaIconPulse}>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </span>
          </a>
          <a href="#ban-do-sos" className={styles.secondaryCta}>
            Xem bản đồ Live
          </a>
        </div>

        {/* Stats Row */}
        <div className={styles.statsRow}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>24/7</span>
            <span className={styles.statLabel}>Giám sát liên tục</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>2,400+</span>
            <span className={styles.statLabel}>Tình nguyện viên</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>63</span>
            <span className={styles.statLabel}>Tỉnh thành</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
        <span className={styles.scrollText}>Cuộn xuống</span>
      </div>
    </section>
  );
}
