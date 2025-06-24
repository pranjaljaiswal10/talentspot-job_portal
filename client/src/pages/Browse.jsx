import BrowseJobs from "@/components/BrowseJobs";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import { setSearchQuery } from "@/redux/jobsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const Browse = () => {
  useGetAllJobs();
  const { allJobs } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(setSearchQuery(""));
    };
  }, []);
  return (
    <div className="max-w-7xl mx-auto my-10">
      <h1 className="font-bold text-xl my-10">
        {" "}
        Search Results ({allJobs.length})
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {allJobs.map((job) => (
          <BrowseJobs key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Browse;
