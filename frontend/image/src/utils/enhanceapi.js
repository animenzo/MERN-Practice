import axios from "axios";

const BASE_URL = "https://techhk.aoscdn.com";
const API_KEY = 'wxyj8kre8skrwuh6l';
console.log("API key loaded:", API_KEY);
export const enhancedImageAPI = async (file) => {
    try {
        const taskId = await uploadImage(file);
        console.log("task id:", taskId);

        const enhancedImageURL = await PollForEnhancedImage(taskId);
        console.log("enhanced data:", enhancedImageURL);

        return enhancedImageURL;
    } catch (error) {
        console.error("Enhancing API call problem:", error);
    }
};

const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image_file", file);

    const { data } = await axios.post(`${BASE_URL}/api/tasks/visual/scale`, formData, {
        headers: {
           
            "X-API-KEY":API_KEY
        }
    });

    if (!data?.data?.task_id) {
        throw new Error("Task ID not found in response");
    }
    return data.data.task_id;
};

const fetchEnhancedImage = async (taskId) => {
    const { data } = await axios.get(`${BASE_URL}/api/tasks/visual/scale/${taskId}`, {
        headers: {
            "X-API-KEY":API_KEY
        }
    });

    if (!data?.data) {
        throw new Error("Enhanced image not found in response");
    }
    return data.data;
};

const PollForEnhancedImage = async (taskId, retries = 0) => {
    const result = await fetchEnhancedImage(taskId);

    // Check status (adjust based on API docs)
    if (result.state !== 1) { // Assuming 1 = success
        console.log("processing...");
        if (retries >= 5) {
            throw new Error("Max retries reached. Image enhancement failed. Try again later.");
        }
        await new Promise(resolve => setTimeout(resolve, 2000));
        return PollForEnhancedImage(taskId, retries + 1);
    }

    console.log("Image enhanced successfully", result);
    return result;
};
