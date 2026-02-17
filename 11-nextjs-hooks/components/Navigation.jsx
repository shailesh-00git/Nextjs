"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css"; // Import the CSS module

function Navigation() {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <nav className={styles.nav}>
      <Link
        href="/dashboard"
        className={`${styles.link} ${isActive("/dashboard") ? styles.active : ""}`}
      >
        Dashboard
      </Link>

      <Link
        href="/setting"
        className={`${styles.link} ${isActive("/setting") ? styles.active : ""}`}
      >
        Settings
      </Link>
    </nav>
  );
}

export default Navigation;
