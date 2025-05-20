import { useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "./ui/badge";

const AppliedJobs = () => {
  const { allAppliedJobs } = useSelector((store) => store.job);
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent applied Jobs.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allAppliedJobs.map((item) => (
            <TableRow key={item._id}>
              <TableCell>{allAppliedJobs?.createdAt}</TableCell>
              <TableCell>{allAppliedJobs?.job.title}</TableCell>
              <TableCell>{allAppliedJobs?.company}</TableCell>
              <TableCell><Badge></Badge> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobs;
