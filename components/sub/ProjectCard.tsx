import Image from "next/image";
import React from "react";
import { IoOpenOutline } from "react-icons/io5";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
  website: string;
}

const ProjectCard = ({ src, title, description, link, website }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] flex flex-col justify-between cursor-pointer">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="sm:w-[100rem] sm:h-[20rem]"
      />

      <div className="flex flex-col justify-between">
        <div className="relative p-4">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>

        <div className="px-4 pb-4 flex gap-5 items-center">
          <a href={link} target="_blank">
            <Image src="/gitwhite.png" alt="github" width={30} height={30} />
          </a>
          <p>
            <a href={website ? website : ""}>
              <IoOpenOutline className={website ? "text-white w-[2rem] h-[2rem] bg-transparent" : "hidden"} />
            </a>
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ProjectCard;
