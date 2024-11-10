import Image from "next/image"
import "../style/hero.css"
function Hero(){
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
                </div>
                {/* right */}
                <div className="hero-right-div">
                    <h1 className="title-hero">
                        I am Zaina Hussain, I am a SMM
                    </h1>
                    <p className="des-hero">I’m a <b>Social Media Manager</b> focused on creating engaging content and building strong brand communities. With a data-driven approach and creative mindset, I help brands grow their online presence and connect with audiences across platforms. Passionate about trends, strategy, 
                        and results, I’m here to make your brand shine in the digital world.</p>
       
                </div>
            </div>
        </div>
    )
}
export default Hero