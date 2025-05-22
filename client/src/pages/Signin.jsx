import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { setLoading, setUser } from "@/redux/authSlice";
import { BASE_URL } from "@/utils/constant";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Signin = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.auth);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });
  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }
  function handleRadioButton() {}
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      dispatch(setLoading(true))
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "post",
        body: formData,
      });
      const json = await response.json();
      console.log(json);
      if(json.success===true){
        dispatch(setUser(json.data))
        toast(json?.message);
      }
    } catch (error) {
      console.log(error);
      toast(error?.message);
    }finally{
      dispatch(setLoading(false))
    }
  }
  return (
    <div className="h-[650px] flex justify-center items-center flex-col ">
      <div className="max-w-xl w-full mx-auto space-y-8 border border-gray-300 rounded-md p-4">
        <h1 className="text-2xl font-bold">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-6 ">
          <div className="w-full space-y-3">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleChange(e)}
              placeholder="Email"
            />
          </div>
          <div className=" w-full space-y-3">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) => handleChange(e)}
              placeholder="Password"
            />
          </div>
          <RadioGroup
            defaultValue=""
            onValueChange={() => handleRadioButton}
            className="flex"
          >
            <div className="flex  space-x-2">
              <RadioGroupItem
                value="student"
                className="text-gray-600"
                id="student"
              />
              <Label htmlFor="student">Student</Label>
            </div>
            <div className="flex  space-x-2">
              <RadioGroupItem value="recruiter" id="recruiter" />
              <Label htmlFor="student">Recruiter</Label>
            </div>
          </RadioGroup>
          {loading ? (
            <Button className="w-full my-4">
              {" "}
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait{" "}
            </Button>
          ) : (
            <Button type="submit" className="my-4 w-full">
              login
            </Button>
          )}
        </form>
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 p-2 hover:underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
