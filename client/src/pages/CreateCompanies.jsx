import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateCompanies = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [companyName, setCompanyName] = useState("");
  const handleChange = (e) => {
    setCompanyName(e.target.value);
  };
  
 
  return (
    <div>
      <h1 className="font-bold text-2xl">Your Company Name</h1>
      <p className="text-gray-500">
        What would you like to give your company name?you can change this later
      </p>
      <div>
        <Label htmlFor="companyName"> Company Name</Label>
        <Input
          value={companyName}
          onChange={(e) => handleChange(e)}
          id="companyName"
          placeholder="Company Name"
        />
      </div>
      <div className="flex items-center gap-2 my-10">
      <Button variant="outline" onClick={()=>navigate("/admin/companies")}>Cancel</Button>
      <Button>Continue</Button>
      </div>
    </div>
  );
};

export default CreateCompanies;
