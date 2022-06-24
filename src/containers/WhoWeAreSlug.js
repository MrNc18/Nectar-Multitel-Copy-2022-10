import React from "react";
import { useLocation, useParams } from "react-router-dom";
import MessageFromManag from "./MessageFromManag";
import MissionAndValue from "./MissionAndValue";
import Sustainability from "./Sustainability";

function WhoWeAreSlug() {
  const params = useParams();
  console.log(params?.slug);
  const { state } = useLocation();

  const renderDetails = () => {
    switch (params?.slug) {
      case "management-message":
        return <MessageFromManag />;
      case "mission-and-values":
        return <MissionAndValue />;
      case "sustainability":
        return <Sustainability />;
      default:
        return <MessageFromManag />;
    }
  };

  return <>{renderDetails()}</>;
}

export default WhoWeAreSlug;
