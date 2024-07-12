import { useState } from "react";
import { Button } from "@nextui-org/react";
import { categories, itemsFood } from "@/data/items";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/react";
import defaultSettings from "@/data/general";

const Items = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id); // Adjusted to initial category from updated categories array

  // Filter items based on the active category, now using categoryId for comparison
  const filteredItems = itemsFood.filter(
    (item) => activeCategory === 1 || item.categoryId === activeCategory
  );

  return (
    <div className="p-4">
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category.id}
            color={activeCategory === category.id ? "danger" : "default"}
            onClick={() => setActiveCategory(category.id)}
            className={`transition-all ease-in-out duration-300 ${
              activeCategory === category.id
                ? "shadow-lg bg-red-600 text-white"
                : "bg-gray-200"
            }`}
          >
            {category.name}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredItems.map((item) => (
          <div key={item.id}>
            <Card
              shadow="sm"
              className="h-[350px]"
              key={item.id}
              isPressable={false}
              onPress={() => console.log("item pressed")}
            >
              <CardBody className="overflow-visible p-0 ">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.name}
                  className="w-full object-cover h-[240px]"
                  src={item.image}
                />
              </CardBody>
              <CardHeader>{item.description}</CardHeader>
              <CardFooter className="text-small justify-between">
                <b>{item.name}</b>
                <p className="text-default-500">
                  {item.price} {defaultSettings.site.currency}
                </p>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
