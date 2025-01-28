import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import styles from '@/styles/Blog.module.css'

const postsData = {
  'introducing-tensorus': {
    title: 'Introducing Tensorus',
    date: 'Jan 1, 2025',
    content: `
    Welcome to Tensorus! We’re thrilled to introduce the world’s first agentic tensor database.
    This is a platform built from the ground up to handle multi-dimensional data in a way
    that traditional databases can't, while harnessing AI agents to adapt and optimize
    data workflows on the fly.

    Why is this important? In today’s world, data is growing not just in size
    but in complexity. Tensorus tackles these challenges by making
    everything from ingestion to analysis more autonomous, dynamic,
    and developer-friendly. Plus, it's open source, meaning we thrive on
    community contributions and shared innovation.

    In this inaugural post, we’ll explore how Tensorus came to be, 
    what problems it solves for modern AI pipelines, and where we plan to go next.
    `
  },
  'vision-agentic-tensors': {
    title: 'Our Vision for Agentic Tensor Databases',
    date: 'Jan 8, 2025',
    content: `
    At Tensorus, we envision a future where data is more than static information;
    it's an active ingredient in every innovation. Our “agentic” approach means
    that specialized AI agents handle tasks like data ingestion, cleaning, indexing,
    and model training, all coordinated by a high-level orchestrator.

    Think of each agent as a mini-expert, fine-tuned for its particular function.
    Need to index your images? There’s an agent for that. Want to clean your text data?
    Another agent steps in. The result is a constantly improving ecosystem
    that learns from usage patterns, automatically re-optimizing data paths,
    and helping developers focus on building solutions rather than managing
    infrastructure.

    We believe the future of AI demands more synergy between data storage,
    data processing, and model deployment. Agentic tensor databases bring that synergy
    to life, bridging the gap between raw data and intelligent solutions. Stay tuned
    for more deep dives on each component and how you can leverage them in your projects.
    `
  },
  'roadmap-teaser-2025': {
    title: 'Roadmap Teaser: What’s Next for Tensorus',
    date: 'Jan 15, 2025',
    content: `
    As we move through 2025, we're excited to share our upcoming plans for Tensorus:

    1. Advanced Operator Fusion:
    We'll introduce new AI operator libraries that integrate seamlessly
    with hardware accelerators, reducing overhead and boosting performance.

    2. Agentic Self-Learning:
    Our AI agents will get better at scheduling and resource allocation,
    automatically adjusting system configurations based on workload patterns.

    3. Federated Tensorus:
    Imagine Tensorus running on multiple nodes across the globe, each node
    sharing only the necessary data while preserving privacy. This federation
    will open up new possibilities for distributed AI and collaborative research.

    4. Community Marketplace:
    Developers will be able to publish and share custom agents, operators,
    or domain-specific plugins, creating an ecosystem of innovation around
    agentic tensor databases.

    We can't wait to roll out these updates and more. Whether you're an AI researcher,
    a data engineer, or a curious developer, there's a lot to look forward to
    with Tensorus in the coming months.
    `
  }
}

export default function BlogPost() {
  const router = useRouter()
  const { slug } = router.query

  const post = postsData[slug]

  if (!post) {
    return (
      <Layout>
        <div className={styles.blogContainer}>
          <h1>Post Not Found</h1>
          <p>We couldn’t find the post you’re looking for.</p>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className={styles.blogContainer}>
        <h1>{post.title}</h1>
        <small>{post.date}</small>
        <div className={styles.postContent}>
          {post.content.split('\n').map((para, idx) => (
            <p key={idx}>{para.trim()}</p>
          ))}
        </div>
      </div>
    </Layout>
  )
}
