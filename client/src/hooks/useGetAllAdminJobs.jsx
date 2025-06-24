import { setAdminJobs } from "@/redux/jobsSlice"
import { BASE_URL } from "@/utils/constant"
import { useEffect } from "react"
import { useDispatch } from "react-redux"


const useGetAllAdminJobs = () => {
    const dispatch=useDispatch()
    useEffect(()=>{
    async function  getAdminJobs() {
      try {
        const response=await fetch(`${BASE_URL}`)
        const json=await response.json()
        dispatch(setAdminJobs(json))
      } catch (error) {
        console.log(error)
      }
    }
    getAdminJobs()
    },[])
}

export default useGetAllAdminJobs