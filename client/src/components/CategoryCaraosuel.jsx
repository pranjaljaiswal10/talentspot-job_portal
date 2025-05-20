import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "@/redux/jobsSlice";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "FullStack Developer",
];

const CategoryCaraosuel = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  function handleSearch(item) {
    dispatch(setSearchQuery(item))
    navigate(`/${item}`);
  }
  return (
    <div>
      <Carousel className="mx-auto my-20 max-w-xl w-full">
        <CarouselContent>
          {category.map((item) => (
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Button
                onClick={(item) => handleSearch(item)}
                variant="outline"
                className="rouded-full"
              >
                {item}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CategoryCaraosuel;
