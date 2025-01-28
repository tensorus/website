// pages/index.js

import Layout from '@/components/Layout'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Imagine a Database That Thinks Like a Brain</h1>
          <h2 className={styles.subtitle}>Where Data Evolves into Intelligence</h2>
          <p className={styles.bodyText}>
            We’re introducing Tensorus, a revolutionary way to store and use information.
            Forget traditional databases – Tensorus is powered by the same technology
            that drives artificial intelligence. Think of it as a living library where
            data isn’t just stored; it’s actively used to solve problems and make new
            discoveries. Tensorus is the world’s first open-source project powered by AI agents.
          </p>
          <div className={styles.ctaButtons}>
            <a href="/docs" className={styles.buttonPrimary}>Learn More</a>
            <a
              href="https://github.com/tensorus"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.buttonSecondary}
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 1: The Story Behind Tensorus */}
      <section className={styles.sectionBackground}>
        <div className={styles.section}>
          <h1>Born from a Global Vision</h1>
          <h2>From Global Inspiration to Open-Source Innovation</h2>
          <p>
            Tensorus isn’t just a tech project; it’s a story. We were inspired by
            experiences in London, ideas sparked in Vancouver, and refined through
            testing in Paris. Now, we’re launching this open-source initiative
            from Seattle (or New York) to share this technology with the world.
            Our journey is rooted in the belief that data, when organized dynamically,
            can unlock unprecedented possibilities.
          </p>
        </div>
      </section>

      {/* SECTION 2: The Power of Tensorus (How It Works) */}
      <section className={styles.section}>
        <h1>Transforming Data Into Dynamic Insights</h1>
        <h2>From Simple Storage to Dynamic Analysis</h2>
        <p>
          At its core, Tensorus treats all data as interconnected pieces of a puzzle.
          We call these pieces “tensors” – multi-dimensional building blocks.
          Tensorus learns how to transform and connect data, allowing AI agents to pull
          exactly what’s needed. It’s not just about storing information; it’s about
          how that information actively helps you solve real problems.
        </p>
      </section>

      {/* SECTION 3: Key Features */}
      <section className={styles.section}>
        <h1>The Features That Set Tensorus Apart</h1>
        <h2>Intelligent, Dynamic, and Universally Adaptable</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <h3>AI-Powered Agents</h3>
            <p>
              Tensorus utilizes AI agents to organize and use data for customized solutions.
              The system learns your needs and adjusts accordingly.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>Dynamic Data Processing</h3>
            <p>
              Unlike static databases, Tensorus actively transforms and connects data,
              allowing for much faster and more intuitive analysis.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>Universal Data Handling</h3>
            <p>
              Whether it’s text, numbers, images, or something else, Tensorus handles all types
              of data in a unified, dynamic way.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>Efficiency and Speed</h3>
            <p>
              Tensorus efficiently stores and retrieves data by breaking it into smaller,
              more manageable components, speeding up the analysis process.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: Future with Tensorus */}
      <section className={styles.sectionBackground}>
        <div className={styles.section}>
          <h1>Unlock Limitless Possibilities</h1>
          <h2>From Healthcare to Finance, From Research to Education</h2>
          <p>
            Tensorus is not just for tech companies. Imagine a system that can
            understand complex medical data, predict market trends with greater
            accuracy, or even create personalized learning experiences. The potential
            uses for Tensorus are vast and span across many different fields.
            Tensorus is designed to be the ultimate data solution, adapting to
            any challenge or dataset.
          </p>
        </div>
      </section>

      {/* SECTION 5: Join the Revolution */}
      <section className={styles.section}>
        <h1>Be Part of the Future of Data</h1>
        <h2>An Open-Source Project For The Future</h2>
        <p>
          Tensorus is an open-source project, and we invite you to join our growing community.
          Whether you are a developer, data scientist, or simply an innovator, there is a
          place for you. Together, we can make data more powerful, more accessible,
          and more meaningful.
        </p>
      </section>

      {/* SECTION 6: Tensorus’ Brand Identity */}
      <section className={styles.sectionBackground}>
        <div className={styles.section}>
          <h1>Where Tensors Meet Intelligence.</h1>
          <p>
            Our proposed slogan captures the essence of Tensorus. Visually, we’re
            exploring a logo representing the multidimensional nature of tensors,
            perhaps using 3D grids with data points or a neural network-style design.
            This brand identity reflects our focus on AI-driven, multi-dimensional data solutions.
          </p>
        </div>
      </section>
    </Layout>
  )
}
