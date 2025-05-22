import { Badge } from "@/components/ui/badge";
import { BASE_URL } from "@/utils/constant";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Jobdescription = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleJob } = useSelector((store) => store.job);
 
  return (
<>
</>
  );
};

export default Jobdescription;
