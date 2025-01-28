import Layout from '@/components/Layout'
import styles from '@/styles/Docs.module.css'
import Link from 'next/link'

export default function DocsIndex() {
  return (
    <Layout>
      <section className={styles.docsContainer}>
        <h1>Tensorus Documentation</h1>
        <p>Welcome to the official docs for Tensorus: Agentic Tensor Databases.</p>
        <p>Choose a section below to learn more about Tensorus:</p>

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
