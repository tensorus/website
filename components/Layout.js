// components/Layout.js
import Link from 'next/link'
import styles from '@/styles/Layout.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          {/* Logo / Brand Name */}
          <Link href="/" legacyBehavior>
            <a className={styles.logo}>Tensorus</a>
          </Link>

          {/* Navigation Links */}
          <div className={styles.navLinks}>
            <Link href="/docs" legacyBehavior><a>Docs</a></Link>
            <Link href="/blog" legacyBehavior><a>Blog</a></Link>
          </div>
        </nav>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Tensorus. All Rights Reserved.</p>
      </footer>
    </div>
  )
}
