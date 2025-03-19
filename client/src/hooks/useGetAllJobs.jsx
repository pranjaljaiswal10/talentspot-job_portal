import { BASE_URL } from "@/utils/constant";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAllJobs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function getAllJobs() {
      try {
        const response = await fetch(`${BASE_URL}/jobs`, {
          credentials: "include",
        });
        const json = await response.json();
      } catch (error) {
        console.log(error);
      }
    }
    getAllJobs();
  }, []);
};

export default useGetAllJobs;
