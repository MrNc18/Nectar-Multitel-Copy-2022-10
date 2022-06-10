import React from 'react';
import RecruitmentForm from './RecruitmentForm';

function RecruitmentContent() {

   function Recruitcontent ({data}){
     return(
       <>
       <div>
       <div>
       <h2 className='pt-4' style={{ color: "#1D3557" }}>
           {data.heading}
         </h2>
       </div>
       <div>
         <p>
           {data.description}
         </p>
       </div>
       <div className="row">
       <div style={{ display: "flex" }} className="   col-md-4 ">
              <img
                className="img-fluid"
                height={250}
                width={300}
                style={{ borderRadius: "10px" }}
                src="https://images.unsplash.com/photo-1539193143244-c83d9436d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60 "
                alt="image here"
                srcset=""
              />
              </div>
              <div className="col-md-8">
                <RecruitmentForm />
              </div>
       </div>
       </div>
       </>
     )
   }

   const obj ={
     heading:"Recruitment",
     description:"Multitel bets on and values national human capital. We oer continuous development for your career. If you wish to be part of Multitel's sta,send your application by writing in the subject the position for which you are applying."
   }


  return (
   <>
   <div className="container">
     <div className='row'>
       <div className="">
        <Recruitcontent data={obj}/>
       </div>

     </div>
   </div>
   </>
  )
}

export default RecruitmentContent