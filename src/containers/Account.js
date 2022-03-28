import React from 'react';
import LandingPage from "../components/LandingPage";
import ServiceBanner from "../components/atoms/ServiceBanner";
import { Button, Col, Container, Row, Card } from "react-bootstrap";
import Profile from '../components/atoms/Profile';

function Account() {
  return (
    <LandingPage>
        <ServiceBanner title="Account" />
        <Profile />
    </LandingPage>
  )
}

export default Account