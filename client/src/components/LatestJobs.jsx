import { jobs } from "@/utils/constant";
import React from "react";
import LatestJobsCard from "./LatestJobsCard";
import { useSelector } from "react-redux";

const LatestJobs = () => {
  const { allJobs } = useSelector((store) => store.job);
  return (
    <div className="max-w-7xl mx-auto my-20">
      <h3 className="text-4xl font-bold">
        <span>Latest & Top</span> Job Opening
      </h3>
      <div className="grid grid-cols-3 gap-4 my-5">
      {jobs.map((job) => (
          jobs?.length < 0 ? (
            <span>No jobs available</span>
          ) : (
            <LatestJobsCard {...job} />
          )
        ))}
        </div>
    </div>
  );
};

export default LatestJobs;
