import React, { useState ,useEffect } from 'react';
 import { getSustainabilityByCategory } from '../../services/WhoWeAreFront';
 import { showAlert } from "../../utils/showAlert";
const CustomAccordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  const [socialandculture, setSocialandculture] = useState([]);

   

  const handleAllRequirement = async () => {
    const data = { slug: "social-and-cultural-investment" };
    try {
      const resp = await getSustainabilityByCategory(data);
      console.log(resp);
      setSocialandculture(resp && resp.data.data);
      // console.log("newsreq", resp);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleAllRequirement();
  }, []);
  return (
    <>
    
    {socialandculture &&
        socialandculture?.sustainabilities?.map((item) =>(
          <div className="accordion-item">
          <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
            <div><h6>{item.title}</h6></div>
            <div><h5>{isActive ? '-' : '+'}</h5></div>
          </div>
          {isActive && <div className="accordion-content">{content}</div>}
        </div>
        ))}
    
    </>

  );
};

export default CustomAccordion;