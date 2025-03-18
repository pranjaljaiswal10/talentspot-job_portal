import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "FullStack Developer",
];

const CategoryCaraosuel = () => {
  const navigate = useNavigate();
  function handleSearch(item) {
    navigate(`/${item}`);
  }
  return (
    <div>
      <Carousel>
        <CarouselContent>
          {category.map((item) => (
            <CarouselItem>
              <Button
                onCick={(item) => handleSearch(item)}
                variant="outline"
                className="rouded-full"
              >
                {item}
              </Button>
            </CarouselItem>
          ))}
          <CarouselPrevious />
          <CarouselNext />
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CategoryCaraosuel;
