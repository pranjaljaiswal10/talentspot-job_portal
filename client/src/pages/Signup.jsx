import {  useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { BASE_URL } from "@/utils/constant";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

const Signup = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    profilePic: "",
  });
  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }
  function handleFileChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.file[0] });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (!formData.profilePic) return;
    const form = new FormData();
    form.append("fullName", formData.fullName);
    form.append("email", formData.email);
    form.append("phoneNumber", formData.phoneNumber);
    form.append("file", formData.profilePic);
    try {
      dispatch(setLoading(true));
      const res = await fetch(`${BASE_URL}/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        credentials: "include",
        body: formData,
      });
      const json = await res.json();
      console.log(json);
      if (res.data.success) {
        navigate("/login");
        toast.success(res.message);
      }
    } catch (error) {
      console.log(error.message);
      toast(error?.message);
    } finally {
      dispatch(setLoading(false));
    }
  }
  return (
    <div className="flex justify-center items-center flex-col my-16">
      <div className="max-w-xl w-full mx-auto space-y-8 border border-gray-300 rounded-md p-4">
        <h1 className="text-xl font-bold">Sign Up</h1>
        <form
          action="/upload"
          onSubmit={(e) => handleSubmit(e)}
          className="space-y-6 "
        >
          <div className=" ">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={(e) => handleChange(e)}
              className="border-gray-400"
              placeholder="Full Name"
            />
          </div>
          <div className="space-y-3 w-full">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleChange(e)}
              className="border-gray-400"
              placeholder="Email"
            />
          </div>
          <div className="space-y-3 w-full">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              type="number"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={(e) => handleChange(e)}
              className="border-gray-400"
              placeholder="Phone Number"
            />
          </div>
          <div className="space-y-3 w-full">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) => handleChange(e)}
              className="border-gray-400"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-between items-center">
            <RadioGroup defaultValue="" className="flex">
              <div className="flex  space-x-2">
                <RadioGroupItem
                  value="student"
                  id="student"
                  className=" border-gray-400 cursor-pointer"
                />
                <Label htmlFor="student">Student</Label>
              </div>
              <div className="flex  space-x-2">
                <RadioGroupItem
                  value="recruiter"
                  id="recruiter"
                  className=" border-gray-400 cursor-pointer"
                />
                <Label htmlFor="student">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className="w-fit">
              <Input
                type="file"
                id="profilePic"
                onChange={(e) => handleFileChange(e)}
              />
            </div>
          </div>
          {loading ? (
            <Button className="w-full my-4">
              {" "}
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait{" "}
            </Button>
          ) : (
            <Button type="submit" className="cursor-pointer">SignUp</Button>
          )}
        </form>
        <p>
          Don't have an account?{" "}
          <Link to="/login" className="text-blue-500 p-2 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
