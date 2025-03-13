import { BASE_URL } from "@/utils/constant"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const Jobdescription = () => {
  const {id}=useParams()
  const [desciption,setDescription]=useState()
  useEffect(()=>{
   async function getDescription() {
     const response=await fetch(`${BASE_URL}`,{method:"post"})
     const json=await response.json()
     setDescription(json.data)
   }
   getDescription()
  },[])
  return (
   <>

   </>
  )
}

export default Jobdescription