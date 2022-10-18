import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { getAllServices } from "../services/intservices";
import ServiceCard from "./atoms/ServiceCard";
import ServiceCardDynamic from "./atoms/ServiceCardDynamic";

const servicesData = [
  {
    id: 1,
    title: "Phone",
    src: "/assets/images/phone.png",
  },
  {
    id: 2,
    title: "Broadband",
    src: "/assets/images/triimage2.jpg",
  },
  {
    id: 3,
    title: "Fiber",
    src: "/assets/images/tv_zoom.png",
  },
  {
    id: 4,
    title: "Television",
    src: "/assets/images/triimage3.jpg",
  },
];

function Services() {
  const [services, setServices] = useState([]);
  const [initial, setInitial] = useState("Loading...");

  useEffect(() => {
    (async () => {
      const response = await getAllServices();
      console.log(response);
      const serv = response?.data?.filter((item) => (item?.slug !== "landline-telephony" && item?.slug !== "tv-services"))
      setServices(serv);
      !response?.data?.length && setInitial("No service categories found");
    })();
  }, []);

  return (
    <section id="img_cards" className="my-5">
      <Container>
        <Row>
          {/* {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                src={service.src}
                title={service.title}
                home
              />
            ))} */}
          {services?.length ? (
            services.map((cat) => (
              <ServiceCardDynamic cat={cat} key={cat?.id} />
            ))
          ) : (
            <p>{initial}</p>
          )}
        </Row>
      </Container>
    </section>
  );
}

export default Services;
