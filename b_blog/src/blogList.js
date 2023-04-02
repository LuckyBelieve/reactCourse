const BlogList = ({blogs}) => {
    return (
        <div className="blogs">
            {blogs.map((blog)=>(
              <div className="eachBlog" key={blog.id}>
                <div className="description">
                <h3><strong>Title:</strong> {blog.title}</h3>
                <p><strong>Author:</strong> {blog.author}</p>
                </div>
                <div className="buttons">
                  <button>Delete</button>
                  <button>More Details</button>
                </div>
              </div>
            ))}
        </div>
    );
}
 
export default BlogList;