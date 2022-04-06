import React from "react";
import LandingPage from "../components/LandingPage";
import ServiceBanner from "../components/atoms/ServiceBanner";
import Profile from "../components/atoms/Profile";
import ProfileLandingPage from "../components/atoms/ProfileLandingPage";

function Account() {
  return (
    <LandingPage>
      <ServiceBanner title="Account" />
      <Profile />
      <ProfileLandingPage />
    </LandingPage>
  );
}

export default Account;
