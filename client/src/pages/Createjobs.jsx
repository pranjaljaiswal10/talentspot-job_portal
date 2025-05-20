import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const Createjobs = () => {
  const [jobData, setJobData] = useState({
    title: "",
    description: "",
    requirement: "",
    salary: "",
    location: "",
    jobType: "",
    expirenceLevel: "",
  });
  const handleChange = (e) => {
    setJobData({ [e.target.id]: e.target.value });
  };
  return (
    <form>
      <div>
        <Label htmlFor="title">title</Label>
        <Input
          value={jobData.title}
          id="title"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Input
          value={jobData.description}
          id="description"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <Label htmlFor="requirement">Requirements</Label>
        <Input
          value={jobData.title}
          id="requirement"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <Label htmlFor="salary">salary</Label>
        <Input
          value={jobData.salary}
          id="salary"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <Label htmlFor="location">Location</Label>
        <Input
          value={jobData.location}
          id="location"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <Label htmlFor="jobType">Job Type</Label>
        <Input
          value={jobData.jobType}
          id="jobType"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <Label htmlFor="expirenceLevel">Expierence Level</Label>
        <Input
          value={jobData.expirenceLevel}
          id="expirenceLevel"
          onChange={(e) => handleChange(e)}
        />
      </div>
    </form>
  );
};

export default Createjobs;
