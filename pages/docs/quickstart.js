import Layout from '@/components/Layout'
import styles from '@/styles/Docs.module.css'

export default function Quickstart() {
  return (
    <Layout>
      <section className={styles.docsContainer}>
        <h1>Quickstart Guide</h1>
        <p>
          This guide helps you spin up Tensorus quickly. For instance:
        </p>
        <h2>1. Installation</h2>
        <p>
          - Clone the repo, run Docker, or compile from source (details TBD).
        </p>
        <h2>2. Basic Usage</h2>
        <p>
          - Ingest a sample dataset, run a simple query, etc.
        </p>
      </section>
    </Layout>
  )
}
