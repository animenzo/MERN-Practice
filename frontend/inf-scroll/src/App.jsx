import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useCallback } from 'react'
//https://jsonplaceholder.typicode.com/photos?_page=${index}&_limit=9
function App() {
  const loaderRef = useRef(null)
  const [images,setImages] = useState([])
  const [loading,setLoading] = useState(false)
  const [page,setPage] = useState(2)
//first step data ko ftch kra aur store kiya
 const fetchImages =async (index)=>{
   try {
    const url = `https://jsonplaceholder.typicode.com/photos?_page=${index}&_limit=9`
    console.log(url);
    
    const result = await fetch(url)
    const data = await result.json()
    return data;

  } catch (error) {
    console.log("error:",error);
    
  }
 }

 const getData = useCallback(async()=>{
  if(loading) return;
  setLoading(true)
  const data = await fetchImages(page)
  setImages((prevImages)=>[...prevImages,...data])
  setPage((prevPage)=>prevPage+1)
  setTimeout(()=>{
    setLoading(false)
  },2000)
 },[page,loading])
 
  useEffect(()=>{
    const observer = new IntersectionObserver((entries)=>{
      const target = entries[0]
      if(target.isIntersecting){
        //cals next page
        getData()
      }
    })
    if(loaderRef.current){
      observer.observe(loaderRef.current)
    }

    return ()=>{
      if(loaderRef.current){
        observer.unobserve(loaderRef.current)
      }
    }
  },[getData])


 //data ko first page pr hi dikhya
 const fetchFirstPage = async()=>{
  const data = await fetchImages(1)
  setImages(data)
 }

 useEffect(()=>{
   fetchFirstPage()
 },[])


  return (
    <>
      <div>
        <div>
         {
          images?.map((image)=>(
            <img key={image.id}  src={image.thumbnailUrl} alt={image.title} />
          ))
         }
        </div>
        <div ref={loaderRef}>
          {
            loading && <h2>Loading...</h2>
          }
        </div>
      </div>
    </>
  )
}

export default App
