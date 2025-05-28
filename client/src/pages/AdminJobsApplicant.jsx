import ApplicantTable from "@/components/ApplicantTable";
import { setApplicant } from "@/redux/appliantSlice";
import { BASE_URL } from "@/utils/constant";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";




const AdminJobsApplicant = () => {
  const {id}=useParams()
  const dispatch=useDispatch()
  const {allApplicant}=useSelector((store)=>store.application)
  const {data}=useQuery({
    queryKey:["applicant"],
    queryFn:async ()=>{
      const response=await fetch(`${BASE_URL}/${id}`,{
       credentials:"include"
      })
      return response.json()
    }
  })
  dispatch(setApplicant(data))
  return (
   <div>
    <h1 className="">Applicants {allApplicant?.data.length}</h1>
    <ApplicantTable/>
   </div>
    
  );
};

export default AdminJobsApplicant;
