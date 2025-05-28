import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BASE_URL } from "@/utils/constant";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Createjobs = () => {
  const [jobData, setJobData] = useState({
    title: "",
    description: "",
    requirement: "",
    salary: "",
    location: "",
    jobType: "",
    expirenceLevel: "",
    postion: "",
  });
  const {data}=useQuery({
    queryKey:["jobs"],
    queryFn:async ()=>{
      const response=await fetch(`${BASE_URL}/companies`)
      return response.json()
    }
  })
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setJobData({ [e.target.id]: e.target.value });
  };
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}/jobs`, {
        method: "POST",
        body: JSON.stringify(jobData),
        headers: {
          "Content-Type": "application/data",
        },
        credentials: "include",
      });
      const json = await response.json();
      console.log(json);
      if (json.success) {
        toast.success(json.message);
        navigate("/admin/jobs");
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    } finally {
      setIsLoading(true);
    }
  }
  return (
    <div className="flex justify-center items-center w-screen my-5">
      <form
        onSubmit={handleSubmit}
        className="p-8 max-w-4xl-border border-gray-200  shadow-lg rounded-md"
      >
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="title">Title</Label>
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
              className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <Label htmlFor="requirement">Requirements</Label>
            <Input
              value={jobData.title}
              id="requirement"
              className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <Label htmlFor="salary">Salary</Label>
            <Input
              value={jobData.salary}
              id="salary"
              className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              value={jobData.location}
              id="location"
              className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <Label htmlFor="jobType">Job Type</Label>
            <Input
              value={jobData.jobType}
              id="jobType"
              className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <Label htmlFor="expirenceLevel">Expierence Level</Label>
            <Input
              value={jobData.expirenceLevel}
              id="expirenceLevel"
              className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <Label>No. of postion</Label>
            <Input
              type="number"
              id="position"
              className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              value={jobData.postion}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        //todo:select input
        {isLoading ? (
          <Button className="w-full my-4">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          </Button>
        ) : (
          <Button type="submit" className="w-full my-4">
            Post new Job
          </Button>
        )}
      </form>
    </div>
  );
};

export default Createjobs;
