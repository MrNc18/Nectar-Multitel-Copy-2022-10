import React, { useEffect, useState } from "react";
import LandingPage from "../components/LandingPage";
import ServiceBanner from "../components/atoms/ServiceBanner";
import Profile from "../components/atoms/Profile";
import ProfileLandingPage from "../components/atoms/ProfileLandingPage";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { changePassword, getUserDetailsByToken } from "../services/authentication";
import MyProductCard from "../components/atoms/MyProductCard";
import HelpDeskCard from "../components/atoms/HelpDeskCard";
import InternetQualityTest from "../components/atoms/InternetQualityTest";
import InvoiceTable from "../components/atoms/InvoiceTable";
import Settings from '../components/Admin/settings';
import EditProfileForm from "../components/atoms/EditProfileForm";
import { changePasswordIcon } from "../svg/ChangePasswordIcon";
import { profIcon } from "../svg/MyProfileIcon";
import { productsIcon } from "../svg/MyProductsIcon";
import { helpDeskIcon } from "../svg/HelpdeskIcon";
import { iqgIcon } from "../svg/InternetQualityGraphIcon";
import { invIcon } from "../svg/InvoicesIcon";

function Account() {
  
  const [editMode, setEditMode] = useState(false)
  return (
    <LandingPage>
      {/* <ServiceBanner title="Account" />
      <Profile />
      <ProfileLandingPage /> */}
      <Container className="my-5">
        <Tab.Container id="left-tabs-example" defaultActiveKey="profile">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item onClick={() => setEditMode(false)}>
                  <Nav.Link eventKey="profile">{profIcon}&nbsp;&nbsp;My Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="products">{productsIcon}&nbsp;&nbsp;My Products</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="helpdesk">{helpDeskIcon}&nbsp;&nbsp;Helpdesk</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="graph">{iqgIcon}&nbsp;&nbsp;Internet Quality Graph</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="invoices">{invIcon}&nbsp;&nbsp;Invoices</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="password">{changePasswordIcon}&nbsp;&nbsp;Change Password</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="profile">
                  {editMode ? <EditProfileForm /> : <ProfileLandingPage edit={(x) => setEditMode(x)} />}
                </Tab.Pane>
                <Tab.Pane eventKey="products">
                  <MyProductCard />
                </Tab.Pane>
                <Tab.Pane eventKey="helpdesk">
                  <HelpDeskCard />
                </Tab.Pane>
                <Tab.Pane eventKey="graph">
                  <InternetQualityTest />
                </Tab.Pane>
                <Tab.Pane eventKey="invoices">
                  <InvoiceTable />
                </Tab.Pane>
                <Tab.Pane eventKey="password">
                  <Settings clientside/>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </LandingPage>
  );
}

export default Account;
