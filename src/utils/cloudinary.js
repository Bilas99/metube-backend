import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";

// cloudinary configuration
cloudinary.config({ 
   cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
   api_key: process.env.CLOUDINARY_API_KEY,
   api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (filePath) => {
   try{
      if(!filePath) return null
      
      // upload the file on cloudinary
      const response = await cloudinary.uploader.upload(filePath, {
         resource_type: "auto"
      })
      
      // file uploaded successfull
      console.log("File has been uploaded successfully!!! ", response.url)
      return response
   } catch (err) {
      fs.unlinkSync(filePath) //remove the localy saved file if upload operation got failed
      return null
   }
}

export {uploadOnCloudinary}