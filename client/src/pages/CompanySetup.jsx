import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { BASE_URL } from "@/utils/constant";
import { useMutation } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CompanySetup = () => {
  const navigate = useNavigate();
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
  const handelFileChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.file[0] });
  };
  const mutation = useMutation({
    mutationFn: async () => {
      const response = await fetch(`${BASE_URL}/`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "multipart/form-Data",
        },
        credentials: "include",
      });
      return response.json();
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("companyName", formData.companyName);
    form.append("description", formData.description);
    form.append("website", formData.website);
    form.append("location", formData.location);
    form.append("logo", formData.logo);

    mutation.mutate(form);
  };

  return (
    <div className="max-w-xl mx-auto my-10">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="flex items-center gap-5 p-8">
          <Button
            onClick={() => navigate("/admin/companies")}
            variant="outline"
            className="flex items-center gap-2 text-gray-500 font-semibold"
          >
            <ArrowLeft />
            Back
          </Button>
          <h1 className="font-bold text-xl">Company Setup</h1>
        </div>
          <div className="grid grid-cols-2 gap-4">

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
            onChange={(e) => handelFileChange(e)}
            />
            </div>
        </div>
      </form>
    </div>
  );
};

export default CompanySetup;
