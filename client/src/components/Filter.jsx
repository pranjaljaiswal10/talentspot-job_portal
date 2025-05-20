import { fitlerData } from "@/utils/constant";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useState } from "react";

const Filter = () => {
  const [value, setValue] = useState("");
  
  return (
    <>
      <h1>Filter Jobs</h1>
      <h2>Location</h2>
      {fitlerData.map((item) => (
        <div key={item.fitlerType}>
          <h2>{item.fitlerType}</h2>
          <div>
            {item.array.map((data) => (
              <div key={data}>
                <RadioGroup value={value} onValueChange={setValue}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem className="text-gray-800" value={data} id={data} />
                    <Label htmlFor={data}>{data}</Label>
                  </div>
                </RadioGroup>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Filter;
