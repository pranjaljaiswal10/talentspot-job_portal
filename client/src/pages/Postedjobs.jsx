import Filter from "@/components/Filter"
import JobCard from "@/components/JobCard"
import { useSelector } from "react-redux"


const PostedJobs = () => {
  const {allJobs}=useSelector((store)=>store.job)

  return (
    <>
   <Filter/>
   {
    allJobs.map((item)=>(
      <JobCard job={item}/>
    ))
   }
    </>
  )
}

export default PostedJobs