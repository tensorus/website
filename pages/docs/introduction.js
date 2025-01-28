import Layout from '@/components/Layout'
import styles from '@/styles/Docs.module.css'

export default function Introduction() {
  return (
    <Layout>
      <section className={styles.docsSection}>
        <h1>Introduction to Tensorus</h1>
        <h2>Agentic Tensor Databases 101</h2>
        <p>
          Tensorus is the world’s first agentic tensor database. Imagine having a
          data platform where multi-dimensional data isn't just stored—
          it’s actively structured, indexed, and optimized by specialized AI agents.
        </p>
        <p>
          Traditional databases struggle to handle the n-dimensional complexity
          demanded by modern AI tasks. Tensorus tackles this challenge by providing:
        </p>
        <ul>
          <li><strong>Native Tensor Operations:</strong> Efficiently store and query multi-dimensional data.</li>
          <li><strong>Agentic Framework:</strong> Automate ingestion, cleaning, and training through specialized AI agents.</li>
          <li><strong>Open Source Community:</strong> Collaborate, extend, and evolve the platform together.</li>
        </ul>
        <p>
          Ready to explore more? Check out our Quickstart Guide for a hands-on demo,
          or dive into advanced docs for large-scale AI workflows.
        </p>
      </section>
    </Layout>
  )
}
