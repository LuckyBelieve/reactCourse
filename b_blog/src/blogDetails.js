import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";
const BlogDetails = () => {
    const { id } = useParams()
    const history = useHistory()
    const {data:blog,isPending,error} = useFetch('http://localhost:5000/blogs/'+id);
    const handleClick = ()=>{
        fetch('http://localhost:5000/blogs/'+blog.id,{
          method:'DELETE'
        }).then(()=>{
         history.push('/');
        })
      }
    return (
        <div className="blogDetails">
            {error && <h1>{error}</h1>}
            {isPending && <h2>Loading....</h2>}
            {blog && (
                <div className="mainDetails">
                    <h1>{blog.title}</h1>
                    <h4>written by {blog.author}</h4>
                    <p>{blog.body}</p>
                    <button onClick={handleClick}>Delete</button>
                </div>
            )}
            {/* <h1>wtf is happening here {id}</h1> */}
        </div>
    );
}
 
export default BlogDetails;