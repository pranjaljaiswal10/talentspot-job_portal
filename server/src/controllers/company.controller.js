import { Company } from "../models/company.model";
import  {uploadOnCloudinary, deleteFromCloudinary } from "../utils/cloudinary";

const registerCompany = async (req, res) => {
  try {
    const { companyName, description, website, location } = req.body;
    if (!req.file) {
      res.status(404).json({ success: false, message: "no file is provided" });
    }
    const result = await uploadOnCloudinary(req.file.path);
    const newCompany = new Company({
      companyName,
      description,
      website,
      location,
      logo: result.secure_url,
    });
    const savedCompany = await newCompany.save();
    res
      .status(201)
      .json({
        success: true,
        message: "New company created successfully",
        data: savedCompany,
      });
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

const getCompany = async (req, res) => {
  try {
    const userId=req.user._id;
    const company=await Company.findById(userId)
    if(!company){
   res.status(400).json({success:false,message:"No company according to user"})
    }
    res.status(200).json({success:true,data:company})
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

const getCompanyById = async (req, res) => {
  try {
    const {id}=req.params
    const company=await Company.findById(id)
    res.status(200).json({success:true,data:company})
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

const updateCompany = async (req, res) => {
  try {
    const {id}=req.params
    const {companyName,description,website,location}=req.body;
    const company=await Company.findById(id)
    //todo:get publicid from secure_url

    const publicId=""
    if(req.file){
      const deleteFile=await deleteFromCloudinary(publicId)
      console.log(deleteFile)
      const res=await uploadOnCloudinary(req.file.path)
    }
  const updatedData={co}
    const updatedComapny=await Company.findByIdAndUpdate(id,{$set:updatedData},{new:true})
   res.status(200).json({success:true,message:"Company updated successfully",data:updateCompany})
    
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

export {registerCompany,getCompany,getCompanyById,updateCompany}
