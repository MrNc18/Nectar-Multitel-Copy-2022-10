import React from 'react'
import test from "./assets/test.png"
import "./staticcard.css"

function example() {
  return (
//       <center>
//     <div className='container'>
//         <img src={test} class="img-fluid" alt="Responsive image"/>
//         <button class="btn">we're Multitel</button>
//   <div class="data">
//   <h4 className='Data'>Experience new generation of Internet</h4>
//   </div>
//   <h5 class="sub">our Plan starts with $20</h5>

//   <button class="btnn"><a>Get started</a></button>
 
// </div>
// <br/>
      <div className='container-fluid'>
        <div className='row d-flex'>
          <div className='col-24'>
            <div className='banner-New'>
              <img src={test} class="img-fluid" alt="Responsive image" style={{opacity:"0.2"}}/>
              <div className='banner-New-inner'>
                <div className='banner-New-inner-inner'>
                  <button class="btn-white">we're Multitel</button>
                  <p>Experience new generation of Internet<br/>our Plan starts with $20</p>
                  <button class="btn-blue"><a>Get started</a></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    // </center> 

 
  )
}

export default example