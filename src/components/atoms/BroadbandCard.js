import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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

function BroadbandCard({ imgdiv, head1, head2, content, detail }) {
  let navigate = useNavigate();
  return (
    <div className="broadband_card">
      <p className={detail ? "blue_big" : "blue_small"}>{head1}</p>
      <p className="black-color brd_heading">{head2}</p>
      {imgdiv}
      {content}
      <Button
        className="portfolio-item__link"
        style={styles}
        onClick={() => navigate("/categories/internet-services/tag")}
      >
        {detail ? "Start Now" : "Read More"}
      </Button>
    </div>
  );
}

export default BroadbandCard;
