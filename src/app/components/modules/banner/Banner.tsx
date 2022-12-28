import React from "react";
import banner from "public/images/Hero.svg";
const Banner: React.FC = (): React.ReactElement => {
  return (
    <div>
      <img alt="" src={banner} />
    </div>
  );
};
export default Banner
