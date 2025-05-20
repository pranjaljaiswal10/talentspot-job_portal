import { BASE_URL } from "@/utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAllCompanies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function getCompany() {
      try {
        const response = await fetch(`${BASE_URL}/companies`, {
          credentials: "include",
        });
        const json = await response.json();
      } catch (error) {
        console.log(error);
      }
    }
    getCompany();
  }, []);
};

export default useGetAllCompanies;
