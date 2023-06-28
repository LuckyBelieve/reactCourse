import { useState } from "react";
import { useHistory } from "react-router-dom";
const CreateNew = () => {
    const [title,seTitle] = useState('')
    const [author,setAuthor] = useState('')
    const [body,setBoby] = useState('')
    const [isPending,setIsPending] = useState(false)
    const history = useHistory()
    const handleSubmit = (e)=>{
        e.preventDefault();
        const blog = {author,title,body};
        setIsPending(true);
      fetch('http://localhost:5000/blogs',{
        method:'POST',
        headers:{"content-type":"application/json"},
        body:JSON.stringify(blog)
      })
      .then(()=>{
        console.log('new blog added');
        setIsPending(false); 
        history.push('/');
      })
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Add a new blog </h2>
            <label><strong>author:</strong></label>
            <input 
            type="text"
            required
            value={author}
            onChange={(e)=>setAuthor(e.target.value)}
            />

            <label><strong>blog title:</strong></label>
            <input 
            type="text"
            required
            value={title}
            onChange={(e)=>seTitle(e.target.value)}
            />
            <label><strong>blog body:</strong></label>
            <textarea 
            required
            value={body}
            onChange={(e)=>setBoby(e.target.value)}
            ></textarea>
            {!isPending && <button>Add blog</button>}
            {isPending && <button>Adding blog ...</button>}
             
        </form>
    );
}
 
export default CreateNew;