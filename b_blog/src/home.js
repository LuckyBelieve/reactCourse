import useFetch from './useFetch';
import BlogList from './blogList';
const Home = () => {
 const {data:blogs,isPending,error} = useFetch('http://localhost:5000/blogs')
 console.log(blogs);
    return (
        <div className="mainContainer">
            {error && <div>{error}</div>}
            {isPending && <div><h3>Loading ...</h3></div>}
            {blogs && <BlogList blogs={blogs}/>}
        </div>
    );
}
 
export default Home;