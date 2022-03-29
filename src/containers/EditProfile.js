import React from "react";
import LandingPage from "../components/LandingPage";
import ServiceBanner from "../components/atoms/ServiceBanner";
import Profile from "../components/atoms/Profile";
import EditProfileForm from "../components/atoms/EditProfileForm";

function EditProfile() {
  return (
    <LandingPage>
      <ServiceBanner title="Edit Profile" />
      <Profile />
      <EditProfileForm />
    </LandingPage>
  );
}

export default EditProfile;
