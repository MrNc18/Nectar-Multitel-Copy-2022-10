import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Bulletine from "../components/atoms/Bulletine";
import Highlights from "../components/atoms/Highlights";
import EventGallery from "./EventGallery";
import News from "./News";

const NewsSlug = () => {
  const params = useParams();
  console.log(params?.slug,"slug");

  const { state } = useLocation();

  const renderDetails = () => {
    switch (params?.slug) {
      case "bulle":
        return <News />;
      case "bulle-1":
        return <Bulletine />;
      case "highlights":
        return <Highlights />;
      case "event-gallery-1":
        return <EventGallery />;
      default:
        return <News />;
    }
  };

  return <>{renderDetails()}</>;
};

export default NewsSlug;
