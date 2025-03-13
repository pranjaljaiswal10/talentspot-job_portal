import { Job } from "../models/job.model";

const postNewJobs = async (req, res) => {
  try {
    const {
      title,
      description,
      salary,
      location,
      jobType,
      expierenceLevel,
      position,
    } = req.body;
    if (
      [title, salary, location, jobType, expierenceLevel, position].forEach(
        (item) => item.trim == ""
      )
    ) {
      res
        .status(400)
        .json({
          succes: false,
          message: "all field is required except description",
        });
    }
    const newJobs = new Job({
      title,
      description,
      salary:Number(salary),
      location,
      jobType,
      expierenceLevel,
      position,
    });
    const savedJobs = await newJobs.save();
    res
      .status(201)
      .json({ success: true, message: "new job is created", data: savedJobs });
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

const getAllJobs = async (req, res) => {
  try {
    const job = await Job.find({});
    res.status(200).json({ success: true, data: job });
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

const getJobsbyId = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findById(id);
    if (!job) {
      res
        .status(404)
        .json({ success: false, message: "jobs not found with this id" });
    }
    res.status(200).json({ success: true, data: job });
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

export { postNewJobs, getAllJobs, getJobsbyId };
