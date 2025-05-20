import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { setSingleCompany } from "@/redux/companySlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const CreateCompanies = () => {
  const dispatch = useDispatch();
  const [companyName, setCompanyName] = useState("");
  const handleChange = (e) => {
    setCompanyName(e.target.value);
  };
  const handleClick = () => {
    dispatch(setSingleCompany(companyName));
  };
  return (
    <div>
      <h1>Your Company Name</h1>
      <p>
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
      <Button>Cancel</Button>
      <Button onClick={handleClick}>Continue</Button>
    </div>
  );
};

export default CreateCompanies;
