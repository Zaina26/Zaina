import Image from "next/image"
import "../style/hero.css"
import "../style/about.css"
import { CgMail } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import Link from "next/link";

function About(){
    return(
        <div className="header-container">
            <div className="header-boxes-con">
                {/* left */}
                <div>
                    <Image src={"/images/z.jpeg"}
                    width={200}
                    height={200}
                    className="header-image"
                     alt="profile"></Image>
                     <div className="social-icon">
                     <Link href={""}><CgMail className="s-icon1"/></Link>
                    <Link href={""}> <FaFacebook className="s-icon2"/></Link>
                     <Link href={""}><MdCall className="s-icon3"/></Link>
                     </div>

                </div>
                {/* right */}
                <div className="hero-right-div">
                    <h1 className="title-hero">About me
                    </h1>
                    <p className="des-hero">As a Social Media Manager, I specialize in creating dynamic content and developing strategies that engage audiences and boost brand visibility. With a mix of creativity and analytics, I help brands tell their story, grow their online presence, and build lasting relationships with their followers. Passionate about staying ahead of trends, 
                        I’m dedicated to delivering measurable results and making every digital interaction count.</p>
        
                </div>
            </div>
        </div>
    )
}
export default About