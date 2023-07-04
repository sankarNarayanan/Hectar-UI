import ChevronRightIcon from "@/assets/svg/chevron-right.svg";

export const CustomPrevArrow = (props) => {
  return (
    <button
      className={`!absolute -bottom-50 lg:-bottom-100 lg:left-[300px] z-20 ${
        props.firstIndex && "opacity-50"
      }`}
      onClick={() => props.handlePrev()}
    >
      <ChevronRightIcon className="rotate-180" alt="ChevronRightIcon" />
    </button>
  );
};

export const CustomNextArrow = (props) => {
  return (
    <button
      className={`!absolute -bottom-50 lg:-bottom-100 z-20 !right-0 lg:!right-[300px] ${
        props.lastIndex && "opacity-50"
      }`}
      onClick={() => props.handleNext()}
    >
      <ChevronRightIcon alt="ChevronRightIcon" />
    </button>
  );
};

export const CustomNavigation = ({ setActiveIndex, activeIndex, length }) => {
  const LEFT_MAP = {
    0: "left-0",
    1: "left-1/4 -ml-5 lg:left-2/4 lg:-ml-[65px]",
    2: "left-1/2 -ml-10 lg:left-full lg:-ml-130",
    3: "left-1/2",
    4: "left-3/4 -ml-5",
    5: "left-full -ml-10",
  };
  const left = LEFT_MAP[activeIndex];
  return (
    <div className="flex justify-center px-50 !absolute !-bottom-[35px] lg:!-bottom-[87px] w-full z-10">
      <div className=" w-[400px] h-[3px] lg:h-[5px] bg-gray-300 rounded-full relative">
        <div
          className={`absolute bg-blue-600 rounded-full transition-all duration-500 w-10 lg:w-130 h-[3px] lg:h-[5px] ${left}`}
        ></div>
      </div>
    </div>
  );
};
