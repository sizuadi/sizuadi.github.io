import React from "react";
import { TypeAnimation } from "react-type-animation";
const Nav = () => {
  return (
    <div>
      <TypeAnimation
        sequence={[
          "I'm currently working for this page.",
          1000,
          "Please wait...",
          2000,
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        className="text-xl"
      />
    </div>
  );
};

export default Nav;
