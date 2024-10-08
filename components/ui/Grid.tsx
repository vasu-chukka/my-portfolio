import React from "react";
import { BentoGrid, BentoGridItem } from "./Bento-Grid";
import { gridItems } from "@/Data/GridItemsData";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="relative">
        {gridItems.map(({ id, title, description, className, img }) => (
          <BentoGridItem
            key={id}
            id={id}
            title={title}
            description={description}
            className={className}
            img={img}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
