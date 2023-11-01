import React from "react";

export const NavItem = (props) => {
  return (
    <div>
      <a
        href={props.link}
        className={`${props.textClass} px-3 py-2 rounded-md text-md font-medium`}
      >
        {props.text}
      </a>
    </div>
  );
};
