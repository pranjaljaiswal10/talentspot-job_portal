import AdminJobsTable from "@/components/AdminJobsTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useGetAllAdminJobs from "@/hooks/useGetAllAdminJobs";
import { setSearchQuery } from "@/redux/jobsSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminJobs = () => {
  useGetAllAdminJobs();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch=useDispatch()
  useEffect(()=>{
  dispatch(setSearchQuery(input))
  },[input])
  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="flex items-center justify-between my-5">
        <Input
          type="text"
          className="w-fit "
          placeholder="filter by name,role"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={() => navigate("/admin/jobs/create")}>New Jobs</Button>
      </div>
      <AdminJobsTable/>
    </div>
  );
};

export default AdminJobs;
