import Layout from '@/components/Layout'
import styles from '@/styles/Docs.module.css'

export default function Introduction() {
  return (
    <Layout>
      <section className={styles.docsContainer}>
        <h1>Introduction to Tensorus</h1>
        <p>
          Tensorus is the world’s first agentic tensor database, combining
          native tensor operations with built-in AI agents for data ingestion,
          indexing, and optimization.
        </p>
        <p>
          By storing multi-dimensional data natively, Tensorus can power advanced
          AI workflows without the usual overhead of external ETL or specialized
          data stores.
        </p>
      </section>
    </Layout>
  )
}
