const BASE_URL = "https://techhk.aoscdn.com/"
export const enhancedImageAPI = async(file)=>{
//code to call api
try {
    
    
    const taskId = await uploadImage(file);
    console.log(taskId);
    

    const enhancedImageURL = await fetchEnhancedImage(taskId);
    console.log(enhancedImageURL);
    
    //return enhancedImageURL;

} catch (error) {
    console.log("enhancing api calll me propblem",error)
}
}

const uploadImage = async(file)=>{

//code to uplaod image - post api
const formData = new FormData();
formData.append('image_file', file);
 const {data}  =  await axios.post(`${BASE_URL}/api/tasks/visual/scale`,
    formData,{
    headers:{
        "Content-Type":"multipart/form-data",
        "X-API-KEY":import.meta.env.VITE_API_KEY
    }
   });
   // 1.08.59
   return taskId;
}

const fetchEnhancedImage = async(taskId)=>{
        //fetch enhanced image - get api
    // /api/tasks/visual/scale/{task_id}
}