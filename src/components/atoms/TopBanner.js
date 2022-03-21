import React from "react";
import test from "../../assets/test.png";
import "../../staticcard.css";

function TopBanner({ topText, btnText, heading, subheading }) {
  return (
    <div className="banner-New-inner-inner">
      <button
        class="btn-white"
        style={{ textTransform: "uppercase" }}
      >
        {topText}
      </button>
      <p className="banner-heading">
        {heading}
      </p>
      <p className="banner-subheading">
        {subheading}
      </p>
      <button class="btn-blue">
        <a>{btnText}</a>
      </button>
    </div>
  );
}

export default TopBanner;
