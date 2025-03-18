import { Button } from "@/components/ui/button";
import CategoryCaraosuel from "@/components/CategoryCaraosuel";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import LatestJobs from "@/components/LatestJobs";

const Home = () => {
  return (
    <>
      <h1>No.1 Job Hunt Website</h1>
      <h2>
        Search, Apply & Get Your <span>Dream Jobs</span>
      </h2>
      <p>Your Path to the Perfect Job Starts Here</p>
      <div>
        <Input type="text" placeholder="Find you dream jobs" />
        <Button variant="destructive" size="icon">
          <Search />
        </Button>
      </div>
      <CategoryCaraosuel />
      <LatestJobs/>
    </>
  );
};

export default Home;
