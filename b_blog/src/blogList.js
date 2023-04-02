const BlogList = ({blogs}) => {
    return (
        <div className="blogs">
            {blogs.map((blog)=>(
              <div className="eachBlog" key={blog.id}>
                <h3><strong>Title:</strong> {blog.title}</h3>
                <p><strong>Author:</strong> {blog.author}</p>
              </div>
            ))}
        </div>
    );
}
 
export default BlogList;