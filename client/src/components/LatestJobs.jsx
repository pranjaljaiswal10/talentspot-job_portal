import { jobs } from "@/utils/constant";
import React from "react";
import LatestJobsCard from "./LatestJobsCard";

const LatestJobs = () => {
  return (
    <>
      <h3>
        <span>Latest & Top</span> Job Opening
      </h3>
      {jobs.map((job) => (
        <div>
         <LatestJobsCard {...job}/>
        </div>
      ))}
    </>
  );
};

export default LatestJobs;
