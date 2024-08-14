import React from "react";
import NavLink from "./navLink";

interface Link {
  path: string;
  title: string;
}

interface MenuOverlayProps {
  links: Link[];
}

const MenuOverlay = (props: MenuOverlayProps) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {props.links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
