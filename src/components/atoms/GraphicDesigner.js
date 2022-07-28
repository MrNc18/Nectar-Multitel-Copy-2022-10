import React from "react";
import moment from "moment";

const GraphicDesigner = ({ role }) => {
  function Graphicdesign({ data }) {
    console.log("data", data);
    return (
      <>
        <div className="container " style={{ backgroundColor: "#F6F6F6" }}>
          <div>
            <h6 className="pt-2">{data?.description}</h6>
          </div>
          <div>
            <h6 className="pt-4">{data?.recruitment_heading}</h6>
          </div>
          {data?.recruitment_requirement_tags?.map((item) => (
            <div>
              <p>{"- " + item?.name}</p>
            </div>
          ))}

          <div>
            <h6 className="pt-4">{data?.description_heading}</h6>
          </div>
          {data?.recruitment_description_tags?.map((item) => (
            <div>
              <p>{"- " + item?.name}</p>
            </div>
          ))}
          <p className="pb-3">
            Interested parties must send their CV and the reference of their
            vacancy in which they are applying to the email
            {data?.email ? " " + data?.email : " candidacy@multitel.co.ao"}
            {data?.date
              ? " until " + moment(data?.date).format("MMMM DD, YYYY") + "."
              : "."}
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <Graphicdesign data={role} />
    </>
  );
};

export default GraphicDesigner;
