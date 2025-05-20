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



const AdminJobsApplicant = () => {
  const { allApplicant } = useSelector((store) => store.applicant);
  return (
    <div>
      <h1>{`Applicants${allApplicant.length}`}</h1>
      <Table>
        <TableCaption>A list of your recent applied user</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead >Full Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Resume</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
        {
          allApplicant.map((item)=>(
            <TableRow key={item._id}>
            <TableCell></TableCell> 
            <TableCell></TableCell> 
            <TableCell></TableCell> 
            <TableCell></TableCell> 
            <TableCell></TableCell> 
            </TableRow>
          ))
        }
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminJobsApplicant;
