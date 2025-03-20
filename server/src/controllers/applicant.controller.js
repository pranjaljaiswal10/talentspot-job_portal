import { Application } from "../models/application.model";
import { Job } from "../models/job.model";

//desciption
const applyJob = async (req, res) => {
  try {
    const userId = req.user._id;
    const jobId = req.params.id;
    const existingApplication = await Application.find({
      applicant: userId,
      job: jobId,
    });
    if (existingApplication) {
      res
        .status(400)
        .json({ success: false, message: "User is already applied" });
    }
    const findJobs = await Job.findById(jobId);
    if (!findJobs) {
      res.status(404).json({ success: false, message: "Jobs doesn't exist" });
    }
    const newApplication = await Application.create({
      applicant: userId,
      job: jobId,
    });
    res.status(201).json({
      success: false,
      message: "Job applied successfully",
      json: newApplication,
    });
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

//profile
const getAppliedJob = async (req, res) => {
  try {
    const userId = req.user._id;
    const applicant = await Application.find({ userId }).populate({
      path: "Job",
      options: {
        sort: {
          createdAt: -1,
        },
      },
      poulate: {
        path: "Company",
        options: {
          sort: {
            createdAt: -1,
          },
        },
      },
    });
    if (!applicant) {
      res
        .status(404)
        .json({ success: false, message: "User not applied any job" });
    }
    res.status(200).json({ success: true, data: applicant });
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

//foradmin
const getApplicant = async (req, res) => {
  try {
    const jobId = req.query.id;
    const job = await Job.find({ job: jobId }).populate({
      path: "Application",
      options: {
        sort: {
          createdAt: -1,
        },
      },
      populate: {
        path: "applicant",
        options: {
          sort: {
            createdAt: -1,
          },
        },
      },
    });
    if (!job) {
      res.status(400).json({
        success: false,
        message: "No applicant for this job",
        data: job,
      });
    }
    res.status(200).json({ success: true, data: job });
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

//
const updateStatus = async (req, res) => {
  try {
    const { applied } = req.query;
    const { id } = req.params;
    const application = await Application.findByIdAndUpdate(
      id,
      { $set: { status: !applied } },
      { new: true },
    );
    res.status(200).json({
      success: true,
      message: "Status update successfully",
      data: application,
    });
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

export { applyJob, getAppliedJob, getApplicant, updateStatus };
