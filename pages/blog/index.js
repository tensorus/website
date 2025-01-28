import Layout from '@/components/Layout'
import Link from 'next/link'
import styles from '@/styles/Blog.module.css'

const posts = [
  {
    slug: 'introducing-tensorus',
    title: 'Introducing Tensorus',
    date: 'Jan 1, 2025',
    excerpt: 'Meet the world’s first agentic tensor database, designed to power next-gen AI...'
  },
  {
    slug: 'vision-agentic-tensors',
    title: 'Our Vision for Agentic Tensor Databases',
    date: 'Jan 8, 2025',
    excerpt: 'Discover how Tensorus combines multi-dimensional data, agent orchestration, and AI...'
  },
  {
    slug: 'roadmap-teaser-2025',
    title: 'Roadmap Teaser: What’s Next for Tensorus',
    date: 'Jan 15, 2025',
    excerpt: 'We share our exciting plans for operator fusion, agent updates, and more in 2025...'
  }
]

export default function BlogIndex() {
  return (
    <Layout>
      <section className={styles.blogContainer}>
        <h1>Tensorus Blog</h1>
        <p>Weekly updates on agentic tensor databases, AI workflows, and more!</p>

        <div className={styles.postList}>
          {posts.map(post => (
            <div key={post.slug} className={styles.postItem}>
              <h2>
                <Link href={`/blog/${post.slug}`} legacyBehavior>
                  <a>{post.title}</a>
                </Link>
              </h2>
              <small>{post.date}</small>
              <p>{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} legacyBehavior>
                <a className={styles.readMore}>Read More</a>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
