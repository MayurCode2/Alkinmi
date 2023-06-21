"use client";
import React from "react";
import { useState } from "react";
import icon1 from "public/Icon.svg";
import icon2 from "public/Icon-1.svg";
import icon3 from "public/Icon-2.svg";
import icon4 from "public/Icon-3.svg";
import icon5 from "public/Icon-4.svg";
import icon6 from "public/Icon-5.svg";
import "components/landingPage/LandingPage.css";
import logo from "public/logo.svg";

import Image from "next/image";

import profile from "public/Frame 1321314690.svg";
import profile1 from "public/Frame 1321314691.svg";
import Menu from "../menu/Menu";

const LandingPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const modal = () => {
    setShowModal(true);
  };
  const modalClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <nav className="bg-black border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between">
          <a href="" className="flex items-center">
            <Image src={logo} alt="logo" className="h-9 ml-3 mx-13" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
          </a>
          <button
            onClick={modalClose}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500  md:hidden  focus:outline-none focus:ring-2 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <button
            onClick={modal}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500  md:hidden  focus:outline-none focus:ring-2 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/3000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      <div className="ml-[10px] mr-[10px] md:ml-[20%] md:mr-[18%]">
        {showModal ? (
          <div className="z-50 mt-[100px] md:hidden">
            <Menu />
          </div>
        ) : null}
        <div>
          <h1 className="w-[301px] text-[40px] md:w-[903px] md:text-[80px] uppercase font-bold text-left">
            lorem ipsum
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 mb-10">
            <div className="gap-10 md:gap-4 flex flex-col">
              <h1 className="uppercase font-bold">dolor sit </h1>
              <p className="font-extralight  opacity-70">
                Lorem ipsum dolor sit amet consectetur. In nibh nam vel lacus
                sit. Neque venenatis mattis est nibh sed quis vel quis eu. In
                tincidunt faucibus aliquet quis sed sed. Phasellus non at lacus
                convallis elementum. Suspendisse tincidunt congue sem turpis.
                Nulla eu lorem cras leo.
              </p>
              <Image src={icon1} alt="icon" />
            </div>
            <div className="gap-10 md:gap-4 flex flex-col">
              <h1 className="uppercase font-bold">dolor sit </h1>
              <p className="font-extralight  opacity-70">
                Dolor adipiscing condimentum aliquam nullam mauris ante ipsum
                vel nisl. Dignissim molestie amet purus felis egestas amet eget.
                Viverra malesuada ultricies nunc vel diam posuere mauris sociis
                maecenas. Aenean dui et nec ultrices libero lacus
              </p>
              <Image src={icon2} alt="icon" />
            </div>
            <div className="gap-10 md:gap-4 flex flex-col">
              <Image src={profile} alt="profli" />
              <h1 className="uppercase font-bold">dolor sit </h1>
              <p className="font-extralight  opacity-70">
                Dolor adipiscing condimentum aliquam nullam mauris ante ipsum
                vel nisl. Dignissim molestie amet purus felis egestas amet eget.
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
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit.
              </p>
              <Image src={icon4} alt="iscon4" />
            </div>
            <div className="gap-10 md:gap-4 flex flex-col">
              <h1 className=" uppercase font-bold">Lorem ipsum.</h1>
              <p className=" font-extralight opacity-70">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit.
              </p>
              <Image src={icon5} alt="iscon4" />
            </div>
          </div>
          <div className="gap-4 flex flex-col md:flex-row gap-10 md:ml-[250px]">
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
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit.
              </p>
              <Image src={icon6} alt="iscon4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
