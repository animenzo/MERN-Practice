import React from 'react'

const ImageUpload = (props) => {

    const showHandler =(e)=>{
       const file =  e.target.files[0];
       console.log(file)
       if(file){
        props.uploadImageHandler(file);
       }
    }

  return (
    <div className='bg-white p-2 max-w-2xl shadow-lg rounded-2xl w-[60%] my-5 items-center justify-center flex  text-black'>
      <label htmlFor="fileInput" className='block w-full cursor-pointer border-dashed border-gray-300 rounded-xl border-2 text-center hover:border-gray-400 font-bold transition-all'>
        <input type="file" id='fileInput' className='hidden' onChange={(e)=>showHandler(e)} />
        <span className='text-lg'>Click or Drag to upload</span></label>
      
      
    </div>
  )
}

export default ImageUpload
