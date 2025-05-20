import { useNavigate } from "react-router-dom";
import { Badge } from "./ui/badge";

const LatestJobsCard = ({
  _id,
  company,
  location,
  position,
  description,
  jobType,
  salary,
}) => {
  const navigate = useNavigate();
  return (
    <ul
      onClick={() => navigate(`/description/${_id}`)}
      className="p-5 rounded-b-md shadow-xl border border-gray-200 cursor-pointer"
    >
      <li className="font-medium text-lg">{company}</li>
      <li className="text-sm text-gray-500">{location}</li>
      <li className="text-lg font-bold my-2">{position}</li>
      <li className="text-sm text-gray-600">{description}</li>
      <li>
          <Badge className="text- font-bold" variant="ghost">{position}</Badge>
          <Badge className="text- font-bold" variant="ghost">{jobType}</Badge>
          <Badge className="text- font-bold" variant="ghost">{salary}</Badge>
      </li>
    </ul>
  );
};

export default LatestJobsCard;
