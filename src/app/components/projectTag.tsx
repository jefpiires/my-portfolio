import Link from "next/link";
import React from "react";

interface ProjectTagProps {
  name: string;
  onClick: (newTag: string) => void;
  isSelected: boolean;
}

const ProjectTag = (props: ProjectTagProps) => {
  console.log("isSelected", props.isSelected);
  const buttonStyles = props.isSelected
    ? "text-white bg-gradient-to-br from-primary-600 to-secondary-400"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      onClick={() => props.onClick(props.name)}
      className={`rounded-full border-2 px-6 py-3 text-xl cursor-pointer ${buttonStyles} `}
    >
      <span className="">{props.name}</span>
    </button>
    // <button
    //   className={`rounded-full border-2 px-6 py-3 text-xl cursor-pointer ${buttonStyles}`}
    //   onClick={() => props.onClick(props.name)}
    // >
    //   {props.name}
    // </button>
  );
};

export default ProjectTag;
