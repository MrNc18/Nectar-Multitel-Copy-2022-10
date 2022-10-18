import React, { useEffect, useState, lazy, Suspense } from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
// import LandingPage from "../components/LandingPage";
// import ProfileLandingPage from "../components/atoms/ProfileLandingPage";
// import MyProductCard from "../components/atoms/MyProductCard";
// import HelpDeskCard from "../components/atoms/HelpDeskCard";
// import InvoiceTable from "../components/atoms/InvoiceTable";
// import InvoiceBill from "../components/atoms/InvoiceBill";
// import Settings from "../components/Admin/settings";
// import EditProfileForm from "../components/atoms/EditProfileForm";
import {
  changePassword,
  getUserDetailsByToken,
} from "../services/authentication";
import { changePasswordIcon } from "../svg/ChangePasswordIcon";
import { profIcon } from "../svg/MyProfileIcon";
import { productsIcon } from "../svg/MyProductsIcon";
import { helpDeskIcon } from "../svg/HelpdeskIcon";
import { iqgIcon } from "../svg/InternetQualityGraphIcon";
import { invIcon } from "../svg/InvoicesIcon";
import { AUTH_TOKEN, getCookie } from "../utils/cookie";
import { ROLE } from "../constants/authconstant";

const LandingPage = lazy(() => import("../components/LandingPage"));
const ProfileLandingPage = lazy(() => import("../components/atoms/ProfileLandingPage"));
const MyProductCard = lazy(() => import("../components/atoms/MyProductCard"));
const HelpDeskCard = lazy(() => import("../components/atoms/HelpDeskCard"));
const InvoiceTable = lazy(() => import("../components/atoms/InvoiceTable"));
const InvoiceBill = lazy(() => import("../components/atoms/InvoiceBill"));
const Settings = lazy(() => import("../components/Admin/settings"));
const EditProfileForm = lazy(() => import("../components/atoms/EditProfileForm"));

function Account() {
  const [editMode, setEditMode] = useState(false);
  const [invDetail, setInvDetail] = useState(false);
  const isAuthenticated = getCookie(AUTH_TOKEN);
  const [userRole, setUserRole] = useState("");

  const getDataByToken = async () => {
    if (isAuthenticated) {
      const result = await getUserDetailsByToken();
      console.log(result);
      setUserRole(result?.data?.data?.role);
    }
  };

  useEffect(() => {
    getDataByToken();
  }, []);
  console.log(userRole);

  return (
    <Suspense fallback={<div>Loading...</div>}>
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
                  <Nav.Link eventKey="profile">
                    {profIcon}&nbsp;&nbsp;My Profile
                  </Nav.Link>
                </Nav.Item>
                {userRole == ROLE.USER && (
                  <>
                    <Nav.Item>
                      <Nav.Link eventKey="products">
                        {productsIcon}&nbsp;&nbsp;My Products
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="helpdesk">
                        {helpDeskIcon}&nbsp;&nbsp;Helpdesk
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="graph" href="https://multitelsites.speedtestcustom.com/" target="_blank">
                        {iqgIcon}&nbsp;&nbsp;Internet Quality Graph
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={() => setInvDetail(false)}>
                      <Nav.Link eventKey="invoices">
                        {invIcon}&nbsp;&nbsp;Invoices
                      </Nav.Link>
                    </Nav.Item>
                  </>
                )}
                <Nav.Item>
                  <Nav.Link eventKey="password">
                    {changePasswordIcon}&nbsp;&nbsp;Change Password
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="profile">
                  {userRole == ROLE.USER ? (
                    editMode ? (
                      <EditProfileForm />
                    ) : (
                      <ProfileLandingPage edit={(x) => setEditMode(x)} />
                    )
                  ) : (
                    <EditProfileForm />
                  )}
                </Tab.Pane>
                {userRole == ROLE.USER && (
                  <>
                    <Tab.Pane eventKey="products">
                      <MyProductCard />
                    </Tab.Pane>
                    <Tab.Pane eventKey="helpdesk">
                      <HelpDeskCard />
                    </Tab.Pane>
                    <Tab.Pane eventKey="graph">
                      {/* <InternetQualityTest /> */}
                    </Tab.Pane>
                    <Tab.Pane eventKey="invoices">
                      {invDetail ? (
                        <InvoiceBill />
                      ) : (
                        <InvoiceTable detail={(x) => setInvDetail(x)} />
                      )}
                    </Tab.Pane>
                  </>
                )}
                <Tab.Pane eventKey="password">
                  <Settings clientside />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </LandingPage>
    </Suspense>
  );
}

export default Account;
