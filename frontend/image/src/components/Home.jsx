import React from 'react'
import ImagePreview from './ImagePreview'
import ImageUpload from './ImageUpload'
import { enhancedImageAPI } from '../utils/enhanceapi'

const Home = () => {
    const [uploadedImage, setUploadedImage] = React.useState(null);
    const [enhancedImage, setEnhancedImage] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const uploadImageHandler =async (file)=>{
        //converting file to link
        setUploadedImage(URL.createObjectURL(file))
        setLoading(true)
        //calling api
        try {
            //code which may produce an error
            const enhancedURL = await enhancedImageAPI(file)
            
            setEnhancedImage(enhancedURL);
            setLoading(false);
        } catch (error) {
            //code to handle the error and also show error
            console.log(error)
            alert("Error uploading image, please try again later.")
        }

    }
  return (
    <>
        <ImageUpload uploadImageHandler={uploadImageHandler} />
        <ImagePreview loading={loading} uploadedImage={uploadedImage} enhancedImage={enhancedImage?.image} />
    </>
  )
}

export default Home
