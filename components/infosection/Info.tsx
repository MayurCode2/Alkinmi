import React from "react";
import Image from "next/image";
import icon1 from "public/Icon00.svg";
import icon2 from "public/Icon-1-1.svg";
import icon3 from "public/Icon-2-1.svg";

import profile1 from "public/Frame 1321314690 (1).svg";

function Info() {
  return (
    <div className="ml-[10px] mr-[10px] md:ml-[20%] md:mr-[18%]">
      <div>
        <h1 className="w-[300px] text-[40px] md:w-[600px] md:text-[80px] md:mt-[30px] uppercase font-bold text-left">
          lorem ipsum dolor set
        </h1>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 mb-10">
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
            Lorem ipsum dolor sit amet consectetur. In nibh nam vel lacus sit.
            Neque venenatis mattis est nibh sed quis vel quis eu. In tincidunt
            faucibus aliquet quis sed sed. Phasellus non at lacus convallis
            elementum. Suspendisse tincidunt congue sem turpis. Nulla eu lorem
            cras leo.
          </p>
          <Image src={icon2} alt="icon" />
        </div>
      </div>
      <div className="gap-4 flex flex-col md:flex-row gap-10 md:ml-[240px]">
        <Image
          className="md:w-[320px] md:h-[320px]"
          src={profile1}
          alt="profile1"
        />
        <div className="gap-10 md:gap-4 flex flex-col">
          <h1 className=" uppercase font-bold">Lorem ipsum.</h1>
          <p className=" font-extralight opacity-70">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit.
          </p>
          <Image src={icon3} alt="iscon4" />
        </div>
      </div>
    </div>
  );
}

export default Info;
