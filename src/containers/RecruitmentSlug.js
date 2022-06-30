// import React from 'react';
// import { useLocation, useParams } from "react-router-dom";
// import Commercial from '../components/atoms/Commercial';
// import GraphicDesigner from '../components/atoms/GraphicDesigner';
// import MarketingandCommunicationTechnique from '../components/atoms/MarketingandCommunicationTechnique';
// import Recruitment from './Recruitment';

// function RecruitmentSlug() {
//     const params = useParams();
//     console.log(params?.slug);
//     const { state } = useLocation();
  
//     const renderDetails = () => {
//       switch (params?.slug) {
//         case "recuitment":
//           return <Recruitment />;
//         case "marketing":
//           return <Commercial />;
//         case "graphic-designer-1":
//           return <GraphicDesigner />;
//         case "communication":
//           return <MarketingandCommunicationTechnique />;
//         default:
//           return <Recruitment />;
//       }
//     };
  
//     return <>{renderDetails()}</>;
//   }  

// export default RecruitmentSlug