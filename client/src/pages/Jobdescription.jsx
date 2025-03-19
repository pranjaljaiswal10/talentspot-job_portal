import { BASE_URL } from "@/utils/constant"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"


const Jobdescription = () => {
  const {id}=useParams()
  const dispatch=useDispatch()
  const {singleJob}=useSelector((store)=>store.job)
  useEffect(()=>{
   async function getDescription() {
     const response=await fetch(`${BASE_URL}/job/${id}`,{method:"post"})
     const json=await response.json()
     dispatch(json.data)
   }
   getDescription()
  },[id])
  return (
   <>
   <h1>{singleJob.title}</h1>
   
   </>
  )
}

export default Jobdescription