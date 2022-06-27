import React from "react";
import { useLocation, useParams } from "react-router-dom";
import NewsCard from "../components/atoms/NewsCard";
import Bulletine from "../components/atoms/Bulletine";
import Highlights from "../components/atoms/Highlights";
import EventGallery from "./EventGallery";
// import MessageFromManag from "./MessageFromManag";
// import MissionAndValue from "./MissionAndValue";
// import Sustainability from "./Sustainability";

function WhoWeAreSlug() {
  const params = useParams();
  console.log(params?.slug);
  const { state } = useLocation();

  const renderDetails = () => {
    switch (params?.slug) {
      case "NewCard":
        return       <NewsCard />;
      case "bulletine":
        return      <Bulletine />;
      case "highlights ":
        return     <Highlights />;
      default:
        return  <EventGallery />;
    }
  };

  return <>{renderDetails()}</>;
}

export default WhoWeAreSlug;
