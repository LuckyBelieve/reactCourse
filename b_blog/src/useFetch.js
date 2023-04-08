import { useEffect ,useState } from "react"
const useFetch = (url)=>{
  const [data,setData] = useState(null);
  const [isPending,setIsPending] = useState(true);
  const [error,setError] = useState(null)
  useEffect(()=>{
    // const abortCont = new AbortController();
    setTimeout(()=>{
      fetch(url)
      .then(res=>{
          if(!res.ok){
              throw Error('failed to fetch the data on that resource');
          }
          return res.json();
      })
      .then(data=>{
          setData(data);
          setIsPending(false);
          setError(null)
      })
      .catch(err=>{
          setIsPending(false);
          setError(err.message)
      })
    },500)
    // return ()=> abortCont.abort();
  },[url]);
  return {data,isPending,error};
}
export default useFetch;