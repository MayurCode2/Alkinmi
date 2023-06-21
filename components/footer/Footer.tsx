"use client";
import Accordion from "../acordian/Accordion";
import Slider from "../slider/Slider";

function Footer() {
  const items = [
    {
      title: "Lorem ipsum dolor sit amet",
      content: "Content for item 1",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      content: "Content for item 2",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      content: "Content for item 3",
    },
  ];

  return (
    <div className=" md:mt-[120px]">
      <div className="ml-[10px]  mr-[10px] md:ml-[20%] md:mr-[18%]">
        <h1 className="w-[300px] ml-2  text-[40px] md:w-[900px] md:text-[80px] md:mb-[20px] uppercase font-bold text-left">
          lorem ipsum dolor
        </h1>
      </div>
      <div className="hidden md:block">
        <Slider />
      </div>

      <div className=" ml-[10px]  mr-[10px] md:ml-[20%] md:flex flex-col justify-center md:mr-[18%]">
        <p className="font-extralight  opacity-70 ml-3 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quae
          reiciendis illum recusandae quisquam cupiditate dolore eos perferendis
          molestias. Repellat libero aperiam accusantium temporibus, eum autem
          dolores quo quae veniam! Pariatur, praesentium? Tenetur ipsum quasi
          amet mollitia nihil est sed cum quidem officiis? Doloremque alias
          autem a, eos assumenda ducimus eligendi adipisci sit dignissimos ad
          culpa maiores error sed velit.
        </p>

        <div className="mr-2">
          <Accordion items={items} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
