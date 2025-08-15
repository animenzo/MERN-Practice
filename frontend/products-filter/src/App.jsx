import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {items} from './items'
 
function App() {
  const filterCat = [ 'Bags', 'Watches', 'Sports','Sunglasses']
  
  const [filter,setFilter] = useState(items);
  const [filterList,setFilterList] = useState([]);
  const handleFilter = (e)=>{
    const category = e.target.id;
    if(filterList.includes(category)){
      setFilterList(filterList.filter(item=>item !== category));
      
    }else{
      setFilterList([...filterList,category]);
    }
  }
  console.log(filterList);
  
  const filteredItems =()=>{
    if(filterList.length){
      const filtered = items.filter((item)=>filterList.includes(item.category))
      setFilter(filtered)
    }else{
      setFilter(items);
    }
  }
  

  
  
 useEffect(()=>{
   filteredItems()
   
 },[filterList])
  return (
    <>
     <div className='App'>
      <div className='filters' onClick={handleFilter}>
         { filterCat.map((category,i)=>(
        <button key={i} id={category} className={filterList.includes(category) ? 'selected' : ''}>
          {category}
        </button>
      ))}
      </div>
      <div className='products'>
        
        {
          filter.map((item,i)=>(
            <div key={i} className='product'>
              <h3>{item.name}</h3>
              <p>{item.category}</p>
            </div>
          ))
        }
      </div>
     </div>
    </>
  )
}

export default App
