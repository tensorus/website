import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import styles from '@/styles/Blog.module.css'

const postsData = {
  'introducing-tensorus': {
    title: 'Introducing Tensorus',
    date: 'Jan 1, 2025',
    content: `
      Welcome to Tensorus! We’re excited to present the world’s first agentic tensor database...
      (Add more paragraphs or structure as needed)
    `
  },
  'vision-agentic-tensors': {
    title: 'Our Vision for Agentic Tensor Databases',
    date: 'Jan 8, 2025',
    content: `
      Tensorus is built around the idea of combining multi-dimensional data with autonomous agents...
    `
  },
  'roadmap-teaser-2025': {
    title: 'Roadmap Teaser: What’s Next for Tensorus',
    date: 'Jan 15, 2025',
    content: `
      2025 will be a big year for Tensorus. We're planning new features like advanced operator fusion...
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
            <p key={idx}>{para}</p>
          ))}
        </div>
      </div>
    </Layout>
  )
}
