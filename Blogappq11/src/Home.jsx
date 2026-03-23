import { Link } from 'react-router-dom'
import { blogs } from './data' 
const Home = () => {
  return (
    <div className="container">
      <h1 className="heading">Blog App</h1>

      <div className="blog-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="card">
            <h2>{blog.title}</h2>
            <p>{blog.content.substring(0, 60)}...</p>

            <Link to={`/post/${blog.id}`}>
              <button className="read-btn">Read More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Home