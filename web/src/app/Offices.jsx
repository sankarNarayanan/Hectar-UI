import { Carousel, Typography } from "@/components";

function Chennai() {
  return (
    <div className=" bg-[#F5F5F5] px-5 py-30 rounded-lg flex flex-col justify-center row-span-[1] col-auto ">
      <Typography variant="lead" className="lg:text-xl font-semibold">
        Chennai, India
      </Typography>
      <Typography className="text-base mt-1">
        New #5 / Old #3, Nandanam <br />
        1st Street, Nandanam, Chennai 600035.
      </Typography>
    </div>
  );
}

function Guntur() {
  return (
    <div className=" bg-[#F5F5F5] px-5 py-30 rounded-lg flex flex-col justify-center row-span-[1] col-auto">
      <Typography variant="lead" className="lg:text-xl font-semibold">
        Guntur, India
      </Typography>
      <Typography className="text-base mt-1">
        Kamakshi Nagar Main Road,
        <br />
        Opposite Mirchi Yard, Guntur 522005
      </Typography>
    </div>
  );
}

function Singapore() {
  return (
    <div className=" bg-[#F5F5F5] px-5 py-30 rounded-lg flex flex-col justify-center row-span-[1] col-auto">
      <Typography variant="lead" className="lg:text-xl font-semibold">
        Singapore
      </Typography>
      <Typography className="text-base mt-1">
        68 Circular Road <br />
        #02-01 Singapore (049422)
      </Typography>
    </div>
  );
}

function Colombo() {
  return (
    <div className=" bg-[#F5F5F5] px-5 py-30 rounded-lg flex flex-col justify-center row-span-[1] col-auto">
      <Typography variant="lead" className="lg:text-xl font-semibold">
        Colombo, Srilanka
      </Typography>
      <Typography className="text-base mt-1">
        195 Mawatha Road, Grandpass
        <br /> Colombo 14, Srilanka.
      </Typography>
    </div>
  );
}

function Dhaka() {
  return (
    <div className=" bg-[#F5F5F5] px-5 py-30 rounded-lg flex flex-col justify-center row-span-[1] col-auto">
      <Typography variant="lead" className="lg:text-xl font-semibold">
        Dhaka, Bangladesh
      </Typography>
      <Typography className="text-base mt-1">
        Gulshan Palladium (3rd Floor, West Block), 3B (North Side), Plot No:
        CEN(C) 1, Road-95/97, Gulshan-2, Dhaka-1212.
      </Typography>
    </div>
  );
}

function Dubai() {
  return (
    <div className=" bg-[#F5F5F5] px-5 py-30 rounded-lg flex flex-col justify-center row-span-[1] col-auto">
      <Typography variant="lead" className="lg:text-xl font-semibold">
        Dubai
      </Typography>
      <Typography className="text-base mt-1">
        FOAM0211, Compass Building, Al Shohada Road, AL Hamra Industrial
        Zone-FZ, Ras Al Khaimah, UAE
      </Typography>
    </div>
  );
}
export default function Offices() {
  return (
    <section id="Offices">
      <div className="container mt-50 mb-150">
        <Typography vatinat="h2" className="text-center text-[2rem]">
          Our Offices
        </Typography>

        <div className="w-screen grid-rows-1 overflow-x-scroll lg:grid-cols-3 gap-30 items-strech mt-30 hidden lg:grid">
          <Chennai />
          <Guntur />
          <Singapore />
          <Colombo />
          <Dhaka />
          <Dubai />
        </div>
        <div className="px-4 pt-30">
        <Carousel
          className="!overflow-x-clip lg:hidden"
          navigation={Carousel.CustomNavigation}
          prevArrow={Carousel.CustomPrevArrow}
          nextArrow={Carousel.CustomNextArrow}
        >
          <div className="relative">
            <Chennai />
          </div>
          <div className="relative">
            <Guntur />
          </div>
          <div className="relative">
            <Singapore />
          </div>
          <div className="relative">
            <Colombo />
          </div>
          <div className="relative">
            <Dhaka />
          </div>
          <div className="relative">
            <Dubai />
          </div>
        </Carousel>
        </div>
        
      </div>
    </section>
  );
}
