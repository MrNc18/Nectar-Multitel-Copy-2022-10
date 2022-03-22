import React from "react";
import { Button } from "react-bootstrap";

const styles = {
  padding: "7px",
  borderRadius: "5px",
  fontSize: "12px",
  border: "none",
  color: "#fff",
  background: "var(--secondary)",
  width: "42%",
  margin: "0 auto",
};

function BroadbandCard({imgdiv, head1, head2}) {
  return (
    <div className="broadband_card">
      <p className="blue_small">{head1}</p>
      <p className="black-color brd_heading">{head2}</p>
      {imgdiv}
      <p className="black-color my-4" style={{ fontSize: "14px" }}>
        Consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua.
      </p>
      <Button className="portfolio-item__link" style={styles}>
        Read More
      </Button>
    </div>
  );
}

export default BroadbandCard;
