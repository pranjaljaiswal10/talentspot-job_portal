import { Company } from "../models/company.model.js";
import {
  uploadOnCloudinary,
  deleteFromCloudinary,
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
    const company = await Company.findById(userId);
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
    const company = await Company.findById(id);
    if (req.file) {
    }
    const result = await uploadOnCloudinary(req.file.path);
    const updatedData = {
      companyName,
      description,
      location,
      website,
      logo: result.secure_url,
    };
    const updatedComapny = await Company.findByIdAndUpdate(
      id,
      { $set: updatedData },
      { new: true },
    );
    res
      .status(200)
      .json({
        success: true,
        message: "Company updated successfully",
        data: updateCompany,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: false, error: error.message });
  }
};

export { registerCompany, getCompany, getCompanyById, updateCompany };
