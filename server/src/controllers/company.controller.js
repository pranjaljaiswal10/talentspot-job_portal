import { Company } from "../models/company.model.js";
import {
  uploadOnCloudinary,
} from "../utils/cloudinary.js";

const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;
    if(!companyName){
      res.status(400).json({success:false,error:"Company name is required"})
    }
    const recruiter = req.user._id;
    const newCompany = new Company({
      companyName,
      recruiter,
    });
    const savedCompany = await newCompany.save();
    res.status(201).json({
      success: true,
      message: "New company created successfully",
      data: savedCompany,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: error.message });
  }
};

const getCompany = async (req, res) => {
  try {
    const userId = req.user._id;
    console.log(userId)
    const company = await Company.find({recruiter:userId})
    if (!company) {
      res
        .status(400)
        .json({ success: false, error: "No company according to user" });
    }
    res.status(200).json({ success: true, data: company });
  } catch (error) {
    console.log(error);
    res.status(500).json({ sucess: false, error: error.message });
  }
};

const getCompanyById = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Company.findById(id);
    res.status(200).json({ success: true, data: company });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: error.message });
  }
};

const updateCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const { companyName, description, website, location } = req.body;
    const logoLocalPath=req.file?.path;
    let result
    if(logoLocalPath){
     result=await uploadOnCloudinary(logoLocalPath)
    }
    const updatedData = {
      companyName,
      description,
      location,
      website,
    };
    if(result) updatedData.logo=result?.secure_url

    const updatedCompany = await Company.findByIdAndUpdate(
      id,
      { $set: updatedData },
      { new: true },
    );
    res
      .status(200)
      .json({
        success: true,
        message: "Company updated successfully",
        data: updatedCompany,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: error.message });
  }
};

export { registerCompany, getCompany, getCompanyById, updateCompany };
