import Image from "next/image";
import aboutimg from "public/Слой 43 копия 3.svg";
import circalimg from "public/circleimg.png";

function About() {
  return (
    <div className={"md:p-[120px]"}>
      <div className="hidden md:block relative h-[682px] md:flex md:align-baseline md:gap-4 p-[40px]  flex m-[70px]">
        <div className=" z-20">
          <div className=" font-extrabold text-[120px] text-shadow-md uppercase ">
            <p className=" bg-transparent">about</p>
          </div>
          <div className="flex  bg-transparent">
            <div className="">
              <p className="font-extrabold text-[120px] text-shadow-md uppercase">
                us
              </p>
              <p>Lorem.</p>
              <p>Lorem.</p>
            </div>
            <Image src={circalimg} alt="circleimg" className="circle z-0 " />
          </div>
        </div>
        <div className="flex justify-center items-center ml-[140px] z-20 bg-transparent">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit
          </p>
        </div>
        <Image
          src={aboutimg}
          alt="about"
          className="absolute w-full h-full top-0 bottom-0 left-0 right-0 opacity-0  hover:opacity-100 hover:blur-sm z-10 duration-400"
        />
      </div>
    </div>
  );
}

export default About;

