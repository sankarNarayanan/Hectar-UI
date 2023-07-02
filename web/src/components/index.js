"use client";

import { Carousel } from "@material-tailwind/react";
import { CustomPrevArrow, CustomNextArrow, CustomNavigation } from "./Carousel";

export * from "@material-tailwind/react";

// export { default as Form } from "./Form";
export { default as Button } from "./Button";

Object.assign(Carousel, {
  CustomPrevArrow,
  CustomNextArrow,
  CustomNavigation,
});
