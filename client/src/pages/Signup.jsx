import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@/components/ui/radio-group";
import { BASE_URL } from "@/utils/constant";
import { toast } from "sonner";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) return;
    const form = new FormData();
    form.append("fullName", formData.fullName);
    form.append("email", formData.email);
    form.append("phoneNumber", formData.phoneNumber);
    form.append("file", file);
    try {
      const res = await fetch(`${BASE_URL}/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        credentials: "include",
        body: formData,
      });
      const json=await res.json()
      console.log(json) 
      toast(json?.message) 
    } catch (error) {
      console.log(error.message);
      toast(error?.message)
    }
  }
  return (
    <div>
      <h1 className="tex-2xl font-bold">Sign Up</h1>
      <form
        action="/upload"
        onSubmit={(e) => handleSubmit(e)}
        className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
      >
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            type="text"
            id="fullName"
            value={formData.fullName}
            onChange={(e) => handleChange(e)}
            placeholder="Full Name"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => handleChange(e)}
            placeholder="Email"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input
            type="number"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={(e) => handleChange(e)}
            placeholder="Phone Number"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            value={formData.password}
            onChange={(e) => handleChange(e)}
            placeholder="Password"
          />
        </div>
        <div className="flex items-center">
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <Input type="radio" name="role" className="cursor-pointer" />
              <Label htmlFor="r1">Student</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Input type="radio" name="role" className="cursor-pointer" />
              <Label htmlFor="">Recruiter</Label>
            </div>
          </RadioGroup>
        </div>
        <div>
        <Input type="file" name="profilPic" onChange={(e)=>handleChange(e)}/>
        </div>
      </form>
    </div>
  );
};

export default Signup;
