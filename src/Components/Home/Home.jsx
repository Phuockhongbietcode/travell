import React, { useEffect } from 'react'
import './home.scss'
import video from '../../Assets/video.mp4'
import { GrLocation } from "react-icons/gr"
import { HiFilter } from "react-icons/hi"
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FaTripadvisor } from "react-icons/fa";
import { RiTiktokLine } from "react-icons/ri";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])

    return (
        <section className="home">
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type ="video/mp4"></video>

            <div className="homeContent container">
                <div className="textDiv">
                    <span data-aos="fade-up"
                    className="smallText">
                        Our Packages
                    </span>
                    <h1 data-aos="fade-up"
                    className="homeTitle">
                        Search your holiday
                    </h1>
                </div>

                <div className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor='city'>Search your destination:</label>
                        <div className="input flex">
                            <input type="text" placeholder='Enter name here ...' />
                            <GrLocation className='icon' />
                        </div>
                    </div>
                    <div className="dateInput">
                        <label htmlFor="date">Search your date:</label>
                        <div className="input flex">
                            <input type="date"/>
                        </div>
                    </div>
                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">Max price:</label>
                            <h3 className='total'> $5000</h3>
                        </div>
                        <div className="input flex">
                            <input type="range" max="5000" min="1000"/>
                        </div>
                    </div>

                    <div className="searchOptions flex">
                        <HiFilter className='icon'/>
                        <span>MORE FILTERS</span>
                    </div>
                </div>
                <div className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <FiFacebook className='icon'/>
                        <FiInstagram className='icon'/>
                        <FaTripadvisor className='icon'/>
                        <RiTiktokLine className='icon' />
                    </div>

                    <div className="leftIcons">
                        <BsListTask className='icon' />
                        <TbApps className='icon' />

                    </div>
                </div>
            </div>
        </section>
    )
}
export default Home