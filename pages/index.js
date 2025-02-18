import React, { useState } from 'react';
import Layout from '@/components/Layout';
import VideoModal from '@/components/VideoModal';
import styles from '@/styles/Home.module.css';

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <Layout>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          {/* Updated Title & Sub-Message */}
          <h1 className={styles.title}>
            Tensorus: The World’s First Agentic Tensor Database.
          </h1>
          <h2 className={styles.subtitle}>
            Imagine a Database That Thinks Like a Brain
          </h2>
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
            <button onClick={openModal} className={styles.buttonPrimary}>
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 1: Introducing Our Agentic Tensor Database */}
      <section className={styles.sectionBackground}>
        <div className={styles.section}>
          <h1>Introducing Our Agentic Tensor Database</h1>
          <h2>Where Innovation Meets Intelligent Data Management</h2>
          <p>
            Tensorus isn’t just another data platform—it’s a breakthrough in how we
            handle multi-dimensional information. Our agentic approach turns every
            piece of data into a proactive contributor to AI-driven insights.
            By fusing advanced tensor operations with self-learning agents,
            Tensorus redefines what’s possible in big data, analytics, and
            real-time decision-making.
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

      {/* SECTION 6: Revolutionizing AI Through Tensors */}
      <section className={styles.sectionBackground}>
        <div className={styles.section}>
          <h1>Revolutionizing AI Through Tensors</h1>
          <p>
            Tensorus seamlessly connects tensor-based data structures with the power
            of autonomous AI agents. By bridging the gap between raw data
            and intelligent models, Tensorus enables revolutionary progress in
            deep learning, real-time analytics, and beyond. Experience a new paradigm
            where your database is an active collaborator in AI-driven solutions,
            constantly learning and evolving to meet tomorrow’s challenges.
          </p>
        </div>
      </section>

      {/* DEMO VIDEO MODAL */}
      <VideoModal isOpen={isModalOpen} onClose={closeModal} videoId="lSjXQVsMMDE" />
    </Layout>
  );
}
