import { BASE_URL } from "@/utils/constant"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"



const Profile = () => {
  const {userDetail}=useSelector((store)=>store.user)
  const [appliedJobsList,setAppliedJobsList]=useState(null)
  useEffect(()=>{
    async function getAppliedJobsData(){
      const response = await fetch(`${BASE_URL}/application/job/applied/:id`,{credentials:"include"});
      const json=await response.json()
      setAppliedJobsList(json.data)
    }
    getAppliedJobsData()
  },[])
  return (
    <>
    </>
  )
}

export default Profile