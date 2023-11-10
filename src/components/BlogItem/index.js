import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails
  return (
    <li className="each-Blog-item">
      <div className="blog-heading-published-date-container">
        <h1 className="blog-heading">{title}</h1>
        <p className="blog-published-date">{publishedDate}</p>
      </div>
      <p className="blog-description">{description}</p>
      <hr className="hr-line" />
    </li>
  )
}

export default BlogItem
