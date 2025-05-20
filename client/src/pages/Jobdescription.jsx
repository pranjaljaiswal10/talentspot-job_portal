import { Badge } from "@/components/ui/badge";
import { BASE_URL } from "@/utils/constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Jobdescription = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleJob } = useSelector((store) => store.job);
  useEffect(() => {
    async function getDescription() {
      const response = await fetch(`${BASE_URL}/job/${id}`, { method: "post" });
      const json = await response.json();
      dispatch(json.data);
    }
    getDescription();
  }, [id]);
  return (
    <div>
      <div>
        <h1></h1>
        <span>
          <Badge>{`Postions`}</Badge>
        </span>
        <span>
          <Badge>{`Full Time`}</Badge>
        </span>
        <span>
          <Badge>{`LPA`}</Badge>
        </span>
        <button></button>
      </div>
      <h2>Job Description</h2>
      <hr />
      <ul>
        <li>{`Role:`}</li>
        <li>{`Location:`}</li>
        <li>{`Description:`}</li>
        <li>{`Expierence:`}</li>
        <li>{`Salary:`}</li>
        <li>{`Total Applicnts:`}</li>
        <li>{`PostedDate:`}</li>
      </ul>
    </div>
  );
};

export default Jobdescription;
