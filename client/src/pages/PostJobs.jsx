import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const PostJobs = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirments: "",
    salary: "",
    location: "",
    jobType: "",
    expierence: "",
    postion: 0,
    companyId: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  //TODO:add company state
  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };
  //TODO:
  const handleSelectChange = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setLoading(true);
    } catch (error) {
      toast.error();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center my-5">
      <form onSubmit={handleSubmit} className="">
        <div>
          <Label>Title</Label>
          <Input
            type="text"
            id="title"
            value={input.title}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <Label>Title</Label>
          <Input
            type="text"
            id="title"
            value={input.title}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <Label>Title</Label>
          <Input
            type="text"
            id="title"
            value={input.title}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <Label>Title</Label>
          <Input
            type="text"
            id="title"
            value={input.title}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <Label>Title</Label>
          <Input
            type="text"
            id="title"
            value={input.title}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <Label>Title</Label>
          <Input
            type="text"
            id="title"
            value={input.title}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <Label>Title</Label>
          <Input
            type="text"
            id="title"
            value={input.title}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <Label>Title</Label>
          <Input
            type="text"
            id="title"
            value={input.title}
            onChange={(e) => handleChange(e)}
          />
        </div>
        //TODO:add company list select input
        <Select onValueChange={handleSelectChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a Company" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>{}</SelectGroup>
          </SelectContent>
        </Select>
        {loading ? (
          <Button className="w-full my-4">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button>
        ) : (
          <Button type="submit" className="w-full my-4">
            Post new job
          </Button>
        )}
      </form>
    </div>
  );
};

export default PostJobs;
