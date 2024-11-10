import "../style/services.css"
import { FaPenNib } from "react-icons/fa6";
import { SiCoinmarketcap } from "react-icons/si";


import { HiMiniVideoCamera } from "react-icons/hi2";



function Services(){
    return(
        <main className="main">
            <div  className="ser-container">
                {/* top div */}
                <div className="top-div-ser">
                    <h2 className="title-ser">MY SERVICES</h2>
                    <p className="des-ser">I’m a Social Media Manager with expertise in video editing and content writing. I create engaging, high-quality content that helps brands grow their online presence and connect with their audience. Whether it's crafting compelling posts or editing impactful videos, 
                        I focus on delivering results that drive engagement and build brand loyalty.</p>
                </div>
                {/* bottom div */}
                <div className="boxes-con">
                    <div className="box" >
                     <FaPenNib className="ser-icons"/>
                     <h3>Content Writing</h3>
                     <span>As a profession</span>
                    </div>
                    
                    <div className="box" >
                     <HiMiniVideoCamera  className="ser-icons"/>
                     <h3>Video Editing</h3>
                     <span>Passion</span>
                    </div>

                    <div className="box" >
                     < SiCoinmarketcap className="ser-icons"/>
                     <h3>Marketing</h3>
                     <span>Work for Brands</span>
                    </div>

                </div>

            </div>
        </main>

        
    )
}
export default Services 