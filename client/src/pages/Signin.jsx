import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BASE_URL } from "@/utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });
  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "post",
        body: formData,
      });
      const json = await response.json();
      console.log(json);
      toast(json?.message);
    } catch (error) {
      console.log(error);
      toast(error?.message);
    }
  }
  return (
    <div>
      <h1 className="text-2xl font-bold">Login</h1>
      <form onSubmit={handleSubmit}>
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
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            value={formData.password}
            onChange={(e) => handleChange(e)}
            placeholder="Password"
          />
        </div>
        <Button type="submit">login</Button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
};

export default Signin;
