import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"


const Filter = () => {
  return (
    <>
      <h1>Filter Jobs</h1>
      <h2>Location</h2>
      <RadioGroup defaultValue="option-one">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one">Option One</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two">Option Two</Label>
        </div>
      </RadioGroup>
    </>
  );
}

export default Filter