import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { useSelector } from "react-redux";

const UpdateProfileDialog = ({ isEdit, setIsEdit }) => {
  const { userDetail } = useSelector((store) => store.auth);
  const mutation = useMutation({
    mutationFn: (formData) => {
      return fetch("api/submit", {
        method: "PUT",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    onSuccess: () => {
      console.log("From submitted successfully");
    },
    onError: (error) => {
      console.error("Submitted failed");
    },
  });
  const { isPending, error } = mutation;

  const [input, setInput] = useState({
    fullname: userDetail?.fullname || "",
    email: userDetail?.email || "",
    phoneNumber: userDetail?.phoneNumber || "",
    bio: userDetail.profile?.bio || "",
    skills: userDetail?.profile?.skills || "",
    resume: userDetail?.profile?.resume || "",
  });

  function handleChange(e) {
    setInput({ ...input, [e.target.id]: e.target.value });
  }
  function handleFileChange(e) {
    setInput({ ...input, [e.target.id]: e.target.file[0] });
  }
  function handleSubmit(e) {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("fullname", input.fullname);
      formData.append("email", input.email);
      formData.append("phoneNumber", input.phoneNumber);
      formData.append("bio", input.bio);
      formData.append("skills", input.skills);
      formData.append("resume", input.resume);
      mutation.mutate(formData);
      error && toast.error(error.message);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Dialog open={isEdit}>
        <DialogContent
          className="sm:max-m-[425px]"
          onIntractOutside={() => setIsEdit(false)}
        >
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-4 gap-4">
              <div className="grid grid-cols-4 gap-4 items-center">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  value={input.fullname}
                  onChange={(e) => handleChange(e)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 gap-4 items-center">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  value={input.email}
                  onChange={(e) => handleChange(e)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 gap-4 items-center">
                <Label htmlFor="phoneNumber" className="text-right">
                  Number
                </Label>
                <Input
                  type="text"
                  id="phoneNumber"
                  value={input.phoneNumber}
                  onChange={(e) => handleChange(e)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 gap-4 items-center">
                <Label htmlFor="bio" className="text-right">
                  Name
                </Label>
                <Input
                  type="text"
                  value={input.bio}
                  id="bio"
                  onChange={(e) => handleChange(e)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 gap-4 items-center">
                <Label htmlFor="skils" className="text-right">
                  skills
                </Label>
                <Input
                  type="text"
                  id="skills"
                  value={input.skills}
                  onChange={(e) => handleChange(e)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 gap-4 items-center">
                <Label htmlFor="resume" className="text-right">
                  Resume
                </Label>
                <Input
                  type="file"
                  value={input.resume}
                  name="file"
                  onChange={(e) => handleFileChange(e)}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              {isPending ? (
                <Button className="w-full my-4">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                </Button>
              ) : (
                <Button type="submit" className="my-4 w-full">
                  Update
                </Button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateProfileDialog;
