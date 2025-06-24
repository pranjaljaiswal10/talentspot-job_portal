import { Job } from "../models/job.model.js";

const postNewJobs = async (req, res) => {
  try {
    const {
      title,
      description,
      salary,
      location,
      category,
      expierence,
      companyId,
    } = req.body;
    if (
      [
        title,
        description,
        salary,
        location,
        category,
        expierence,
        companyId,
      ].forEach((item) => item.trim == "")
    ) {
      res.status(400).json({
        succes: false,
        message: "all field is required except description",
      });
    }
    const newJobs = new Job({
      title,
      description,
      salary: Number(salary),
      location,
      category,
      expierence,
      company: companyId,
      created_By: req.user._id,
    });
    const savedJobs = await newJobs.save();
    res
      .status(201)
      .json({ success: true, message: "new job is created", data: savedJobs });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: error.message });
  }
};

const getAdminJobs = async (req, res) => {
  try {
    const recruiterId = req.user._id;
    const job = await Job.find({ created_By: recruiterId })
      .populate("companyId")
      .sort({ createdAt: -1 });
    if (!job) {
      res
        .status(404)
        .json({ success: false, message: "No job exist with this userId" });
    }
    res.status(200).json({ success: true, data: job });
  } catch (error) {
    console.log(error);
    res.status(500).json({ succcess: false, error: error.message });
  }
};

const getStudentJobs = async (req, res) => {
  try {
    const { keyword } = req.query;
    const query = {
      $or: [
        { title: { $regex: `${keyword}`, $options: "i" } },
        { description: { $regex: `${keyword}`, $options: "i" } },
      ],
    };
    const job = await Job.find(query)
      .populate("company")
      .sort({ createdAt: -1 });
    if (!job) {
      res
        .status(404)
        .json({ success: false, message: "Jobs not found with this keyword" });
    }
    res.status(200).json({ success: true, data: job });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: error.message });
  }
};

const getJobsbyId = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findById(id).populate("applicant");
    if (!job) {
      res
        .status(404)
        .json({ success: false, message: "Jobs not found with this id" });
    }
    res.status(200).json({ success: true, data: job });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: error.message });
  }
};

export { postNewJobs, getStudentJobs, getAdminJobs, getJobsbyId };
