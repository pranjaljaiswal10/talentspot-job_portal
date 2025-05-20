import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const CompanySetup = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    description: "",
    website: "",
    location,
    logo: null,
  });
  const handleChange = (e) => {
    setFormData({
      [e.target.id]: e.target.value,
    });
  };
  return (
    <div>
      <div className="flex">
        <Button>Back</Button>
        <h1>Company Setup</h1>
        <div>
          <Label htmlFor="companyName">Company Name</Label>
          <Input
            type="text"
            value={formData.companyName}
            id="companyName"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Input
            type="text"
            value={formData.description}
            id="description"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <Label htmlFor="website">Website</Label>
          <Input
            type="text"
            value={formData.website}
            id="website"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <Label htmlFor="logo">Logo</Label>
          <Input
            type="file"
            value={formData.logo}
            id="logo"
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default CompanySetup;
