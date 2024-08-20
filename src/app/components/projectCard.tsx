import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { PinContainer } from "./ui/3d-pin";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  tag: string[];
  gitUrl?: string;
  previewUrl?: string;
}

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div>
      <PinContainer
        className="h-52 w-52 md:w-96 md:h-72 rounded-t-xl relative group"
        href={props.gitUrl || ""}
        title={props.gitUrl || ""}
      >
        <div
          className="h-52 md:h-72 rounded-t-xl relative group"
          style={{
            background: `url(${props.imgUrl})`,
            backgroundSize: "cover",
          }}
        >
          {/* <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
            <Link
              href={props.gitUrl || ""}
              target="_blank"
              className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointe group-hover/link:text-white" />
            </Link>
            <Link
              href={props.previewUrl || ""}
              target="_blank"
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointe group-hover/link:text-white" />
            </Link>
          </div> */}
        </div>
      </PinContainer>
      <div className="text-white rounded-b-xl mt-3 py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{props.title}</h5>
        <p className="text-[#ADB7BE]">{props.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
