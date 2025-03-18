import { jobs } from "@/utils/constant";
import React from "react";

const LatestJobs = () => {
  return (
    <>
      <h3>
        <span>Latest & Top</span> Job Opening
      </h3>
      {jobs.map((job) => (
        <div>
          <ul>
            <li>{job.company}</li>
            <li>{job.location}</li>
            <li>{job.position}</li>
            <li>{job.description}</li>
            <li>
              <ul>
                <li>{job.details.positions}</li>
                <li>{job.details.type}</li>
                <li>{job.details.salary}</li>
              </ul>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
};

export default LatestJobs;
