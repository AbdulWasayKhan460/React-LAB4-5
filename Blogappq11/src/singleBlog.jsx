import { useParams, useNavigate } from 'react-router-dom'
import { blogs } from './data'

const SingleBlog = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const blog = blogs.find((b) => b.id === parseInt(id))

  if (!blog) return <h2>Blog not found</h2>

  return (
    <div className="single-container">
      <div className="single-card">

        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <h1>{blog.title}</h1>
        <p>{blog.content}</p>

      </div>
    </div>
  )
}

export default SingleBlog
