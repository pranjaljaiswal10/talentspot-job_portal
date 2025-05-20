import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="text-center">
      <div className="space-y-4">
        <h1 className="font-medium text-[#F83002] bg-gray-100 rounded-full mx-auto px-4 py-2">No.1 Job Hunt Website</h1>
        <h2 className="text-5xl font-bold">
          Search, Apply & Get Your <span>Dream Jobs</span>
        </h2>
        <p className=""> Your Path to the Perfect Job Starts Here</p>
        <div className="flex mx-auto shadow-lg border border-gray-200  rounded-full items-center w-[40%]">
          <Input type="text" placeholder="Find you dream jobs" className="outline-none border-none w-full" />
          <Button variant="destructive" className="rounded-r-full" size="icon">
            <Search />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
