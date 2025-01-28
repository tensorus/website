import Layout from '@/components/Layout'
import styles from '@/styles/Docs.module.css'

export default function Quickstart() {
  return (
    <Layout>
      <section className={styles.docsSection}>
        <h1>Quickstart Guide</h1>
        <h2>Get Tensorus Running in Minutes</h2>
        <p>
          This guide walks you through installing Tensorus and ingesting your first dataset.
        </p>

        <h2>1. Installation</h2>
        <p>
          <strong>Option A: Docker</strong><br />
          Pull and run the latest Tensorus image:
        </p>
        <pre>
{`docker pull tensorus/tensorus:latest
docker run -p 8080:8080 tensorus/tensorus:latest`}
        </pre>

        <p>
          <strong>Option B: From Source</strong><br />
          Clone the repo, install dependencies, and start the service:
        </p>
        <pre>
{`git clone https://github.com/tensorus/tensorus.git
cd tensorus
npm install
npm run start`}
        </pre>

        <h2>2. Basic Usage</h2>
        <p>
          Ingest a dataset:
        </p>
        <pre>
{`curl -X POST http://localhost:8080/api/ingest -F file=@mydataset.json`}
        </pre>
        <p>
          Query your data:
        </p>
        <pre>
{`curl http://localhost:8080/api/query?tensor=mydataset`}
        </pre>
        <p>
          You’ve successfully stored and queried multi-dimensional data with Tensorus!
          Explore advanced features next, including indexing, AI-agent customization,
          and distributed deployments.
        </p>
      </section>
    </Layout>
  )
}
