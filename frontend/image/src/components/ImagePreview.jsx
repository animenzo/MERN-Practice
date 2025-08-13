import React from 'react'
import Loading from './Loading'

const ImagePreview = (props) => {
    console.log("ImagePreview props: ", props.enhancedImage);
    
  return (
    <div className='mt-3 mb-10 grid grid-cols-2 gap-4 w-full max-w-4xl max-h-[70vh]'>
        <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
            <h2 className='text-xl font-semibold text-center bg-gray-600  text-white py-2'>Original Image</h2>
            {props.uploadedImage ?( <img src={props.uploadedImage} alt="" className='object-cover w-full h-full'/>) :( <div className='flex items-center justify-center h-80 bg-gray-200 '>
                No image uploaded yet
            </div>) }
           
           
        </div>

         <div className='bg-white shadow-lg rounded-xl overflow-hidden '>
            <h2 className='text-xl font-semibold text-center bg-gray-600  text-white py-2'>Enhanced Image</h2>

            {props.enhancedImage && !props.loading &&( 
                <img src={props.enhancedImage} alt="" className='object-cover w-full h-full'/>)}

            {props.loading ? (<Loading/>):(<div className='flex items-center justify-center h-80 bg-gray-200 '>
                No image enhanced yet
            </div>)}
           
            
        </div>
        <a href={props.enhancedImage} download="enhanced.jpg">
  <button className='cursor-pointer bg-blue-500 rounded-2xl p-2 hover:bg-blue-700'>Download Image</button>
</a>
      
    </div>
  )
}

export default ImagePreview
