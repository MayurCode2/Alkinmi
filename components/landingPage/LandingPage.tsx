import React from "react";
import icon1 from "public/Icon.svg";
import icon2 from "public/Icon-1.svg";
import icon3 from "public/Icon-2.svg";
import icon4 from "public/Icon-3.svg";
import icon5 from "public/Icon-4.svg";
import icon6 from "public/Icon-5.svg";

import Image from "next/image";

import profile from "public/Frame 1321314690.svg"
import profile1 from "public/Frame 1321314691.svg"


function LandingPage() {
  return (
    <div className="ml-[10px] mr-[10px] md:ml-[20%] md:mr-[18%]">
      <div>
        <h1 className="w-[301px] text-[40px] md:w-[903px] md:text-[120px] uppercase font-bold text-left">
          lorem ipsum
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 mb-10">
          <div className="gap-10 md:gap-4 flex flex-col">
            <h1 className="uppercase font-bold">dolor sit </h1>
            <p className="font-extralight  opacity-70">
              Lorem ipsum dolor sit amet consectetur. In nibh nam vel lacus sit.
              Neque venenatis mattis est nibh sed quis vel quis eu. In tincidunt
              faucibus aliquet quis sed sed. Phasellus non at lacus convallis
              elementum. Suspendisse tincidunt congue sem turpis. Nulla eu lorem
              cras leo.
            </p>
            <Image src={icon1} alt="icon" />
          </div>
          <div className="gap-10 md:gap-4 flex flex-col">
            <h1 className="uppercase font-bold">dolor sit </h1>
            <p className="font-extralight  opacity-70">
              Dolor adipiscing condimentum aliquam nullam mauris ante ipsum vel
              nisl. Dignissim molestie amet purus felis egestas amet eget.
              Viverra malesuada ultricies nunc vel diam posuere mauris sociis
              maecenas. Aenean dui et nec ultrices libero lacus
            </p>
            <Image src={icon2} alt="icon" />
          </div>
          <div className="gap-10 md:gap-4 flex flex-col">
            <Image src={profile} alt="profli" />
            <h1 className="uppercase font-bold">dolor sit </h1>
            <p className="font-extralight  opacity-70">
              Dolor adipiscing condimentum aliquam nullam mauris ante ipsum vel
              nisl. Dignissim molestie amet purus felis egestas amet eget.
              Viverra malesuada ultricies nunc vel diam posuere mauris sociis
              maecenas. Aenean dui et nec ultrices libero lacus
            </p>
            <Image src={icon3} alt="icon" />
          </div>
          <div className="gap-10 md:gap-4 flex flex-col">
            <h1 className=" uppercase font-bold">Lorem ipsum.</h1>
            <p className=" font-extralight opacity-70">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </p>
            <Image src={icon4} alt="iscon4"/>
          </div>
          <div className="gap-10 md:gap-4 flex flex-col">
          <h1 className=" uppercase font-bold">Lorem ipsum.</h1>
            <p className=" font-extralight opacity-70">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </p>
            <Image src={icon5} alt="iscon4"/>
          </div>

        </div>
        <div className="gap-4 flex flex-col md:flex-row gap-10 md:ml-[250px]">
          <Image className="md:w-[320px] md:h-[320px]" src={profile1} alt="profile1"/>
          <div className="gap-10 md:gap-4 flex flex-col">
          <h1 className=" uppercase font-bold">Lorem ipsum.</h1>
            <p className=" font-extralight opacity-70">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </p>
            <Image src={icon5} alt="iscon4"/>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default LandingPage;
