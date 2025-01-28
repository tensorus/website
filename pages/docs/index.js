import Layout from '@/components/Layout'
import styles from '@/styles/Docs.module.css'
import Link from 'next/link'

export default function DocsIndex() {
  return (
    <Layout>
      <section className={styles.docsSection}>
        <h1>Tensorus Documentation</h1>
        <h2>Your Guide to Agentic Tensor Databases</h2>
        <p>
          Welcome to the official docs for Tensorus. Browse the sections below 
          to learn how to set up, configure, and maximize your AI-powered database.
        </p>

        <ul className={styles.docLinks}>
          <li>
            <Link href="/docs/introduction" legacyBehavior><a>1. Introduction</a></Link>
          </li>
          <li>
            <Link href="/docs/quickstart" legacyBehavior><a>2. Quickstart Guide</a></Link>
          </li>
        </ul>
      </section>
    </Layout>
  )
}
