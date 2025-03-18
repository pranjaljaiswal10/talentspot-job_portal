import React, { useEffect, useState } from 'react'

const useGetAllJobs = () => {
   const [jobList,setJobList]=useState(null)
   useEffect(()=>{
    async function getAllJobs() {
        try {
          const response=await fetch()  
        } catch (error) {
            console.log(error)
        }
    }    
   },[])
}

export default useGetAllJobs