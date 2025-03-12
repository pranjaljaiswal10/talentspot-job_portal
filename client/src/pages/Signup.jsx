import { useState } from "react"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"

const Signup = () => {
  const [formData,setFormData]=useState({
    fullName:"",email:"",phoneNumber:"",password:""
  })
  function handleSubmit(e){
   setFormData({...formData,[e.target.id]:e.target.value})
  }
  return (
    <form action="/upload" onSubmit={(e) => handleSubmit(e)}>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="fullName">Full Name</Label>
        <Input type="text" id="fullName" placeholder="Full Name" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="phoneNumber">Phone Number</Label>
        <Input type="number" id="phone Number" placeholder="Phone Number" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor=""></Label>
        <Input type="" id="" placeholder="" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor=""></Label>
        <Input type="" id="" placeholder="" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor=""></Label>
        <Input type="" id="" placeholder="" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor=""></Label>
        <Input type="" id="" placeholder="" />
      </div>
    </form>
  );
}

export default Signup