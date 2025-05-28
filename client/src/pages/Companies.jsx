import { useSelector } from "react-redux"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Companies = () => {
  const {allCompanies}=useSelector((store)=>store.company)
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent registered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
        {
          allCompanies.map((item)=>(
          <TableRow key={item._id}>
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
}

export default Companies