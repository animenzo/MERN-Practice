import { useEffect, useState } from 'react'

import './App.css'

function App() {

  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const fetchProducts = async ()=>{
    const res = await fetch('https://dummyjson.com/products')

    const data = await res.json()
    
    if(data && data.products){
      setProducts(data.products)
    }
  }

  const selectPage = (pageNum)=>{
    if(pageNum>=1 && pageNum<=products.length/5 && pageNum!==page){
      setPage(pageNum)
      
    }
    
  }
  
  useEffect(()=>{
    fetchProducts()
  },[page])

  return (
  <>
    {
      products.length>0 &&
     (
      <div className='products'>
        
        {
          products.slice(page*5-5,page*5).map((prod)=>{
            return (
              <div className='product' key={prod.id}>
                <img src={prod.thumbnail} alt={prod.title} />
                <h2>{prod.title}</h2>
               
                <p>{prod.description}</p>
                <p>Price: ${prod.price}</p>
              </div>
            )
          })
        }
      </div>
     )
    }
    {
      products.length>0 &&(
      <div className='pagination'>
        <button className={page>1 ?"":"pageDisable"} onClick={()=>selectPage(page-1)} >Prev</button>
        {
          [...Array(products.length/5)].map((_,i)=>(
            <button className={page===i+1?'pageActive ':' '}
              key={i} 
           
              onClick={()=>selectPage(i+1)}
            >
              {i+1}
            </button>
          ))
        }
      <button onClick={()=>selectPage(page+1)} className={page<products.length/5?"":"pageDisable"}>Next</button>
      </div>
      )
    }
  </>
  )
}

export default App
