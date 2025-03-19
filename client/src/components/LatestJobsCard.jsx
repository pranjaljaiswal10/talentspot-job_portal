import { Badge } from "./ui/badge";


const LatestJobsCard = ({company,location,position,description,jobType,salary}) => {
  return (
    <ul>
      <li>{company}</li>
      <li>{location}</li>
      <li>{position}</li>
      <li>{description}</li>
      <li>
        <ul>
         <li><Badge variant="ghost">{position}</Badge></li>
         <li><Badge variant="ghost">{jobType}</Badge></li>
         <li><Badge variant="ghost"></Badge></li>
        </ul>
      </li>
    </ul>
  );
}

export default LatestJobsCard