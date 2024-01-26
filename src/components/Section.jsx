import "@fontsource/poppins";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/400-italic.css";
import "@fontsource/inter"; 
import "@fontsource/inter/400.css"; 
import React from 'react'
import './Section.css'

function Section() {
    return (
      
        <section>
            <div className='main-container'>
                <div className='uper-content'>
                    YOUR FEET DESERVE THE BEST
                </div>
                <div className="lower-content">
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </div>
                <div className="btn">
                    <button className="btn-first">Shop Now</button>
                    <button className="btn-sec"> Category</button>
                </div>
                <div className='side-content'>
                    <div>Also Available on</div>
                    <img src="/images/flipkart.png" alt="" />
                    <img src="/images/amazon.png" alt="" />
                </div>
            </div>

        <div className='hero'>
                <img src="/images/hero-image.png" alt="" />
            </div>
        </section>
       
    )
}

export default Section;