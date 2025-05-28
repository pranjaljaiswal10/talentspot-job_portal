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
import { toast } from "sonner";

const ApplicantTable = () => {
  const { allApplicant } = useSelector((store) => store.applicant);
  const handleStatus=async (status,id) => {
    try {
      const 

    } catch (error) {
      toast.error(error.message)
    }
  }
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
          <TableCell>{item.fullname}</TableCell> 
          <TableCell>{item?.email}</TableCell> 
          <TableCell>{item?.phoneNumber}</TableCell> 
          <TableCell>{item?.profile.resume ? <a href={} className="text-blue-600 cursor-pointer"></a>:}</TableCell> 
          <TableCell>{}</TableCell> 
          </TableRow>
        ))
      }
      </TableBody>
    </Table>
</div>
  )
}

export default ApplicantTable