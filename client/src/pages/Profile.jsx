import AppliedJobsTable from "@/components/AppliedJobs";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import UpdateProfileDialog from "@/components/UpdateProfileDialog";
import useGetAppliedJobs from "@/hooks/useGetAppliedJobs";
import { Contact, Mail, Pen } from "lucide-react";
import { useState } from "react";

import { useSelector } from "react-redux";

const Profile = () => {
  useGetAppliedJobs();
  const { userDetail } = useSelector((store) => store.auth);
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="" alt="profile" />
          </Avatar>
          <div>
            <h1 className="font-medium text-xl ">{userDetail?.fullname}</h1>
            <p>{userDetail?.bio}</p>
          </div>
        </div>
        <Button onClick={() => setIsEdit(true)} variant="outline">
          <Pen />
        </Button>
      </div>
      <div className="my-5">
        <div className="flex items-center gap-3 my-2">
          <Mail />
          <span>{userDetail?.email}</span>
        </div>
        <div className="flex items-center gap-3 my-2">
          <Contact />
          <span>{userDetail?.phoneNumber}</span>
        </div>
      </div>
      <div className="my-5">
        <h1>Skills</h1>
        <div className="flex items-center gap-1">
          {userDetail?.profile?.skill.length !== 0 ? (
            userDetail?.profile?.skills.map((item, index) => (
              <Badge key={index}>{item}</Badge>
            ))
          ) : (
            <span>NA</span>
          )}
        </div>
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label>Resume</Label>
        {
          <a
            href=""
            className="text-blue-500 w-full hover:underline cursor-pointer"
          >
            Resume
          </a>
        }
      </div>
      <div className="max-4xl mx-auto bg-white rounded-2xl">
        <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
        <AppliedJobsTable />
      </div>
      <UpdateProfileDialog isEdit={isEdit} setIsEdit={setIsEdit} />
    </div>
  );
};

export default Profile;
